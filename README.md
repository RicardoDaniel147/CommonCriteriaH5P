# Common Criteria · Parte 2 (ISO/IEC 15408-2:2022) — Catálogo interactivo

Recurso educativo en **español** que presenta el catálogo completo de los requisitos
funcionales de seguridad (SFR) de la **Parte 2 de Common Criteria** (CC:2022 Rev. 1,
documento **CCMB-2022-11-002**), siguiendo la jerarquía oficial
**Clase → Familia → Componente**.

Incluye **tres formas de consumir el mismo contenido**:

| Recurso | Qué es | Dónde |
|---|---|---|
| **Libro interactivo** | Sitio propio estilo "Interactive Book" (índice lateral, buscador, progreso, impresión) | `index.html` + `assets/` |
| **Contenido H5P (Accordion)** | Acordeón construido con la biblioteca oficial **H5P.Accordion 1.0** + **H5P.AdvancedText 1.1** | `h5p/index.html` (reproductor) y `h5p/common-criteria-parte2.h5p` (paquete importable) |
| **Resumen markdown** | Documento de apoyo para autoría H5P o estudio | `contenido-h5p-resumen.md` |

## Estadísticas del catálogo

- **11 clases** (secciones 8–18 del documento oficial): FAU, FCO, FCS, FDP, FIA, FMT, FPR, FPT, FRU, FTA, FTP
- **74 familias**
- **156 componentes** — FAU 16 · FCO 4 · FCS 14 · FDP 34 · FIA 15 · FMT 16 · FPR 10 · FPT 26 · FRU 6 · FTA 10 · FTP 5
- Insignias por familia: **«Nueva en CC:2022»** (p. ej. FCS_RBG, FDP_IRC, FDP_SDC, FMT_LIM, FPT_EMS, FPT_INI, FPT_SSP, FPT_TEE, FPT_TRC, FTP_PRO), **«Restaurada en CC:2022»** (FIA_API) y **«En desuso»** para el componente FCS_CKM.4 (obsoleto según el propio documento).

> **Nota sobre nombres de clases** (corrección frecuente): **FPT** es *Protección de las
> funciones de seguridad del TOE (TSF)* — **no** «de los índices» — y **FTA** es *Acceso al TOE*.

## Estructura del proyecto

```
├── index.html                    # Libro interactivo (página principal)
├── assets/
│   ├── catalogo.js               # DATO MAESTRO: META + CATALOGO (clases/familias/componentes)
│   ├── app.js                    # Lógica de la interfaz (render, búsqueda, navegación, progreso)
│   └── estilos.css               # Estilos del libro
├── h5p/
│   ├── index.html                # Reproductor H5P (h5p-standalone, sin servidor)
│   ├── common-criteria-parte2.h5p# Paquete .h5p para importar en Lumi/Moodle/H5P.com
│   ├── paquete-accordion/        # Contenido del paquete (h5p.json, content/, libraries/)
│   ├── main.bundle.js            # h5p-standalone@3.8.2 (reproductor)
│   ├── frame.bundle.js           # h5p-standalone@3.8.2 (iframe)
│   ├── styles/                   # h5p.css + h5p-fonts.css (recortado a fuentes h5p-core/h5p-theme)
│   ├── fonts/                    # h5p-core-30.woff2, h5p-theme.woff2
│   └── images/                   # throbber.gif, h5p.svg
├── contenido-h5p-resumen.md      # Resumen completo en Markdown
└── build/                        # Scripts de construcción (no se necesitan para publicar)
    ├── extract5.py               # Extracción de la jerarquía desde el PDF oficial
    ├── validate.py               # Validación de catalogo.js (11 clases/74 familias/156 componentes)
    ├── build_doc.py              # Genera contenido-h5p-resumen.md
    ├── build_h5p.py              # Genera el paquete .h5p y descarga el reproductor
    └── toc_structure.json        # Jerarquía extraída del PDF
```

El dato maestro es `assets/catalogo.js`: el libro, el paquete H5P y el resumen se generan
desde él, por lo que cualquier corrección se hace en un único lugar.
