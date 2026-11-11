# -*- coding: utf-8 -*-
"""Valida assets/catalogo.js (JSON embebido) y muestra estadisticas."""
import json, io, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

src = open(r"assets\catalogo.js", encoding="utf-8").read()
i = src.index("const META = {")
j = src.index("};", i) + 1
meta = json.loads(src[i + len("const META = "):j])
k = src.index("const CATALOGO = [")
end = src.rindex("];") + 1
catalogo = json.loads(src[k + len("const CATALOGO = "):end])

tot_f = sum(len(c["familias"]) for c in catalogo)
tot_c = sum(len(f["componentes"]) for c in catalogo for f in c["familias"])
print("META ok:", meta["version"])
print("Clases:", len(catalogo), "| Familias:", tot_f, "| Componentes:", tot_c)
for c in catalogo:
    nf = len(c["familias"])
    nc = sum(len(f["componentes"]) for f in c["familias"])
    print(f"  {c['codigo']} (seccion {c['seccion']}): {nf} familias, {nc} componentes")
# chequeo de consistencia de codigos
for c in catalogo:
    for f in c["familias"]:
        assert f["codigo"].startswith(c["codigo"] + "_"), f
        for comp in f["componentes"]:
            assert comp["id"].startswith(f["codigo"] + "."), comp
print("CONSISTENCIA DE CODIGOS: OK")
