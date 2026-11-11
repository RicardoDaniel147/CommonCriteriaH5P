# -*- coding: utf-8 -*-
"""
Construye el paquete H5P (Accordion oficial de H5P.org) con el catalogo CC Parte 2:
  1. Descarga H5P.Accordion-1.0 y H5P.AdvancedText-1.1 (repositorios oficiales h5p/*).
  2. Genera content/content.json (13 paneles: portada + 11 clases) y h5p.json (es).
  3. Empaqueta common-criteria-parte2.h5p (zip con rutas forward-slash).
  4. Descarga h5p-standalone@3.8.2 para reproducirlo en GitHub Pages sin servidor.
"""
import json, io, sys, os, re, urllib.request, urllib.parse, zipfile

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
H5P_DIR = os.path.join(ROOT, "h5p")
PKG_DIR = os.path.join(H5P_DIR, "paquete-accordion")
LIBS_DIR = os.path.join(PKG_DIR, "libraries")

def fetch(url, destino=None):
    req = urllib.request.Request(url, headers={"User-Agent": "cc-part2-builder/1.0"})
    with urllib.request.urlopen(req, timeout=90) as r:
        data = r.read()
    if destino:
        os.makedirs(os.path.dirname(os.path.abspath(destino)), exist_ok=True)
        with open(destino, "wb") as f:
            f.write(data)
    return data

# ---------- 1) H5P.Accordion 1.0 ----------
acc_dir = os.path.join(LIBS_DIR, "H5P.Accordion-1.0")
os.makedirs(acc_dir, exist_ok=True)
acc_base = "https://raw.githubusercontent.com/h5p/h5p-accordion/master"
lib_acc = json.loads(fetch(acc_base + "/library.json"))
assert lib_acc["machineName"] == "H5P.Accordion" and lib_acc["majorVersion"] == 1 and lib_acc["minorVersion"] == 0
# quitar dependencia FontAwesome (los iconos provienen del nucleo H5P, no de FA)
lib_acc.pop("preloadedDependencies", None)
with open(os.path.join(acc_dir, "library.json"), "w", encoding="utf-8") as f:
    json.dump(lib_acc, f, indent=2)
for fn in ["semantics.json", "h5p-accordion.js", "h5p-accordion.css"]:
    fetch(f"{acc_base}/{fn}", os.path.join(acc_dir, fn))
print("H5P.Accordion-1.0 listo (sin FontAwesome)")

# ---------- H5P.AdvancedText 1.1 ----------
txt_base = "https://raw.githubusercontent.com/h5p/h5p-advanced-text/master"
txt_dir = os.path.join(LIBS_DIR, "H5P.AdvancedText-1.1")
os.makedirs(txt_dir, exist_ok=True)
lib_txt = json.loads(fetch(txt_base + "/library.json"))
assert lib_txt["machineName"] == "H5P.AdvancedText" and (lib_txt["majorVersion"], lib_txt["minorVersion"]) == (1, 1)
with open(os.path.join(txt_dir, "library.json"), "w", encoding="utf-8") as f:
    json.dump(lib_txt, f, indent=2)
for fn in ["semantics.json", "text.js", "text.css"]:
    fetch(f"{txt_base}/{fn}", os.path.join(txt_dir, fn))
print("H5P.AdvancedText-1.1 listo")

# ---------- 2) contenido ----------
src = open(os.path.join(ROOT, "assets", "catalogo.js"), encoding="utf-8").read()
i = src.index("const META = {"); j = src.index("};", i) + 1
meta = json.loads(src[i + len("const META = "):j])
k = src.index("const CATALOGO = ["); end = src.rindex("];") + 1
catalogo = json.loads(src[k + len("const CATALOGO = "):end])

def texto_panel(html):
    return {"library": "H5P.AdvancedText 1.1", "metadata": {}, "params": {"text": html}}

def panel_intro():
    leyenda = "".join(f"<li><strong>{l['sigla']}</strong> — {l['texto']}</li>" for l in meta["leyenda"])
    html = (
        "<p><strong>Catálogo completo de los requisitos funcionales de seguridad (SFR)</strong> de la Parte 2 de "
        "Common Criteria (ISO/IEC 15408-2:2022 · CCMB-2022-11-002 Rev. 1), organizado según la jerarquía oficial: "
        "<strong>Clase → Familia → Componente</strong>.</p>"
        "<p><strong>Jerarquía:</strong> CLASE (código de 3 letras, p. ej. <code>FDP</code>) → FAMILIA "
        "(clase + sufijo de 3 letras, p. ej. <code>FDP_ACC</code>) → COMPONENTE (requisito evaluable, p. ej. "
        "<code>FDP_ACC.1</code>; los componentes pueden ser jerárquicos).</p>"
        f"<p><strong>Totales:</strong> {len(catalogo)} clases · "
        f"{sum(len(c['familias']) for c in catalogo)} familias · "
        f"{sum(len(f['componentes']) for c in catalogo for f in c['familias'])} componentes.</p>"
        f"<p><strong>Siglas:</strong></p><ul>{leyenda}</ul>"
        f"<p><em>{meta['notaFuente']}</em></p>"
    )
    return {"title": "Sobre este catálogo (Common Criteria Parte 2)", "content": texto_panel(html)}

