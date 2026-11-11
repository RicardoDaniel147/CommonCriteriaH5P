/* =====================================================================
   Lógica del catálogo interactivo — Common Criteria Parte 2 (CC:2022)
   Datos: assets/catalogo.js  ·  Estilo: H5P Interactive Book
   ===================================================================== */
(function () {
  "use strict";

  var HUES = { FAU: 206, FCO: 272, FCS: 172, FDP: 12, FIA: 246, FMT: 324, FPR: 296, FPT: 100, FRU: 44, FTA: 128, FTP: 214 };
  var TOTAL = CATALOGO.length + 1; // portada + 11 clases

  var paginas = document.getElementById("paginas");
  var indiceNav = document.getElementById("indiceNav");
  var progresoRelleno = document.getElementById("progresoRelleno");
  var progresoTexto = document.getElementById("progresoTexto");
  var btnPrev = document.getElementById("btnPrev");
  var btnNext = document.getElementById("btnNext");
  var btnIndice = document.getElementById("btnIndice");
  var buscador = document.getElementById("buscador");
  var resultados = document.getElementById("resultados");

  var actual = 0;
  var visitadas = cargarEstado();

  /* ---------- utilidades ---------- */
  function esc(t) {
    return String(t).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function estadoGuardar() {
    try { localStorage.setItem("cc2_visitadas", JSON.stringify(Array.from(visitadas))); } catch (e) { /* sin almacenamiento */ }
  }
  function cargarEstado() {
    try {
      var v = JSON.parse(localStorage.getItem("cc2_visitadas") || "[]");
      return new Set(Array.isArray(v) ? v : []);
    } catch (e) { return new Set(); }
  }

  /* ---------- construcción de páginas ---------- */
  function contarClase(clase) {
    var comps = 0;
    clase.familias.forEach(function (f) { comps += f.componentes.length; });
    return { familias: clase.familias.length, comps: comps };
  }

  function htmlPortada() {
    var totalF = 0, totalC = 0;
    CATALOGO.forEach(function (c) { var n = contarClase(c); totalF += n.familias; totalC += n.comps; });
    var chips = "<div class='chips'>" +
      "<span class='chip'><b>" + CATALOGO.length + "</b> clases</span>" +
      "<span class='chip'><b>" + totalF + "</b> familias</span>" +
      "<span class='chip'><b>" + totalC + "</b> componentes</span>" +
      "<span class='chip'>" + esc(META.version) + "</span></div>";

    var leyenda = META.leyenda.map(function (l) {
      return "<span class='leyenda-item'><b>" + esc(l.sigla) + "</b> " + esc(l.texto) + "</span>";
    }).join("");

    var jer = "<div class='jerarquia-flujo'>" +
      "<span class='jer-nodo'>CLASE<small>código de 3 letras · p. ej. FDP</small></span><span class='jer-flecha'>➜</span>" +
      "<span class='jer-nodo'>FAMILIA<small>clase + sufijo de 3 letras · p. ej. FDP_ACC</small></span><span class='jer-flecha'>➜</span>" +
      "<span class='jer-nodo'>COMPONENTE<small>requisito evaluable · p. ej. FDP_ACC.1</small></span></div>";

    return "<section class='pagina activa portada' id='pag-0' data-n='0'>" +
      "<div class='portada-logo'>CC</div>" +
      "<h1>" + esc(META.titulo) + "</h1>" +
      "<p class='portada-sub'>Catálogo completo de <strong>requisitos funcionales de seguridad (SFR)</strong> organizado según la jerarquía oficial del estándar: <strong>Clase → Familia → Componente</strong>. Explora el índice, usa el buscador o navega con los botones <em>Anterior/Siguiente</em>.</p>" +
      chips +
      "<div class='tarjeta-jerarquia'><h3>Cómo leer el catálogo</h3>" + jer +
      "<p>" + esc(META.jerarquia.split("El catálogo se organiza en 3 niveles: ")[1]) + "</p>" +
      "<div class='leyenda'>" + leyenda + "</div></div>" +
      "<div class='portada-cta'><button class='boton-principal' id='btnComenzar'>Comenzar el catálogo ➜</button></div>" +
      "<p class='portada-fuente'>Fuente: " + esc(META.fuente) + ". " + esc(META.notaFuente) + "</p>" +
      "</section>";
  }

  function htmlClase(clase, i) {
    var n = i + 1;
    var hue = HUES[clase.codigo] || 210;
    var counts = contarClase(clase);
    var familiasHtml = clase.familias.map(function (f) {
      var badge = f.etiqueta ? "<span class='insignia " + (f.etiqueta.indexOf("Restaurada") === 0 ? "restaurada" : "nueva") + "'>" + esc(f.etiqueta) + "</span>" : "";
      var comps = f.componentes.map(function (c) {
        var desu = c.desc.indexOf("Desusado") !== -1 ? "<span class='insignia desusado'>Desusado</span>" : "";
        var descTxt = c.desc.replace(/^⚠\s*/, "");
        return "<li class='componente' id='comp-" + esc(c.id) + "'>" +
          "<span class='componente-id'>" + esc(c.id) + "</span>" +
          "<span class='componente-nombre'>" + esc(c.nombre) + "</span>" + desu +
          "<p class='componente-desc'>" + esc(descTxt) + "</p></li>";
      }).join("");
      return "<details class='familia' id='fam-" + esc(f.codigo) + "' data-clase='" + esc(clase.codigo) + "'>" +
        "<summary>" +
        "<span class='flecha'>▶</span>" +
        "<span class='familia-cod'>" + esc(f.codigo) + "</span>" +
        "<span class='familia-titulos'><span class='familia-nombre'>" + esc(f.nombre) + "</span><br><span class='familia-en'>" + esc(f.nombreEn) + "</span></span>" +
        "<span class='familia-meta'>" + badge + "<span class='contador-comps'>" + f.componentes.length + " comp.</span></span>" +
        "</summary>" +
        "<div class='familia-cuerpo'>" +
        "<p class='familia-resumen'>" + esc(f.resumen) + "</p>" +
        "<ul class='lista-componentes'>" + comps + "</ul>" +
        "</div></details>";
    }).join("");

    return "<section class='pagina' id='pag-" + n + "' data-n='" + n + "' style='--hue:" + hue + "'>" +
      "<div class='cabecera-clase'>" +
      "<div class='migaja'>Clase " + n + " de " + CATALOGO.length + " · Documento oficial, sección " + clase.seccion + "</div>" +
      "<h2><span class='codigo-clase'>" + esc(clase.codigo) + "</span> " + esc(clase.nombre) + "</h2>" +
      "<div class='nombre-en'>" + esc(clase.nombreEn) + "</div>" +
      "<p class='definicion-clase'>" + esc(clase.definicion) + "</p>" +
      "<div class='estadisticas-clase'>" +
      "<span class='pastilla'>" + counts.familias + " familias</span>" +
      "<span class='pastilla'>" + counts.comps + " componentes</span>" +
      "<span class='pastilla seccion'>§ " + clase.seccion + " en CC:2022 Parte 2</span>" +
      "</div></div>" +
      familiasHtml +
      "</section>";
  }

  function render() {
    var html = htmlPortada();
    CATALOGO.forEach(function (clase, i) { html += htmlClase(clase, i); });
    paginas.innerHTML = html;

    var items = "<button class='indice-item activo' data-n='0' style='--hue:210'>" +
      "<span class='indice-num'>✦</span>" +
      "<span class='indice-etiquetas'><span class='indice-linea1'>Portada</span>" +
      "<span class='indice-linea2'>Catálogo CC Parte 2 · CC:2022</span></span>" +
      "<span class='indice-check'>✔</span></button>";
    CATALOGO.forEach(function (clase, i) {
      var n = i + 1, hue = HUES[clase.codigo] || 210, c = contarClase(clase);
      items += "<button class='indice-item' data-n='" + n + "' style='--hue:" + hue + "'>" +
        "<span class='indice-num'>" + n + "</span>" +
        "<span class='indice-etiquetas'><span class='indice-linea1'><span class='cod'>" + esc(clase.codigo) + "</span> " + esc(clase.nombre) + "</span>" +
        "<span class='indice-linea2'>" + esc(clase.nombreEn) + " · " + c.familias + " familias · " + c.comps + " comp.</span></span>" +
        "<span class='indice-check'>✔</span></button>";
    });
    indiceNav.innerHTML = items;

    indiceNav.querySelectorAll(".indice-item").forEach(function (b) {
      b.addEventListener("click", function () { irA(parseInt(b.dataset.n, 10)); cerrarIndice(); });
    });
    var bc = document.getElementById("btnComenzar");
    if (bc) bc.addEventListener("click", function () { irA(1); });
  }

  /* ---------- navegación ---------- */
  // Resuelve un hash (#FDP, #FDP_ACC, #FDP_ACC.1) a la página y objetivo correspondiente
  function destinoDeHash(h) {
    if (!h) return null;
    var idx = CATALOGO.findIndex(function (c) { return c.codigo === h; });
    if (idx >= 0) return { n: idx + 1, objetivo: null };
    var clase = CATALOGO.find(function (c) { return h.indexOf(c.codigo) === 0; });
    if (clase) {
      var esFam = clase.familias.some(function (f) { return f.codigo === h; });
      var esComp = clase.familias.some(function (f) {
        return f.componentes.some(function (c2) { return c2.id === h; });
      });
      if (esFam || esComp) return { n: CATALOGO.indexOf(clase) + 1, objetivo: h };
    }
    return null;
  }

  window.addEventListener("hashchange", function () {
    var d = destinoDeHash(location.hash.replace("#", ""));
    if (d && (d.n !== actual || d.objetivo)) irA(d.n, d.objetivo);
  });

  function irA(n, objetivo) {
    if (n < 0 || n >= TOTAL) return;
    var paginasEl = paginas.querySelectorAll(".pagina");
    paginasEl.forEach(function (p) { p.classList.remove("activa"); });
    var destino = paginas.querySelector("#pag-" + n);
    if (!destino) return;
    destino.classList.add("activa");
    actual = n;
    visitadas.add(n);
    estadoGuardar();
    actualizarUI();
    window.scrollTo({ top: 0, behavior: "auto" });
    var hashVal = objetivo || (n === 0 ? "" : CATALOGO[n - 1].codigo);
    history.replaceState(null, "", "#" + hashVal);
    resaltarNueva();
  }

  function actualizarUI() {
    indiceNav.querySelectorAll(".indice-item").forEach(function (b) {
      var n = parseInt(b.dataset.n, 10);
      b.classList.toggle("activo", n === actual);
      b.classList.toggle("visitada", visitadas.has(n) && n !== actual);
    });
    var pct = Math.round(((visitadas.size) / TOTAL) * 100);
    progresoRelleno.style.width = pct + "%";
    progresoTexto.textContent = "Página " + (actual + 1) + " de " + TOTAL + " · " + pct + "% explorado";
    btnPrev.disabled = actual === 0;
    btnNext.disabled = actual === TOTAL - 1;
  }

  function resaltarNueva() {
    if (location.hash && location.hash.length > 1) {
      var id = decodeURIComponent(location.hash.slice(1));
      var fam = document.getElementById("fam-" + id);
      if (fam) {
        fam.open = true;
        setTimeout(function () { fam.scrollIntoView({ behavior: "smooth", block: "start" }); }, 60);
      }
      var comp = document.getElementById("comp-" + id);
      if (comp) {
        var f = comp.closest("details");
        if (f) f.open = true;
        comp.classList.add("resaltado");
        setTimeout(function () { comp.scrollIntoView({ behavior: "smooth", block: "center" }); }, 60);
        setTimeout(function () { comp.classList.remove("resaltado"); }, 2600);
      }
    }
  }

  btnPrev.addEventListener("click", function () { irA(actual - 1); });
  btnNext.addEventListener("click", function () { irA(actual + 1); });
  btnIndice.addEventListener("click", function () { irA(0); });
  document.addEventListener("keydown", function (e) {
    if (e.target === buscador || e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
    if (e.key === "ArrowLeft") irA(actual - 1);
    if (e.key === "ArrowRight") irA(actual + 1);
  });

  /* ---------- índice móvil ---------- */
  var btnMenu = document.getElementById("btnMenu");
  var btnMenuAbierto = document.getElementById("btnMenuAbierto");
  var capaMovil = document.getElementById("capaMovil");
  function abrirIndice() { document.getElementById("indice").classList.add("abierto"); capaMovil.classList.add("mostrada"); }
  function cerrarIndice() { document.getElementById("indice").classList.remove("abierto"); capaMovil.classList.remove("mostrada"); }
  btnMenu.addEventListener("click", cerrarIndice);
  btnMenuAbierto.addEventListener("click", abrirIndice);
  capaMovil.addEventListener("click", cerrarIndice);

  /* ---------- buscador ---------- */
  var INDICE_BUSQUEDA = [];
  (function construir() {
    INDICE_BUSQUEDA.push({ tipo: "CLASE", cod: "", nombre: "Portada", destino: 0, texto: "portada índice inicio" });
    CATALOGO.forEach(function (clase, i) {
      var hueless = [clase.codigo, clase.nombre, clase.nombreEn].join(" ").toLowerCase();
      INDICE_BUSQUEDA.push({ tipo: "CLASE", cod: clase.codigo, nombre: clase.nombre, destino: i + 1, texto: hueless });
      clase.familias.forEach(function (f) {
        INDICE_BUSQUEDA.push({ tipo: "FAMILIA", cod: f.codigo, nombre: f.nombre, destino: i + 1, texto: [f.codigo, f.nombre, f.nombreEn, f.resumen, clase.nombre].join(" ").toLowerCase() });
        f.componentes.forEach(function (c) {
          INDICE_BUSQUEDA.push({ tipo: "COMPONENTE", cod: c.id, nombre: c.nombre, destino: i + 1, texto: [c.id, c.nombre, c.desc, f.codigo, f.nombre].join(" ").toLowerCase() });
        });
      });
    });
  })();

  var selIdx = -1;
  function buscar(q) {
    q = q.trim().toLowerCase();
    if (q.length < 2) { resultados.hidden = true; return; }
    var hits = INDICE_BUSQUEDA.filter(function (r) {
      return r.texto.indexOf(q) !== -1 || (r.cod && r.cod.toLowerCase().indexOf(q) !== -1);
    }).slice(0, 14);
    selIdx = -1;
    if (!hits.length) {
      resultados.innerHTML = "<li class='buscador-vacio'>Sin coincidencias para “" + esc(q) + "”</li>";
      resultados.hidden = false;
      return;
    }
    resultados.innerHTML = hits.map(function (r, k) {
      return "<li data-i='" + k + "'><span class='buscador-cod'>" + esc(r.cod || "—") + "</span>" +
        "<span>" + esc(r.nombre) + "</span>" +
        "<span class='buscador-tipo'>" + r.tipo + "</span></li>";
    }).join("");
    resultados._hits = hits;
    resultados.hidden = false;
    resultados.querySelectorAll("li[data-i]").forEach(function (li) {
      li.addEventListener("mousedown", function (e) {
        e.preventDefault();
        var r = resultados._hits[parseInt(li.dataset.i, 10)];
        var destinoId = (r.tipo === "FAMILIA" || r.tipo === "COMPONENTE") ? r.cod : null;
        irA(r.destino, destinoId);
        resultados.hidden = true;
        buscador.value = "";
      });
    });
  }

  buscador.addEventListener("input", function () { buscar(buscador.value); });
  buscador.addEventListener("focus", function () { if (buscador.value.trim().length >= 2) buscar(buscador.value); });
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".buscador")) resultados.hidden = true;
  });
  buscador.addEventListener("keydown", function (e) {
    var lis = resultados.querySelectorAll("li[data-i]");
    if (!lis.length) return;
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      selIdx = e.key === "ArrowDown" ? (selIdx + 1) % lis.length : (selIdx - 1 + lis.length) % lis.length;
      lis.forEach(function (li, k) { li.classList.toggle("sel", k === selIdx); });
    } else if (e.key === "Enter" && selIdx >= 0) {
      lis[selIdx].dispatchEvent(new MouseEvent("mousedown"));
    } else if (e.key === "Escape") {
      resultados.hidden = true;
    }
  });

  /* ---------- arranque ---------- */
  render();
  var h = location.hash.replace("#", "");
  var d0 = destinoDeHash(h);
  if (d0) {
    irA(d0.n, d0.objetivo);
  } else {
    if (!visitadas.has(0) && visitadas.size) {
      var arr = Array.from(visitadas).sort(function (a, b) { return a - b; });
      irA(arr[arr.length - 1]);
    } else {
      irA(0);
    }
  }
})();
