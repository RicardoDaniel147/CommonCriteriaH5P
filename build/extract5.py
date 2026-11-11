# -*- coding: utf-8 -*-
"""Parser v5: jerarquia completa Clase->Familia->Componente del CC:2022 Parte 2 R1 (ToC + cuerpo)."""
import fitz, re, os, json

PDF = r"C:\Users\Ricardo\Downloads\CC2022PART2R1 (3).pdf"
OUT = os.path.dirname(os.path.abspath(__file__))
CLS_CAP = r"(FAU|FCO|FCS|FDP|FIA|FMT|FPR|FPT|FRU|FTA|FTP)"
CLS_NOCAP = r"(?:FAU|FCO|FCS|FDP|FIA|FMT|FPR|FPT|FRU|FTA|FTP)"
CODE_NOCAP = CLS_NOCAP + r"_[A-Z]{3}"
DOTS = r"\.{4,}"

doc = fitz.open(PDF)
raw_pages = [p.get_text("text") for p in doc]

def normalize(t):
    lines = t.split("\n")
    res, pending = [], None
    for l in lines:
        s = l.strip()
        if re.fullmatch(r"\d+(?:\.\d+)*", s):
            pending = s
            continue
        res.append((pending + " " + s).strip() if pending else s)
        pending = None
    if pending:
        res.append(pending)
    return "\n".join(res)

pages = [normalize(p) for p in raw_pages]

# ---------- ToC ----------
toc_pages = [i for i, t in enumerate(raw_pages) if t.strip().startswith("Contents")]
print("TOC pages:", [p + 1 for p in toc_pages])

re_class = re.compile(rf"^(\d+) Class {CLS_CAP}: (.+?)\s*{DOTS}\s*(\d+)?\s*$")
re_fam   = re.compile(rf"^(\d+\.\d+) (.+?) \({CODE_NOCAP}\)\s*{DOTS}\s*(\d+)?\s*$")
re_comp  = re.compile(rf"^(\d+\.\d+\.\d+) ({CODE_NOCAP}\.\d+) (.+?)\s*{DOTS}\s*(\d+)?\s*$")

classes, families, components = [], [], []
for p in toc_pages:
    for l in pages[p].split("\n"):
        s = re.sub(r"\s+", " ", l.strip())
        if len(s) <= 12 or not re.search(DOTS, s):
            continue
        m = re_comp.match(s)
        if m:
            components.append({"num": m.group(1), "code": m.group(2), "name": m.group(3).strip()})
            continue
        m = re_fam.match(s)
        if m:
            fam_code = re.search(rf"\({CODE_NOCAP}\)", s).group(0)[1:-1]
            families.append({"num": m.group(1), "name": m.group(2).strip(), "code": fam_code})
            continue
        m = re_class.match(s)
        if m:
            classes.append({"num": m.group(1), "code": m.group(2), "name": m.group(3).strip()})

# dedup (mantener primera aparicion)
def dedup(lst, key):
    seen, out = set(), []
    for it in lst:
        k = it[key]
        if k not in seen:
            seen.add(k)
            out.append(it)
    return out

classes = dedup(classes, "code")
families = dedup(families, "code")
components = dedup(components, "code")

print("CLASSES:", len(classes))
for c in classes: print("   ", c["num"], c["code"], "-", c["name"])
print("FAMILIES:", len(families))
for f in families: print("   ", f["num"], f["code"], "-", f["name"])
print("COMPONENTS:", len(components))
for c in components: print("   ", c["num"], c["code"], "-", c["name"])

# ---------- Cuerpo ----------
body_start = max(toc_pages) + 1
body_flat = re.sub(r"\s+", " ", " ".join(pages[body_start:]))

class_desc = {}
for c in classes:
    m = re.search(rf" {c['num']} Class {c['code']}: ", body_flat)
    if m:
        class_desc[c["code"]] = body_flat[m.end():m.end() + 1400]

fam_beh = {}
for f in families:
    m = re.search(rf" {re.escape(f['num'])} {re.escape(f['name'])} \({f['code']}\) ", body_flat)
    if m:
        fam_beh[f["code"]] = body_flat[m.end():m.end() + 1100]

body_names = {}
for c in components:
    parent = c["num"].rsplit(".", 1)[0]
    nxt = int(c["num"].rsplit(".", 1)[1]) + 1
    pat = rf" {re.escape(c['num'])} {re.escape(c['code'])} (.+?)(?= {parent}\.{nxt} | [A-Z]{{3}} Class | Figure \d+ | Table \d+ | Annex |$)"
    m = re.search(pat, body_flat)
    if m:
        body_names[c["code"]] = m.group(1).strip().rstrip(" .,;:")

with open(os.path.join(OUT, "toc_structure.json"), "w", encoding="utf-8") as f:
    json.dump({"classes": classes, "families": families, "components": components,
               "class_desc": class_desc, "fam_beh": fam_beh, "body_names": body_names},
              f, indent=1, ensure_ascii=False)
print("SAVED toc_structure.json")

print("\n--- NAME CHECKS (ToC vs cuerpo) ---")
for c in components:
    bn = body_names.get(c["code"])
    if bn and bn.lower() != c["name"].lower():
        print(f"  {c['code']}: ToC='{c['name']}' | Body='{bn}'")