def panel_clase(n, c):
    nf = len(c["familias"])
    nc = sum(len(f["componentes"]) for f in c["familias"])
    cuerpo = [
        f"<p><strong>Definición:</strong> {c['definicion']}</p>",
        f"<p><em>Contiene {nf} familias y {nc} componentes (sección {c['seccion']} del documento oficial).</em></p>",
    ]
    for f in c["familias"]:
        badge = f" <strong>[{f['etiqueta']}]</strong>" if f["etiqueta"] else ""
        cuerpo.append(f"<h4>{f['codigo']} — {f['nombre']} ({f['nombreEn']}){badge}</h4>")
        cuerpo.append(f"<p>{f['resumen']}</p><ul>")
        for comp in f["componentes"]:
            cuerpo.append(f"<li><strong>{comp['id']} · {comp['nombre']}</strong> — {comp['desc']}</li>")
        cuerpo.append("</ul>")
    return {"title": f"{n}. {c['codigo']} — {c['nombre']}", "content": texto_panel("".join(cuerpo))}

panels = [panel_intro()] + [panel_clase(n, c) for n, c in enumerate(catalogo, 1)]
content = {"title": "Common Criteria · ISO/IEC 15408-2 · Catálogo de requisitos funcionales (Parte 2)",
           "panels": panels}
os.makedirs(os.path.join(PKG_DIR, "content"), exist_ok=True)
with open(os.path.join(PKG_DIR, "content", "content.json"), "w", encoding="utf-8") as f:
    json.dump(content, f, ensure_ascii=False, indent=1)
print("content.json generado:", len(panels), "paneles")

h5p_json = {
    "title": "Common Criteria · ISO/IEC 15408-2 · Catálogo de requisitos funcionales (Parte 2)",
    "language": "es",
    "mainLibrary": "H5P.Accordion",
    "embedTypes": ["iframe"],
    "license": "CC BY-SA",
    "defaultLanguage": "es",
    "preloadedDependencies": [
        {"machineName": "H5P.Accordion", "majorVersion": 1, "minorVersion": 0},
        {"machineName": "H5P.AdvancedText", "majorVersion": 1, "minorVersion": 1},
    ],
}
with open(os.path.join(PKG_DIR, "h5p.json"), "w", encoding="utf-8") as f:
    json.dump(h5p_json, f, ensure_ascii=False, indent=2)
print("h5p.json generado (idioma es)")

# ---------- 3) empaquetar .h5p ----------
zip_path = os.path.join(H5P_DIR, "common-criteria-parte2.h5p")
with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as z:
    for base, _dirs, files_ in os.walk(PKG_DIR):
        for fn in files_:
            full = os.path.join(base, fn)
            rel = os.path.relpath(full, PKG_DIR).replace("\\", "/")
            z.write(full, rel)
print("Paquete .h5p:", zip_path, "-", round(os.path.getsize(zip_path) / 1024), "KB")

# ---------- 4) reproductor h5p-standalone ----------
SA = "https://cdn.jsdelivr.net/npm/h5p-standalone@3.8.2/dist"
for fn in ["main.bundle.js", "frame.bundle.js", "styles/h5p.css"]:
    fetch(f"{SA}/{fn}", os.path.join(H5P_DIR, fn))
    print("standalone:", fn)
# limpiar @font-face de fuentes que no empaquetamos (Inter / Open Sans usan fallback del sistema)
try:
    hp = os.path.join(H5P_DIR, "styles", "h5p.css")
    hp_css = open(hp, encoding="utf-8").read()
    bloques_css = re.findall(r"@font-face\s*\{[^}]*\}", hp_css)
    n_quitadas = 0
    for b in bloques_css:
        if "fonts/inter/" in b or "fonts/open-sans/" in b:
            hp_css = hp_css.replace(b, "")
            n_quitadas += 1
    open(hp, "w", encoding="utf-8").write(hp_css)
    print(f"standalone: h5p.css limpio ({n_quitadas} @font-face sin fuente eliminados)")
except Exception as e:
    print("h5p.css:", e)
try:
    fonts_css = fetch(f"{SA}/styles/h5p-fonts.css").decode("utf-8")
    bloques = re.findall(r"@font-face\s*\{[^}]*\}", fonts_css, re.S)
    # conservar solo las fuentes del nucleo y del tema (iconos usados por Accordion)
    nucleo = [b for b in bloques if "h5p-core" in b or "h5p-theme" in b]
    kept = "\n".join(nucleo) if nucleo else ""
    with open(os.path.join(H5P_DIR, "styles", "h5p-fonts.css"), "w", encoding="utf-8") as f:
        f.write(kept)
    print("standalone: styles/h5p-fonts.css (solo h5p-core + h5p-theme,", len(nucleo), "bloques)")
except Exception as e:
    print("h5p-fonts.css:", e)
for fn in ["fonts/h5p-core-30.woff2", "fonts/h5p-theme.woff2", "images/throbber.gif", "images/h5p.svg"]:
    try:
        fetch(f"{SA}/{fn}", os.path.join(H5P_DIR, fn))
        print("standalone:", fn)
    except Exception as e:
        print("standalone:", fn, "->", e)
print("LISTO")
