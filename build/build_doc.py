# -*- coding: utf-8 -*-
"""Genera contenido-h5p-resumen.md a partir de assets/catalogo.js."""
import json, io, sys, os

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "contenido-h5p-resumen.md")

src = open(os.path.join(ROOT, "assets", "catalogo.js"), encoding="utf-8").read()
i = src.index("const META = {"); j = src.index("};", i) + 1
meta = json.loads(src[i + len("const META = "):j])
k = src.index("const CATALOGO = ["); end = src.rindex("];") + 1
catalogo = json.loads(src[k + len("const CATALOGO = "):end])

tot_f = sum(len(c["familias"]) for c in catalogo)
tot_c = sum(len(f["componentes"]) for c in catalogo for f in c["familias"])

L = []
A = L.append
A("# Catálogo completo — Common Criteria Parte 2 · Requisitos Funcionales de Seguridad")
A("")
A("> **Fuente:** " + meta["fuente"] + "  ")
A("> **Nota:** " + meta["notaFuente"] + "")
A("")
A("**Totales del catálogo:** %d clases · %d familias · %d componentes." % (len(catalogo), tot_f, tot_c))
A("")
A("**Jerarquía oficial:** " + meta["jerarquia"] + "")
A("")
A("**Siglas:** " + " · ".join("**%s** = %s" % (l["sigla"], l["texto"]) for l in meta["leyenda"]) + "")
A("")
A("## Guía para volcar este contenido en H5P")
A("")
A("1. **Herramienta recomendada: *Interactive Book*** — cada *Clase* es un capítulo de la pestaña 'Chapters'; el encabezado de la clase va en la página de portada del capítulo.")
A("2. **Alternativa: *Accordion*** — cada *Clase* es un panel (title = código + nombre); el contenido del panel lleva la definición de la clase y, por cada *Familia*, un subtítulo con su lista de componentes.")
A("3. Dentro de cada familia, los componentes se listan como viñetas con su **código jerárquico** (p. ej., `FDP_ACC.1`), nombre y descripción breve.")
A("4. Las insignias indican: **Nueva en CC:2022** (familia/componente añadido respecto a CC v3.1), **Restaurada en CC:2022** (regresó al catálogo activo) y **Desusado** (componente obsoleto mantenido por compatibilidad).")
A("")
A("---")
A("")
for n, c in enumerate(catalogo, 1):
    nf = len(c["familias"])
    nc = sum(len(f["componentes"]) for f in c["familias"])
    A("## %d. %s — %s (*%s*) · §%d" % (n, c["codigo"], c["nombre"], c["nombreEn"], c["seccion"]))
    A("")
    A("**Definición de la clase:** %s" % c["definicion"])
    A("")
    A("*Contiene %d familias y %d componentes.*" % (nf, nc))
    A("")
    for f in c["familias"]:
        etiqueta = " **[%s]**" % f["etiqueta"] if f["etiqueta"] else ""
        A("### %s — %s (*%s*)%s" % (f["codigo"], f["nombre"], f["nombreEn"], etiqueta))
        A("")
        A("*%s*" % f["resumen"])
        A("")
        for comp in f["componentes"]:
            desu = " ⚠️ **[Desusado]**" if comp["desc"].startswith("⚠") else ""
            A("- **%s · %s**%s — %s" % (comp["id"], comp["nombre"], desu, comp["desc"]))
        A("")
A("---")
A("")
A("## Tabla resumen del catálogo")
A("")
A("| # | Código | Clase | Familias | Componentes | Sección CC:2022 |")
A("|---|--------|-------|----------|-------------|-----------------|")
for n, c in enumerate(catalogo, 1):
    nc = sum(len(f["componentes"]) for f in c["familias"])
    A("| %d | %s | %s | %d | %d | §%d |" % (n, c["codigo"], c["nombre"], len(c["familias"]), nc, c["seccion"]))
A("| **Σ** | — | **Total** | **%d** | **%d** | — |" % (tot_f, tot_c))
A("")

with open(OUT, "w", encoding="utf-8") as f:
    f.write("\n".join(L))
print("Generado:", OUT)
print("Lineas:", len(L))
