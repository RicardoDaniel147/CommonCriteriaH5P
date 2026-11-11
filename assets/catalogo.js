/* =====================================================================
   CATÁLOGO COMPLETO — Common Criteria (CC:2022) Parte 2
   "Security functional components" — CCMB-2022-11-002, Rev. 1, nov. 2022
   (base de ISO/IEC 15408-2:2022 — Requisitos funcionales de seguridad)
   Estructura oficial: Clase -> Familia -> Componente
   Fuente única de datos para index.html y el paquete H5P.
   ===================================================================== */
const META = {
  "titulo": "Common Criteria — ISO/IEC 15408-2:2022 · Catálogo de Requisitos Funcionales de Seguridad",
  "fuente": "Common Criteria for Information Technology Security Evaluation, Part 2: Security functional components — CC:2022 Revision 1 (CCMB-2022-11-002), noviembre de 2022",
  "version": "CC:2022 Parte 2 · Rev. 1",
  "notaFuente": "Resumen divulgativo en español del documento oficial CCMB-2022-11-002. No sustituye al texto normativo; para evaluaciones, consulte siempre el documento original (commoncriteriaportal.org).",
  "leyenda": [
    {"sigla": "SFR", "texto": "Security Functional Requirement — requisito funcional de seguridad"},
    {"sigla": "TSF", "texto": "TOE Security Functionality — función(es) de seguridad del TOE"},
    {"sigla": "TOE", "texto": "Target of Evaluation — producto/sistema en evaluación"},
    {"sigla": "SFP", "texto": "Security Functionality Policy — política de seguridad impuesta por la TSF"}
  ],
  "jerarquia": "El catálogo se organiza en 3 niveles: CLASE (agrupación temática, código de 3 letras) → FAMILIA (tema dentro de la clase, código de 7 caracteres: clase + sufijo de 3 letras) → COMPONENTE (requisito evaluable, se numera CODE.1, CODE.2…; los componentes pueden ser jerárquicos: uno superior satisface lo exigido por otro inferior)."
};

const CATALOGO = [
{
  "codigo": "FAU", "seccion": 8,
  "nombre": "Auditoría de seguridad", "nombreEn": "Security audit",
  "definicion": "Exige reconocer, registrar, almacenar y analizar la información relativa a actividades relevantes para la seguridad bajo control de la TSF, de modo que los registros de auditoría permitan determinar qué actividades ocurrieron y qué usuario es responsable de ellas.",
  "familias": [
    {"codigo": "FAU_ARP", "nombre": "Respuesta automática de auditoría de seguridad", "nombreEn": "Security audit automatic response", "etiqueta": "",
     "resumen": "Define la respuesta a tomar cuando se detectan eventos indicativos de una posible violación de seguridad.",
     "componentes": [
       {"id": "FAU_ARP.1", "nombre": "Alarmas de seguridad", "desc": "La TSF debe ejecutar las acciones definidas [asignación: lista de acciones] al detectar una posible violación de seguridad (p. ej., bloquear cuenta, notificar a un administrador)."}
     ]},
    {"codigo": "FAU_GEN", "nombre": "Generación de datos de auditoría", "nombreEn": "Security audit data generation", "etiqueta": "",
     "resumen": "Registra la ocurrencia de eventos de seguridad bajo control de la TSF: define niveles de auditoría, tipos de eventos auditables y el contenido mínimo de cada registro.",
     "componentes": [
       {"id": "FAU_GEN.1", "nombre": "Generación de datos de auditoría", "desc": "Genera registros de los eventos auditables (arranque/parada de las funciones de auditoría, eventos según el nivel mínimo/básico/detallado, otros definidos) con fecha, hora, tipo de evento, identidad del sujeto y resultado (éxito/fallo)."},
       {"id": "FAU_GEN.2", "nombre": "Asociación con la identidad del usuario", "desc": "Para eventos generados por usuarios identificados, asocia cada evento auditable con la identidad del usuario que lo causó."}
     ]},
    {"codigo": "FAU_SAA", "nombre": "Análisis de auditoría de seguridad", "nombreEn": "Security audit analysis", "etiqueta": "",
     "resumen": "Análisis automático de la actividad del sistema y de los datos de auditoría para detectar posibles o reales violaciones de seguridad (soporta capacidades de detección de intrusiones).",
     "componentes": [
       {"id": "FAU_SAA.1", "nombre": "Análisis de posibles violaciones", "desc": "Aplica un conjunto de reglas al monitorear los eventos auditados e indica la existencia de una posible violación de los SFR."},
       {"id": "FAU_SAA.2", "nombre": "Detección de anomalías basada en perfiles", "desc": "Mantiene perfiles del uso histórico del sistema y una 'puntuación de sospecha' por usuario; alerta cuando la actividad se desvía de los patrones establecidos."},
       {"id": "FAU_SAA.3", "nombre": "Heurística de ataques simples", "desc": "Mantiene una representación interna de eventos-firma (subconjunto de eventos del sistema) que indican violaciones y los compara con la actividad del sistema."},
       {"id": "FAU_SAA.4", "nombre": "Heurística de ataques complejos", "desc": "Además de eventos-firma, mantiene secuencias de eventos representativas de escenarios de intrusión conocidos y detecta su ocurrencia."}
     ]},
    {"codigo": "FAU_SAR", "nombre": "Revisión de auditoría de seguridad", "nombreEn": "Security audit review", "etiqueta": "",
     "resumen": "Pone a disposición de usuarios autorizados herramientas para examinar la información de auditoría de forma comprensible.",
     "componentes": [
       {"id": "FAU_SAR.1", "nombre": "Revisión de auditoría", "desc": "Permite a los usuarios autorizados leer la información de auditoría y la presenta en un formato interpretable."},
       {"id": "FAU_SAR.2", "nombre": "Revisión restringida", "desc": "Prohíbe el acceso de lectura a la auditoría a todo usuario salvo a los que recibieron autorización explícita."},
       {"id": "FAU_SAR.3", "nombre": "Revisión seleccionable", "desc": "Permite filtrar y/u ordenar los datos de auditoría según criterios con relaciones lógicas."}
     ]},
    {"codigo": "FAU_SEL", "nombre": "Selección de eventos de auditoría", "nombreEn": "Security audit event selection", "etiqueta": "",
     "resumen": "Permite decidir, durante la operación del TOE, qué eventos se auditan del conjunto de todos los eventos auditables.",
     "componentes": [
       {"id": "FAU_SEL.1", "nombre": "Auditoría selectiva", "desc": "Selecciona los eventos a auditar según identidad de objeto, usuario, sujeto o host, tipo de evento u otros atributos definidos."}
     ]},
    {"codigo": "FAU_STG", "nombre": "Almacenamiento de datos de auditoría", "nombreEn": "Security audit data storage", "etiqueta": "",
     "resumen": "Crea y mantiene un rastro de auditoría seguro (ubicación, protección, disponibilidad y actuación ante pérdida de datos).",
     "componentes": [
       {"id": "FAU_STG.1", "nombre": "Ubicación del almacenamiento de datos de auditoría", "desc": "Almacena los datos de auditoría generados en el propio TOE o los transmite a una entidad TI externa mediante un canal de confianza (según FTP_ITC)."},
       {"id": "FAU_STG.2", "nombre": "Almacenamiento protegido de datos de auditoría", "desc": "Protege el rastro de auditoría contra el borrado no autorizado y previene o detecta modificaciones no autorizadas."},
       {"id": "FAU_STG.3", "nombre": "Garantía de disponibilidad de los datos de auditoría", "desc": "Además de proteger el rastro, garantiza conservar cierta cantidad de datos ante agotamiento del almacenamiento, fallo o ataque."},
       {"id": "FAU_STG.4", "nombre": "Acción ante posible pérdida de datos de auditoría", "desc": "Ejecuta acciones definidas cuando el almacenamiento de auditoría alcanza un límite predefinido (p. ej., avisar al administrador)."},
       {"id": "FAU_STG.5", "nombre": "Prevención de la pérdida de datos de auditoría", "desc": "Define el comportamiento si el almacenamiento se llena: ignorar eventos, impedirlos (salvo los del usuario con derechos especiales) o sobrescribir los registros más antiguos."}
     ]}
  ]
},
{
  "codigo": "FCO", "seccion": 9,
  "nombre": "Comunicación", "nombreEn": "Communication",
  "definicion": "Garantiza la identidad de las partes que participan en un intercambio de datos: prueba del origen (el emisor no puede negar haber enviado el mensaje) y prueba de la recepción (el receptor no puede negar haberlo recibido).",
  "familias": [
    {"codigo": "FCO_NRO", "nombre": "No repudio del origen", "nombreEn": "Non-repudiation of origin", "etiqueta": "",
     "resumen": "Proporciona evidencia de quién originó la información transmitida, de modo que el emisor no pueda negarlo.",
     "componentes": [
       {"id": "FCO_NRO.1", "nombre": "Prueba selectiva del origen", "desc": "Genera evidencia de origen para la información transmitida a petición del originador, del receptor o de terceros autorizados, y permite verificarla."},
       {"id": "FCO_NRO.2", "nombre": "Prueba forzada del origen", "desc": "Genera la evidencia de origen en todo momento (obligatoria), no solo a petición; jerárquico sobre FCO_NRO.1."}
     ]},
    {"codigo": "FCO_NRR", "nombre": "No repudio de la recepción", "nombreEn": "Non-repudiation of receipt", "etiqueta": "",
     "resumen": "Proporciona evidencia de quién recibió la información, de modo que el receptor no pueda negar haberla recibido.",
     "componentes": [
       {"id": "FCO_NRR.1", "nombre": "Prueba selectiva de la recepción", "desc": "Genera evidencia de recepción a petición del originador, del receptor o de terceros autorizados, y permite verificarla."},
       {"id": "FCO_NRR.2", "nombre": "Prueba forzada de la recepción", "desc": "Genera la evidencia de recepción siempre; jerárquico sobre FCO_NRR.1."}
     ]}
  ]
},
{
  "codigo": "FCS", "seccion": 10,
  "nombre": "Soporte criptográfico", "nombreEn": "Cryptographic support",
  "definicion": "Aplica cuando el TOE implementa funciones criptográficas (hardware, firmware y/o software) para objetivos como identificación y autenticación, no repudio, ruta/canal de confianza o separación de datos. Se compone de 4 familias: gestión de claves, operación criptográfica y generación aleatoria (RBG y RNG).",
  "familias": [
    {"codigo": "FCS_CKM", "nombre": "Gestión de claves criptográficas", "nombreEn": "Cryptographic key management", "etiqueta": "",
     "resumen": "Ciclo de vida de las claves criptográficas: generación, distribución, acceso, derivación y destrucción, siempre conforme a estándares especificados.",
     "componentes": [
       {"id": "FCS_CKM.1", "nombre": "Generación de claves criptográficas", "desc": "Genera claves según el algoritmo y los tamaños de clave especificados, que cumplen una lista de estándares definida."},
       {"id": "FCS_CKM.2", "nombre": "Distribución de claves criptográficas", "desc": "Distribuye claves según el método de distribución especificado, conforme a los estándares definidos."},
       {"id": "FCS_CKM.3", "nombre": "Acceso a claves criptográficas", "desc": "Realiza el tipo de acceso a claves especificado (almacenamiento, recuperación, exportación…) conforme a un método y estándares definidos."},
       {"id": "FCS_CKM.4", "nombre": "Destrucción de claves criptográficas", "desc": "⚠ Desusado en CC:2022: reemplazado por FCS_CKM.6 (destrucción con control de momento y evento). Se conserva por compatibilidad histórica."},
       {"id": "FCS_CKM.5", "nombre": "Derivación de claves criptográficas", "desc": "Deriva claves a partir de parámetros de entrada según un algoritmo de derivación (KDF) y tamaños/estándares especificados."},
       {"id": "FCS_CKM.6", "nombre": "Momento y evento de destrucción de claves", "desc": "Destruye claves y material de clave cuando ya no se necesitan (u otra circunstancia definida), con el método de destrucción especificado."}
     ]},
    {"codigo": "FCS_COP", "nombre": "Operación criptográfica", "nombreEn": "Cryptographic operation", "etiqueta": "",
     "resumen": "Exige que las operaciones criptográficas (cifrado/descifrado, firma/verificación, hash, checksums, acuerdo de claves…) se realicen con algoritmos y tamaños de clave especificados.",
     "componentes": [
       {"id": "FCS_COP.1", "nombre": "Operación criptográfica", "desc": "Realiza las operaciones criptográficas definidas conforme a un algoritmo y tamaños de clave especificados que cumplen una lista de estándares."}
     ]},
    {"codigo": "FCS_RBG", "nombre": "Generación de bits aleatorios", "nombreEn": "Random bit generation", "etiqueta": "Nueva en CC:2022",
     "resumen": "Requisitos para generadores de bits aleatorios (RBG): servicio determinista tras sembrado, fuentes de entropía (externas/internas) y exposición como servicio.",
     "componentes": [
       {"id": "FCS_RBG.1", "nombre": "Generación de bits aleatorios (RBG)", "desc": "Realiza el servicio RBG determinista según el algoritmo y estándares especificados, con siembra inicial y actualización del estado (reseeding/reinstancia) en las situaciones definidas."},
       {"id": "FCS_RBG.2", "nombre": "Generación de bits aleatorios (siembra externa)", "desc": "Acepta una entrada mínima de longitud definida desde una interfaz TSF con el fin de sembrar el RBG."},
       {"id": "FCS_RBG.3", "nombre": "Generación de bits aleatorios (siembra interna — fuente única)", "desc": "Siembra el RBG con una fuente de ruido TSF (software o hardware) que aporta al menos el número de bits de entropía mínima definido."},
       {"id": "FCS_RBG.4", "nombre": "Generación de bits aleatorios (siembra interna — múltiples fuentes)", "desc": "Siembra el RBG usando varias fuentes de ruido TSF (software y/o hardware) en la cantidad definida."},
       {"id": "FCS_RBG.5", "nombre": "Generación de bits aleatorios (combinación de fuentes de ruido)", "desc": "Aplica una operación de combinación a las salidas de las fuentes de ruido o a las entradas de siembra para crear la entrada de entropía, con un mínimo de bits de entropía definido."},
       {"id": "FCS_RBG.6", "nombre": "Servicio de generación de bits aleatorios", "desc": "Expone la salida del RBG como servicio a entidades fuera del TOE mediante una interfaz de hardware, software u otro tipo definido."}
     ]},
    {"codigo": "FCS_RNG", "nombre": "Generación de números aleatorios", "nombreEn": "Generation of random numbers", "etiqueta": "",
     "resumen": "Requisitos de CALIDAD para la generación de números aleatorios destinados a fines criptográficos.",
     "componentes": [
       {"id": "FCS_RNG.1", "nombre": "Generación de números aleatorios", "desc": "Proporciona un generador (físico, no físico verdadero, determinista, híbrido físico o híbrido determinista) con las capacidades de seguridad definidas, entregando salida que cumple una métrica de calidad."}
     ]}
  ]
},
{
  "codigo": "FDP", "seccion": 11,
  "nombre": "Protección de los datos del usuario", "nombreEn": "User data protection",
  "definicion": "La clase más extensa del catálogo: especifica políticas y funciones para proteger los datos del usuario dentro del TOE, durante su importación/exportación, su almacenamiento y su transferencia entre TSFs, así como los atributos de seguridad asociados. Sus familias se organizan en cuatro grupos (políticas de protección SFP, formas de protección de datos, importación/exportación e intercambio, y datos almacenados/residuales).",
  "familias": [
    {"codigo": "FDP_ACC", "nombre": "Política de control de acceso", "nombreEn": "Access control policy", "etiqueta": "",
     "resumen": "Nombra las políticas de control de acceso (SFP) y define su alcance de control: sujetos, objetos y operaciones cubiertos.",
     "componentes": [
       {"id": "FDP_ACC.1", "nombre": "Control de acceso por subconjuntos", "desc": "Impone la SFP nombrada sobre un subconjunto de sujetos, objetos y operaciones definidos por el autor del PP/ST."},
       {"id": "FDP_ACC.2", "nombre": "Control de acceso completo", "desc": "Impone la SFP sobre todos los sujetos y objetos y garantiza que toda operación entre ellos esté cubierta por una SFP."}
     ]},
    {"codigo": "FDP_ACF", "nombre": "Funciones de control de acceso", "nombreEn": "Access control functions", "etiqueta": "",
     "resumen": "Define las reglas concretas que implementan la SFP de control de acceso nombrada en FDP_ACC.",
     "componentes": [
       {"id": "FDP_ACF.1", "nombre": "Control de acceso basado en atributos de seguridad", "desc": "Impone la SFP basándose en atributos de seguridad de sujetos y objetos; define reglas que permiten o niegan explícitamente el acceso."}
     ]},
    {"codigo": "FDP_DAU", "nombre": "Autenticación de datos", "nombreEn": "Data authentication", "etiqueta": "",
     "resumen": "Garantiza la validez de datos 'estáticos' (almacenados, no en tránsito) mediante evidencia verificable, a diferencia de FAU (datos de eventos).",
     "componentes": [
       {"id": "FDP_DAU.1", "nombre": "Autenticación básica de datos", "desc": "Genera evidencia que garantiza la validez de los objetos o tipos de información definidos y permite verificarla."},
       {"id": "FDP_DAU.2", "nombre": "Autenticación de datos con identidad del garante", "desc": "Además, la evidencia permite identificar al usuario que la generó (jerárquico sobre FDP_DAU.1)."}
     ]},
    {"codigo": "FDP_ETC", "nombre": "Exportación desde el TOE", "nombreEn": "Export from the TOE", "etiqueta": "",
     "resumen": "Exportación mediada por la TSF de datos del usuario fuera del TOE, con o sin sus atributos de seguridad.",
     "componentes": [
       {"id": "FDP_ETC.1", "nombre": "Exportación sin atributos de seguridad", "desc": "Exporta los datos controlados por la SFP fuera del TOE sin los atributos de seguridad asociados a esos datos."},
       {"id": "FDP_ETC.2", "nombre": "Exportación con atributos de seguridad", "desc": "Exporta los datos junto con sus atributos, garantizando su asociación inequívoca, su interpretación según el propietario y reglas adicionales de exportación."}
     ]},
    {"codigo": "FDP_IFC", "nombre": "Política de control de flujo de información", "nombreEn": "Information flow control policy", "etiqueta": "",
     "resumen": "Nombra las SFP de flujo de información y define su alcance (sujetos, información y operaciones que provocan el flujo).",
     "componentes": [
       {"id": "FDP_IFC.1", "nombre": "Control de flujo de información por subconjuntos", "desc": "Impone la SFP de flujo nombrada sobre un subconjunto de sujetos, información y operaciones definidos."},
       {"id": "FDP_IFC.2", "nombre": "Control de flujo de información completo", "desc": "Impone la SFP sobre todos los sujetos e información y garantiza que toda operación de flujo esté cubierta."}
     ]},
    {"codigo": "FDP_IFF", "nombre": "Funciones de control de flujo de información", "nombreEn": "Information flow control functions", "etiqueta": "",
     "resumen": "Reglas que implementan la SFP de flujo nombrada en FDP_IFC, incluido el tratamiento de los flujos ilícitos (canales encubiertos).",
     "componentes": [
       {"id": "FDP_IFF.1", "nombre": "Atributos de seguridad simples", "desc": "Controla los flujos de información según atributos de sujetos e información, con reglas adicionales que autorizan o niegan flujos explícitamente."},
       {"id": "FDP_IFF.2", "nombre": "Atributos de seguridad jerárquicos", "desc": "Además, exige una función de ordenación entre atributos válidos (p. ej., niveles de confidencialidad con mínimo común superior); jerárquico sobre FDP_IFF.1."},
       {"id": "FDP_IFF.3", "nombre": "Flujos de información ilícitos limitados", "desc": "Limita la capacidad de los flujos ilícitos (canales encubiertos) definidos a una capacidad máxima especificada."},
       {"id": "FDP_IFF.4", "nombre": "Eliminación parcial de flujos de información ilícitos", "desc": "Además de limitar, previene los tipos de flujos ilícitos definidos; jerárquico sobre FDP_IFF.3."},
       {"id": "FDP_IFF.5", "nombre": "Sin flujos de información ilícitos", "desc": "Garantiza que no existan flujos ilícitos que evadan la SFP nombrada; jerárquico sobre FDP_IFF.4."},
       {"id": "FDP_IFF.6", "nombre": "Monitoreo de flujos de información ilícitos", "desc": "Monitorea los tipos de flujos ilícitos definidos cuando exceden la capacidad máxima especificada."}
     ]},
    {"codigo": "FDP_IRC", "nombre": "Control de retención de información", "nombreEn": "Information Retention Control", "etiqueta": "Nueva en CC:2022",
     "resumen": "Gestión segura de los datos que el TOE ya no necesita: borrado irreversible e inrastreable y acceso controlado entre la liberación y el borrado.",
     "componentes": [
       {"id": "FDP_IRC.1", "nombre": "Control de retención de información", "desc": "Aplica una política de borrado de información a los objetos definidos: los elimina de forma irreversible e inrastreable al terminar las operaciones definidas, y garantiza que no sean accesibles entre su liberación y su borrado."}
     ]},
    {"codigo": "FDP_ITC", "nombre": "Importación desde fuera del TOE", "nombreEn": "Import from outside of the TOE", "etiqueta": "",
     "resumen": "Importación mediada por la TSF de datos del usuario hacia el TOE, con o sin atributos de seguridad.",
     "componentes": [
       {"id": "FDP_ITC.1", "nombre": "Importación sin atributos de seguridad", "desc": "Importa datos controlados por la SFP ignorando cualquier atributo de seguridad asociado, y aplica reglas adicionales de importación."},
       {"id": "FDP_ITC.2", "nombre": "Importación con atributos de seguridad", "desc": "Importa datos usando los atributos asociados, garantizando la asociación inequívoca y la interpretación correcta de dichos atributos (con canal de confianza o ruta fiable)."}
     ]},
    {"codigo": "FDP_ITT", "nombre": "Transferencia interna en el TOE", "nombreEn": "Internal TOE transfer", "etiqueta": "",
     "resumen": "Protege los datos del usuario cuando se transmiten entre partes físicamente separadas del TOE a través de un canal interno.",
     "componentes": [
       {"id": "FDP_ITT.1", "nombre": "Protección básica de la transferencia interna", "desc": "Impone la SFP para prevenir la [divulgación, modificación o pérdida de uso] de los datos del usuario durante la transmisión entre partes separadas del TOE."},
       {"id": "FDP_ITT.2", "nombre": "Separación de la transmisión por atributo", "desc": "Además, separa los datos controlados por la SFP durante la transmisión según los valores de los atributos definidos."},
       {"id": "FDP_ITT.3", "nombre": "Monitoreo de integridad", "desc": "Monitorea los datos transmitidos para detectar los errores de integridad definidos y ejecuta la acción especificada al detectarlos."},
       {"id": "FDP_ITT.4", "nombre": "Monitoreo de integridad basado en atributos", "desc": "Monitorea la integridad y, además, usa los atributos definidos para separar los canales de transmisión; jerárquico sobre FDP_ITT.3."}
     ]},
    {"codigo": "FDP_RIP", "nombre": "Protección de la información residual", "nombreEn": "Residual information protection", "etiqueta": "",
     "resumen": "Garantiza que el contenido anterior de un recurso no quede disponible cuando el recurso se desasigna y se reasigna a otro objeto.",
     "componentes": [
       {"id": "FDP_RIP.1", "nombre": "Protección de información residual por subconjuntos", "desc": "Hace indisponible el contenido previo de un recurso al asignarlo/desasignarlo para los objetos definidos."},
       {"id": "FDP_RIP.2", "nombre": "Protección completa de la información residual", "desc": "Lo mismo, pero para TODOS los objetos; jerárquico sobre FDP_RIP.1."}
     ]},
    {"codigo": "FDP_ROL", "nombre": "Retroceso", "nombreEn": "Rollback", "etiqueta": "",
     "resumen": "Permite deshacer la última operación o una serie de operaciones (dentro de un límite) y volver a un estado anterior conocido, preservando la integridad de los datos.",
     "componentes": [
       {"id": "FDP_ROL.1", "nombre": "Retroceso básico", "desc": "Permite deshacer las operaciones definidas sobre la información/objetos, dentro del límite especificado."},
       {"id": "FDP_ROL.2", "nombre": "Retroceso avanzado", "desc": "Permite deshacer TODAS las operaciones sobre los objetos definidos; jerárquico sobre FDP_ROL.1."}
     ]},
    {"codigo": "FDP_SDC", "nombre": "Confidencialidad de los datos almacenados", "nombreEn": "Stored data confidentiality", "etiqueta": "Nueva en CC:2022",
     "resumen": "Protege la confidencialidad de los datos del usuario mientras están almacenados en zonas de memoria bajo control de la TSF (solo accesibles por las interfaces especificadas).",
     "componentes": [
       {"id": "FDP_SDC.1", "nombre": "Confidencialidad de los datos almacenados", "desc": "Garantiza la confidencialidad de los datos del usuario [todos o los definidos] mientras están almacenados en memoria temporal, persistente o cualquier memoria."},
       {"id": "FDP_SDC.2", "nombre": "Confidencialidad de los datos almacenados con método dedicado", "desc": "Confidencialidad según las características de los datos y sin intervención del usuario (depende de FCS_COP.1, p. ej., mediante cifrado)."}
     ]},
    {"codigo": "FDP_SDI", "nombre": "Integridad de los datos almacenados", "nombreEn": "Stored data integrity", "etiqueta": "",
     "resumen": "Protege los datos del usuario de errores de integridad mientras están almacenados en contenedores controlados por la TSF.",
     "componentes": [
       {"id": "FDP_SDI.1", "nombre": "Monitoreo de la integridad de los datos almacenados", "desc": "Monitorea los datos almacenados para detectar los errores de integridad definidos en todos los objetos, según los atributos especificados."},
       {"id": "FDP_SDI.2", "nombre": "Monitoreo de integridad de datos almacenados y acción", "desc": "Además, ejecuta la acción definida al detectar un error de integridad; jerárquico sobre FDP_SDI.1."}
     ]},
    {"codigo": "FDP_UCT", "nombre": "Protección de la confidencialidad en la transferencia inter-TSF de datos del usuario", "nombreEn": "Inter-TSF user data confidentiality transfer protection", "etiqueta": "",
     "resumen": "Confidencialidad de los datos del usuario cuando se transfieren por un canal externo entre el TOE y otro producto TI de confianza.",
     "componentes": [
       {"id": "FDP_UCT.1", "nombre": "Confidencialidad básica del intercambio de datos", "desc": "Transmite o recibe datos del usuario de forma protegida contra la divulgación no autorizada, impidiendo la SFP y usando canal de confianza (FTP_ITC) o ruta fiable (FTP_TRP)."}
     ]},
    {"codigo": "FDP_UIT", "nombre": "Protección de la integridad en la transferencia inter-TSF de datos del usuario", "nombreEn": "Inter-TSF user data integrity transfer protection", "etiqueta": "",
     "resumen": "Integridad de los datos del usuario en tránsito entre el TOE y otro producto TI de confianza, con mecanismos de recuperación ante errores detectados.",
     "componentes": [
       {"id": "FDP_UIT.1", "nombre": "Integridad del intercambio de datos", "desc": "Transmite/recibe datos protegidos contra errores de [modificación, borrado, inserción o repetición] y determina, al recibirlos, si ocurrió alguno."},
       {"id": "FDP_UIT.2", "nombre": "Recuperación del intercambio por el emisor", "desc": "Permite recuperarse de los errores definidos con la ayuda del producto TI de confianza emisor."},
       {"id": "FDP_UIT.3", "nombre": "Recuperación del intercambio por el receptor", "desc": "Se recupera de los errores definidos sin ayuda del emisor; jerárquico sobre FDP_UIT.2."}
     ]}
  ]
},
{
  "codigo": "FIA", "seccion": 12,
  "nombre": "Identificación y autenticación", "nombreEn": "Identification and authentication",
  "definicion": "Establece y verifica la identidad reclamada de los usuarios: identificación, autenticación, atributos de usuario, gestión de fallos de autenticación, secretos y asociación usuario-sujeto. La identificación y autenticación correctas son prerrequisito para que las demás clases de requisitos sean efectivas.",
  "familias": [
    {"codigo": "FIA_AFL", "nombre": "Fallos de autenticación", "nombreEn": "Authentication failures", "etiqueta": "",
     "resumen": "Gestión de los intentos fallidos de autenticación: detección de umbrales y acciones correctivas.",
     "componentes": [
       {"id": "FIA_AFL.1", "nombre": "Manejo de fallos de autenticación", "desc": "Detecta cuando ocurre el número definido de intentos fallidos de autenticación y ejecuta las acciones definidas (p. ej., deshabilitar la cuenta)."}
     ]},
    {"codigo": "FIA_API", "nombre": "Prueba de identidad por autenticación", "nombreEn": "Authentication proof of identity", "etiqueta": "Restaurada en CC:2022",
     "resumen": "El TOE demuestra SU PROPIA identidad ante una entidad externa del entorno TI, permitiendo verificar el TOE.",
     "componentes": [
       {"id": "FIA_API.1", "nombre": "Prueba de identidad por autenticación", "desc": "Proporciona el mecanismo de autenticación definido para probar la identidad de la entidad especificada ante una entidad externa, con las propiedades requeridas."}
     ]},
    {"codigo": "FIA_ATD", "nombre": "Definición de atributos de usuario", "nombreEn": "User attribute definition", "etiqueta": "",
     "resumen": "Atributos de seguridad de cada usuario (además de su identidad) que la TSF usa para tomar decisiones de seguridad.",
     "componentes": [
       {"id": "FIA_ATD.1", "nombre": "Definición de atributos de usuario", "desc": "Mantiene la lista definida de atributos de seguridad pertenecientes a usuarios individuales."}
     ]},
    {"codigo": "FIA_SOS", "nombre": "Especificación de secretos", "nombreEn": "Specification of secrets", "etiqueta": "",
     "resumen": "Métricas de calidad para los secretos (contraseñas, claves…): verificación de los proporcionados y generación por parte de la TSF.",
     "componentes": [
       {"id": "FIA_SOS.1", "nombre": "Verificación de secretos", "desc": "Proporciona un mecanismo para verificar que los secretos cumplen la métrica de calidad definida."},
       {"id": "FIA_SOS.2", "nombre": "Generación de secretos por la TSF", "desc": "Genera secretos que cumplen la métrica de calidad definida y puede exigir su uso en las funciones TSF especificadas."}
     ]},
    {"codigo": "FIA_UAU", "nombre": "Autenticación de usuarios", "nombreEn": "User authentication", "etiqueta": "",
     "resumen": "Mecanismos de autenticación soportados por la TSF, cuándo se exige autenticarse y cómo se protege el proceso.",
     "componentes": [
       {"id": "FIA_UAU.1", "nombre": "Momento de la autenticación", "desc": "Permite ejecutar las acciones TSF definidas antes de autenticarse; exige autenticación exitosa para cualquier otra acción mediada por la TSF."},
       {"id": "FIA_UAU.2", "nombre": "Autenticación del usuario antes de cualquier acción", "desc": "Exige autenticación exitosa del usuario antes de permitir cualquier acción mediada por la TSF; jerárquico sobre FIA_UAU.1."},
       {"id": "FIA_UAU.3", "nombre": "Autenticación infalsificable", "desc": "Detecta o previene el uso de datos de autenticación falsificados o copiados de otro usuario de la TSF."},
       {"id": "FIA_UAU.4", "nombre": "Mecanismos de autenticación de un solo uso", "desc": "Previene la reutilización de los datos de autenticación de los mecanismos identificados (p. ej., OTP)."},
       {"id": "FIA_UAU.5", "nombre": "Múltiples mecanismos de autenticación", "desc": "Proporciona varios mecanismos de autenticación y autentica a cada usuario según las reglas que describen su combinación."},
       {"id": "FIA_UAU.6", "nombre": "Re-autenticación", "desc": "Re-autentica al usuario bajo las condiciones definidas (p. ej., tras un bloqueo o un cambio de rol)."},
       {"id": "FIA_UAU.7", "nombre": "Retroalimentación protegida de la autenticación", "desc": "Durante la autenticación solo muestra la retroalimentación definida (p. ej., asteriscos en lugar del texto)."}
     ]},
    {"codigo": "FIA_UID", "nombre": "Identificación de usuarios", "nombreEn": "User identification", "etiqueta": "",
     "resumen": "Condiciones bajo las que el usuario debe identificarse antes de realizar acciones mediadas por la TSF.",
     "componentes": [
       {"id": "FIA_UID.1", "nombre": "Momento de la identificación", "desc": "Permite ejecutar las acciones TSF definidas antes de identificarse; exige identificación exitosa para el resto de acciones."},
       {"id": "FIA_UID.2", "nombre": "Identificación del usuario antes de cualquier acción", "desc": "Exige identificación exitosa antes de permitir cualquier acción mediada por la TSF; jerárquico sobre FIA_UID.1."}
     ]},
    {"codigo": "FIA_USB", "nombre": "Asociación usuario-sujeto", "nombreEn": "User-subject binding", "etiqueta": "",
     "resumen": "Asociación de los atributos de seguridad del usuario autenticado con los sujetos que actúan en su nombre.",
     "componentes": [
       {"id": "FIA_USB.1", "nombre": "Asociación usuario-sujeto", "desc": "Asocia los atributos de seguridad del usuario con los sujetos que actúan en su nombre, con reglas para la asociación inicial y para los cambios posteriores."}
     ]}
  ]
},
{
  "codigo": "FMT", "seccion": 13,
  "nombre": "Gestión de la seguridad", "nombreEn": "Security management",
  "definicion": "Especifica la gestión de los distintos aspectos de la TSF: atributos de seguridad, datos de la TSF y funciones de la TSF, así como los roles de gestión y su interacción. Objetivos: gestión de datos TSF, de atributos, de funciones y definición de roles.",
  "familias": [
    {"codigo": "FMT_LIM", "nombre": "Capacidades y disponibilidad limitadas", "nombreEn": "Limited capabilities and availability", "etiqueta": "Nueva en CC:2022",
     "resumen": "Limita por diseño las capacidades y la disponibilidad de la TSF (procede de los perfiles de tarjetas inteligentes) para facilitar los análisis de ataque.",
     "componentes": [
       {"id": "FMT_LIM.1", "nombre": "Capacidades limitadas", "desc": "La TSF limita sus capacidades para que, junto con FMT_LIM.2, se imponga la política de capacidad y disponibilidad limitada definida."},
       {"id": "FMT_LIM.2", "nombre": "Disponibilidad limitada", "desc": "La TSF está diseñada de forma que limita su disponibilidad para imponer la misma política conjuntamente con FMT_LIM.1."}
     ]},
    {"codigo": "FMT_MOF", "nombre": "Gestión de las funciones en la TSF", "nombreEn": "Management of functions in TSF", "etiqueta": "",
     "resumen": "Permite a los roles autorizados gestionar el comportamiento de las funciones de seguridad.",
     "componentes": [
       {"id": "FMT_MOF.1", "nombre": "Gestión del comportamiento de las funciones de seguridad", "desc": "Restringe a los roles autorizados la capacidad de [determinar el comportamiento de, deshabilitar, habilitar, modificar el comportamiento de] las funciones definidas."}
     ]},
    {"codigo": "FMT_MSA", "nombre": "Gestión de los atributos de seguridad", "nombreEn": "Management of security attributes", "etiqueta": "",
     "resumen": "Gestión (consulta, modificación, valores por defecto y herencia) de los atributos de seguridad por parte de roles autorizados.",
     "componentes": [
       {"id": "FMT_MSA.1", "nombre": "Gestión de los atributos de seguridad", "desc": "Restringe a los roles autorizados la capacidad de [cambiar el valor por defecto, consultar, modificar, borrar u otras operaciones] sobre los atributos definidos."},
       {"id": "FMT_MSA.2", "nombre": "Atributos de seguridad seguros", "desc": "Garantiza que solo se aceptan valores seguros para los atributos de seguridad definidos."},
       {"id": "FMT_MSA.3", "nombre": "Inicialización estática de atributos", "desc": "Proporciona valores por defecto [restrictivos/permisivos] para los atributos usados por la SFP y permite a los roles autorizados especificar valores iniciales alternativos."},
       {"id": "FMT_MSA.4", "nombre": "Herencia de los valores de los atributos de seguridad", "desc": "Garantiza que los atributos definidos heredan sus valores de acuerdo con la relación de herencia especificada (p. ej., de un contenedor o plantilla a los objetos que crea)."}
     ]},
    {"codigo": "FMT_MTD", "nombre": "Gestión de los datos de la TSF", "nombreEn": "Management of TSF data", "etiqueta": "",
     "resumen": "Gestión de los datos de la TSF (p. ej., listas de auditoría, umbrales): operaciones, límites y valores seguros.",
     "componentes": [
       {"id": "FMT_MTD.1", "nombre": "Gestión de los datos de la TSF", "desc": "Restringe a los roles autorizados la capacidad de [modificar, consultar, borrar, limpiar u otras operaciones] sobre los datos TSF definidos."},
       {"id": "FMT_MTD.2", "nombre": "Gestión de los límites sobre los datos de la TSF", "desc": "Restringe la especificación de los límites de los datos TSF y ejecuta las acciones definidas cuando los datos alcanzan o superan dichos límites."},
       {"id": "FMT_MTD.3", "nombre": "Datos de la TSF seguros", "desc": "Garantiza que solo se aceptan valores seguros para los datos TSF definidos."}
     ]},
    {"codigo": "FMT_REV", "nombre": "Revocación", "nombreEn": "Revocation", "etiqueta": "",
     "resumen": "Revocación de atributos de seguridad (p. ej., credenciales o permisos) de usuarios, sujetos, objetos y otros recursos.",
     "componentes": [
       {"id": "FMT_REV.1", "nombre": "Revocación", "desc": "Restringe a los roles autorizados la capacidad de revocar los atributos definidos asociados a [usuarios, sujetos, objetos, otros recursos], aplicando las reglas de revocación especificadas."}
     ]},
    {"codigo": "FMT_SAE", "nombre": "Caducidad de los atributos de seguridad", "nombreEn": "Security attribute expiration", "etiqueta": "",
     "resumen": "Exige límites de validez temporal para los atributos de seguridad y acciones al expirar (depende de FPT_STM.1).",
     "componentes": [
       {"id": "FMT_SAE.1", "nombre": "Autorización con validez limitada en el tiempo", "desc": "Permite especificar el tiempo de caducidad de los atributos definidos y ejecuta las acciones definidas una vez vencido el plazo."}
     ]},
    {"codigo": "FMT_SMF", "nombre": "Especificación de las funciones de gestión", "nombreEn": "Specification of Management Functions", "etiqueta": "",
     "resumen": "Define las funciones de gestión que la TSF debe poder realizar (atributos, auditoría, copia de seguridad…); trabaja junto con las demás familias de FMT.",
     "componentes": [
       {"id": "FMT_SMF.1", "nombre": "Especificación de las funciones de gestión", "desc": "La TSF debe poder realizar la lista definida de funciones de gestión."}
     ]},
    {"codigo": "FMT_SMR", "nombre": "Roles de gestión de la seguridad", "nombreEn": "Security management roles", "etiqueta": "",
     "resumen": "Controla la asignación de roles a usuarios y las condiciones para asumirlos (separación de capacidades).",
     "componentes": [
       {"id": "FMT_SMR.1", "nombre": "Roles de seguridad", "desc": "La TSF mantiene los roles autorizados definidos y es capaz de asociar usuarios con roles."},
       {"id": "FMT_SMR.2", "nombre": "Restricciones sobre los roles de seguridad", "desc": "Además, garantiza que se cumplen las condiciones definidas para los distintos roles; jerárquico sobre FMT_SMR.1."},
       {"id": "FMT_SMR.3", "nombre": "Asumir roles", "desc": "Exige una petición explícita para asumir los roles definidos."}
     ]}
  ]
},
{
  "codigo": "FPR", "seccion": 14,
  "nombre": "Privacidad", "nombreEn": "Privacy",
  "definicion": "Protege al usuario contra el descubrimiento y el uso indebido de su identidad por otros usuarios: anonimato, seudonimato, no vinculación (unlinkability) y no observabilidad.",
  "familias": [
    {"codigo": "FPR_ANO", "nombre": "Anonimato", "nombreEn": "Anonymity", "etiqueta": "",
     "resumen": "Garantiza que un usuario pueda usar recursos o servicios sin que otros usuarios determinen su identidad real.",
     "componentes": [
       {"id": "FPR_ANO.1", "nombre": "Anonimato", "desc": "Garantiza que el conjunto definido de usuarios/sujetos no puede determinar el nombre real del usuario vinculado a los sujetos, operaciones u objetos definidos."},
       {"id": "FPR_ANO.2", "nombre": "Anonimato sin información solicitada", "desc": "Además, ofrece los servicios definidos sin solicitar ninguna referencia al nombre real del usuario; jerárquico sobre FPR_ANO.1."}
     ]},
    {"codigo": "FPR_PSE", "nombre": "Seudonimato", "nombreEn": "Pseudonymity", "etiqueta": "",
     "resumen": "El usuario usa recursos sin revelar su identidad, pero sigue siendo responsable (alias) de ese uso.",
     "componentes": [
       {"id": "FPR_PSE.1", "nombre": "Seudonimato", "desc": "Permite el uso sin revelar el nombre real, mediante el número definido de alias que la TSF determina o acepta y verifica conforme a la métrica de alias definida."},
       {"id": "FPR_PSE.2", "nombre": "Seudonimato reversible", "desc": "Un usuario autorizado puede determinar la identidad real a partir del alias solo bajo las condiciones definidas; jerárquico sobre FPR_PSE.1."},
       {"id": "FPR_PSE.3", "nombre": "Seudonimato con alias", "desc": "El alias puede ser idéntico a uno proporcionado previamente bajo condiciones definidas; si no, debe ser ajeno a los alias previos; jerárquico sobre FPR_PSE.1."}
     ]},
    {"codigo": "FPR_UNL", "nombre": "No vinculación", "nombreEn": "Unlinkability", "etiqueta": "",
     "resumen": "Las entidades externas no pueden rastrear los vínculos entre operaciones, aunque existan.",
     "componentes": [
       {"id": "FPR_UNL.1", "nombre": "No vinculación de las operaciones", "desc": "Garantiza que el conjunto definido de entidades/operaciones no puede determinar si otras operaciones fueron causadas por el mismo usuario o están relacionadas según lo definido."}
     ]},
    {"codigo": "FPR_UNO", "nombre": "No observabilidad", "nombreEn": "Unobservability", "etiqueta": "",
     "resumen": "El usuario puede usar un recurso o servicio sin que terceros puedan observar que se está usando.",
     "componentes": [
       {"id": "FPR_UNO.1", "nombre": "No observabilidad", "desc": "Los usuarios/sujetos definidos no pueden observar la operación definida sobre los objetos por parte de los usuarios/sujetos protegidos."},
       {"id": "FPR_UNO.2", "nombre": "Asignación de la información que impacta la no observabilidad", "desc": "Reparte la información relacionada con la no observabilidad entre las distintas partes del TOE de forma que se mantengan las condiciones definidas; jerárquico sobre FPR_UNO.1."},
       {"id": "FPR_UNO.3", "nombre": "No observabilidad sin información solicitada", "desc": "Ofrece los servicios definidos sin solicitar ninguna referencia a la información de privacidad definida."},
       {"id": "FPR_UNO.4", "nombre": "Observabilidad por usuario autorizado", "desc": "Proporciona al conjunto definido de usuarios autorizados la capacidad de observar el uso de los recursos/servicios definidos."}
     ]}
  ]
},
{
  "codigo": "FPT", "seccion": 15,
  "nombre": "Protección de las funciones de seguridad del TOE (TSF)", "nombreEn": "Protection of the TSF",
  "definicion": "Relacionada con la integridad y gestión de los MECANISMOS que constituyen la TSF (su implementación, sus datos y las entidades externas con las que interactúa), garantizando que las SFP no puedan ser manipuladas ni evitadas. Es el contrapunto de FDP: mientras FDP protege los datos del usuario, FPT protege los datos y funciones de la propia TSF.",
  "familias": [
    {"codigo": "FPT_EMS", "nombre": "Emisiones del TOE", "nombreEn": "TOE emanation", "etiqueta": "Nueva en CC:2022",
     "resumen": "Controla las emisiones del TOE (ondas, señales, radiación electromagnética) que podrían permitir el acceso a datos de la TSF o del usuario.",
     "componentes": [
       {"id": "FPT_EMS.1", "nombre": "Emisión de datos de la TSF y del usuario", "desc": "Garantiza que el TOE no emite emisiones sobre su superficie de ataque en cantidad que permita acceder a los datos de la TSF o del usuario, según lo especificado en la Tabla 1 del documento."}
     ]},
    {"codigo": "FPT_FLS", "nombre": "Fallo seguro", "nombreEn": "Fail secure", "etiqueta": "",
     "resumen": "Preservación de un estado seguro cuando la TSF falla.",
     "componentes": [
       {"id": "FPT_FLS.1", "nombre": "Fallo con preservación del estado seguro", "desc": "Preserva un estado seguro cuando ocurren los tipos de fallo de la TSF definidos."}
     ]},
    {"codigo": "FPT_INI", "nombre": "Inicialización de la TSF", "nombreEn": "TSF initialization", "etiqueta": "Nueva en CC:2022",
     "resumen": "Inicialización de la TSF por una función dedicada que garantiza un estado operativo correcto y seguro.",
     "componentes": [
       {"id": "FPT_INI.1", "nombre": "Inicialización de la TSF", "desc": "Proporciona una función de inicialización autoprotegida (integridad y autenticidad) que verifica las propiedades definidas (Tabla 2) antes de establecer la TSF en su estado inicial seguro."}
     ]},
    {"codigo": "FPT_ITA", "nombre": "Disponibilidad de los datos de la TSF exportados", "nombreEn": "Availability of exported TSF data", "etiqueta": "",
     "resumen": "Disponibilidad de los datos de la TSF compartidos con otro producto TI de confianza.",
     "componentes": [
       {"id": "FPT_ITA.1", "nombre": "Disponibilidad inter-TSF dentro de una métrica definida", "desc": "Garantiza la disponibilidad de los tipos de datos TSF proporcionados a otro producto TI de confianza, dentro de la métrica y condiciones definidas."}
     ]},
    {"codigo": "FPT_ITC", "nombre": "Confidencialidad de los datos de la TSF exportados", "nombreEn": "Confidentiality of exported TSF data", "etiqueta": "",
     "resumen": "Protección contra la divulgación no autorizada de los datos de la TSF durante su transmisión entre TSFs.",
     "componentes": [
       {"id": "FPT_ITC.1", "nombre": "Confidencialidad inter-TSF durante la transmisión", "desc": "Protege todos los datos de la TSF transmitidos a otro producto TI de confianza contra la divulgación no autorizada durante la transmisión."}
     ]},
    {"codigo": "FPT_ITI", "nombre": "Integridad de los datos de la TSF exportados", "nombreEn": "Integrity of exported TSF data", "etiqueta": "",
     "resumen": "Protección contra la modificación no autorizada de los datos de la TSF durante su transmisión entre TSFs.",
     "componentes": [
       {"id": "FPT_ITI.1", "nombre": "Detección inter-TSF de la modificación", "desc": "Detecta modificaciones de todos los datos TSF transmitidos según la métrica definida, verifica su integridad y ejecuta la acción definida si se detectan."},
       {"id": "FPT_ITI.2", "nombre": "Detección y corrección inter-TSF de la modificación", "desc": "Además de detectar, es capaz de corregir la modificación de los datos TSF transmitidos; jerárquico sobre FPT_ITI.1."}
     ]},
    {"codigo": "FPT_ITT", "nombre": "Transferencia interna de datos de la TSF", "nombreEn": "Internal TOE TSF data transfer", "etiqueta": "",
     "resumen": "Protección de los datos de la TSF cuando se transfieren entre partes separadas del TOE por un canal interno.",
     "componentes": [
       {"id": "FPT_ITT.1", "nombre": "Protección básica de la transferencia interna de datos de la TSF", "desc": "Protege los datos de la TSF contra [divulgación o modificación] cuando se transmiten entre partes separadas del TOE."},
       {"id": "FPT_ITT.2", "nombre": "Separación de la transferencia de datos de la TSF", "desc": "Además, separa los datos del usuario de los datos de la TSF durante su transmisión interna; jerárquico sobre FPT_ITT.1."},
       {"id": "FPT_ITT.3", "nombre": "Monitoreo de la integridad de los datos de la TSF", "desc": "Detecta [modificación, sustitución, reordenamiento o borrado] de los datos TSF transmitidos internamente y ejecuta la acción definida."}
     ]},
    {"codigo": "FPT_PHP", "nombre": "Protección física de la TSF", "nombreEn": "TSF physical protection", "etiqueta": "",
     "resumen": "Restricción del acceso físico no autorizado a la TSF y disuasión/resistencia ante su modificación o sustitución física.",
     "componentes": [
       {"id": "FPT_PHP.1", "nombre": "Detección pasiva de ataques físicos", "desc": "Proporciona detección inequívoca de la manipulación física que puede comprometer la TSF y capacidad para determinar si ocurrió."},
       {"id": "FPT_PHP.2", "nombre": "Notificación de ataques físicos", "desc": "Además, monitorea los dispositivos/elementos definidos y notifica a un usuario o rol designado cuando ocurre manipulación física; jerárquico sobre FPT_PHP.1."},
       {"id": "FPT_PHP.3", "nombre": "Resistencia a ataques físicos", "desc": "Resiste los escenarios de manipulación física definidos respondiendo automáticamente de modo que los SFR sigan siempre siendo impuestos."}
     ]},
    {"codigo": "FPT_RCV", "nombre": "Recuperación de confianza", "nombreEn": "Trusted recovery", "etiqueta": "Nueva en CC:2022",
     "resumen": "Garantiza que el TOE arranca sin compromiso de protección y se recupera sin compromiso tras discontinuidades de operación.",
     "componentes": [
       {"id": "FPT_RCV.1", "nombre": "Recuperación manual", "desc": "Tras los fallos/discontinuidades definidos, la TSF entra en modo de mantenimiento con capacidad de volver a un estado seguro."},
       {"id": "FPT_RCV.2", "nombre": "Recuperación automática", "desc": "Cuando la recuperación automática no es posible, entra en modo de mantenimiento; y para los fallos definidos asegura el regreso al estado seguro con procedimientos automáticos."},
       {"id": "FPT_RCV.3", "nombre": "Recuperación automática sin pérdida indebida", "desc": "Además, la recuperación no excede la pérdida cuantificada definida de datos TSF u objetos, y permite determinar qué objetos se recuperaron; jerárquico sobre FPT_RCV.2."},
       {"id": "FPT_RCV.4", "nombre": "Recuperación de funciones", "desc": "Para las funciones y escenarios de fallo definidos, la función se completa con éxito o se recupera a un estado consistente y seguro."}
     ]},
    {"codigo": "FPT_RPL", "nombre": "Detección de repetición", "nombreEn": "Replay detection", "etiqueta": "",
     "resumen": "Detección de ataques de repetición (replay) contra varias entidades y acciones correctivas.",
     "componentes": [
       {"id": "FPT_RPL.1", "nombre": "Detección de repetición", "desc": "Detecta la repetición para las entidades definidas y ejecuta las acciones específicas cuando la detecta."}
     ]},
    {"codigo": "FPT_SSP", "nombre": "Protocolo de sincronía de estados", "nombreEn": "State synchrony protocol", "etiqueta": "Nueva en CC:2022",
     "resumen": "Protocolo de confianza para sincronizar el estado entre partes distribuidas del TOE tras acciones relevantes para la seguridad.",
     "componentes": [
       {"id": "FPT_SSP.1", "nombre": "Acuse de recibo simple de confianza", "desc": "Acusa, cuando otra parte de la TSF lo solicita, la recepción de una transmisión de datos TSF no modificada."},
       {"id": "FPT_SSP.2", "nombre": "Acuse de recibo mutuo de confianza", "desc": "Además, garantiza que las partes relevantes conocen el estado correcto de los datos transmitidos mediante acuses de recibo; jerárquico sobre FPT_SSP.1."}
     ]},
    {"codigo": "FPT_STM", "nombre": "Marcas de tiempo", "nombreEn": "Time stamps", "etiqueta": "",
     "resumen": "Requisitos para una función de marcas de tiempo fiable dentro del TOE (clave para la auditoría).",
     "componentes": [
       {"id": "FPT_STM.1", "nombre": "Marcas de tiempo fiables", "desc": "La TSF puede proporcionar marcas de tiempo fiables."},
       {"id": "FPT_STM.2", "nombre": "Fuente de tiempo", "desc": "Permite al usuario autorizado por la política de seguridad [establecer la hora y/o configurar otra fuente de tiempo]."}
     ]},
    {"codigo": "FPT_TDC", "nombre": "Consistencia de datos de la TSF inter-TSF", "nombreEn": "Inter-TSF TSF data consistency", "etiqueta": "",
     "resumen": "Interpretación consistente de los datos de la TSF compartidos con otro producto TI de confianza (p. ej., atributos de seguridad).",
     "componentes": [
       {"id": "FPT_TDC.1", "nombre": "Consistencia básica de datos de la TSF inter-TSF", "desc": "Proporciona la capacidad de interpretar consistentemente los tipos de datos TSF compartidos, aplicando las reglas de interpretación definidas."}
     ]},
    {"codigo": "FPT_TEE", "nombre": "Prueba de entidades externas", "nombreEn": "Testing of external entities", "etiqueta": "Nueva en CC:2022",
     "resumen": "La TSF ejecuta pruebas sobre entidades externas (plataformas, sistemas operativos, IDS, servidores…), no sobre usuarios humanos.",
     "componentes": [
       {"id": "FPT_TEE.1", "nombre": "Prueba de entidades externas", "desc": "Ejecuta un conjunto de pruebas [durante el arranque, periódicamente, a petición de un usuario autorizado u otras condiciones] para verificar las propiedades definidas de las entidades externas y ejecuta las acciones definidas si fallan."}
     ]},
    {"codigo": "FPT_TRC", "nombre": "Consistencia de la replicación de datos de la TSF interna al TOE", "nombreEn": "Internal TOE TSF data replication consistency", "etiqueta": "Nueva en CC:2022",
     "resumen": "Consistencia de los datos de la TSF cuando se replican entre las partes internas del TOE (p. ej., tras caídas de las conexiones internas).",
     "componentes": [
       {"id": "FPT_TRC.1", "nombre": "Consistencia TSF interna", "desc": "Garantiza que los datos TSF replicados entre partes del TOE son consistentes y, ante desconexiones, los sincroniza al reconectar antes de procesar funciones que dependan de ellos."}
     ]},
    {"codigo": "FPT_TST", "nombre": "Autoprueba de la TSF", "nombreEn": "TSF self-test", "etiqueta": "",
     "resumen": "Autopruebas de la TSF (interfaces, operaciones aritméticas críticas…) para demostrar su correcto funcionamiento y detectar corrupciones.",
     "componentes": [
       {"id": "FPT_TST.1", "nombre": "Autoprueba de la TSF", "desc": "Ejecuta las autopruebas definidas [durante el arranque, periódicamente, a petición de un usuario autorizado u otras condiciones] y permite a los usuarios autorizados verificar la integridad de la TSF y de sus datos."}
     ]}
  ]
},
{
  "codigo": "FRU", "seccion": 16,
  "nombre": "Utilización de los recursos", "nombreEn": "Resource utilization",
  "definicion": "Apoya la disponibilidad de los recursos requeridos (capacidad de proceso y/o almacenamiento): tolerancia a fallos, prioridad de servicio y asignación de recursos para evitar la monopolización.",
  "familias": [
    {"codigo": "FRU_FLT", "nombre": "Tolerancia a fallos", "nombreEn": "Fault tolerance", "etiqueta": "",
     "resumen": "Protege contra la indisponibilidad de capacidades causada por fallos del TOE.",
     "componentes": [
       {"id": "FRU_FLT.1", "nombre": "Tolerancia a fallos degradada", "desc": "Garantiza la operación de las capacidades TOE definidas cuando ocurren los tipos de fallo especificados."},
       {"id": "FRU_FLT.2", "nombre": "Tolerancia a fallos limitada", "desc": "Garantiza la operación de TODAS las capacidades del TOE ante los fallos definidos; jerárquico sobre FRU_FLT.1."}
     ]},
    {"codigo": "FRU_PRS", "nombre": "Prioridad de servicio", "nombreEn": "Priority of service", "etiqueta": "",
     "resumen": "Las actividades de alta prioridad siempre se completan sin interferencias indebidas de las de baja prioridad.",
     "componentes": [
       {"id": "FRU_PRS.1", "nombre": "Prioridad de servicio limitada", "desc": "Asigna una prioridad a cada sujeto y media el acceso a los recursos controlados según esa prioridad."},
       {"id": "FRU_PRS.2", "nombre": "Prioridad de servicio completa", "desc": "Media el acceso a TODOS los recursos compartibles según la prioridad del sujeto; jerárquico sobre FRU_PRS.1."}
     ]},
    {"codigo": "FRU_RSA", "nombre": "Asignación de recursos", "nombreEn": "Resource allocation", "etiqueta": "",
     "resumen": "Evita la denegación de servicio por monopolización no autorizada de recursos, mediante cuotas mínimas y máximas.",
     "componentes": [
       {"id": "FRU_RSA.1", "nombre": "Cuotas máximas", "desc": "Impone cuotas máximas de los recursos definidos que [cada usuario, grupo o sujetos] pueden usar [simultáneamente o en un periodo especificado]."},
       {"id": "FRU_RSA.2", "nombre": "Cuotas mínimas y máximas", "desc": "Además, garantiza una cantidad mínima de cada recurso definido disponible para su uso; jerárquico sobre FRU_RSA.1."}
     ]}
  ]
},
{
  "codigo": "FTA", "seccion": 17,
  "nombre": "Acceso al TOE", "nombreEn": "TOE access",
  "definicion": "Requisitos funcionales para controlar el establecimiento de la sesión del usuario con el TOE: límites de sesiones concurrentes, bloqueo y terminación de sesiones, rótulos de aviso, historial de acceso y denegación de sesiones.",
  "familias": [
    {"codigo": "FTA_LSA", "nombre": "Limitación del alcance de los atributos seleccionables", "nombreEn": "Limitation on scope of selectable attributes", "etiqueta": "",
     "resumen": "Restringe el alcance de los atributos de sesión disponibles para el usuario al establecer la sesión.",
     "componentes": [
       {"id": "FTA_LSA.1", "nombre": "Limitación del alcance de los atributos seleccionables", "desc": "Restringe el alcance de los atributos de sesión definidos en función de los atributos especificados."}
     ]},
    {"codigo": "FTA_MCS", "nombre": "Limitación de las sesiones concurrentes múltiples", "nombreEn": "Limitation on multiple concurrent sessions", "etiqueta": "",
     "resumen": "Limita el número de sesiones concurrentes que pertenecen al mismo usuario.",
     "componentes": [
       {"id": "FTA_MCS.1", "nombre": "Limitación básica de sesiones concurrentes múltiples", "desc": "Restringe el máximo de sesiones concurrentes por usuario e impone por defecto un límite definido."},
       {"id": "FTA_MCS.2", "nombre": "Limitación por atributo de usuario", "desc": "Además, aplica reglas según atributos del usuario para el máximo de sesiones; jerárquico sobre FTA_MCS.1."}
     ]},
    {"codigo": "FTA_SSL", "nombre": "Bloqueo y terminación de sesión", "nombreEn": "Session locking and termination", "etiqueta": "",
     "resumen": "Bloqueo y terminación de sesiones interactivas, iniciados por la TSF o por el propio usuario.",
     "componentes": [
       {"id": "FTA_SSL.1", "nombre": "Bloqueo de sesión iniciado por la TSF", "desc": "Tras un intervalo de inactividad definido, borra/protege los dispositivos de visualización y deshabilita su actividad hasta el desbloqueo, exigiendo los eventos definidos para desbloquear."},
       {"id": "FTA_SSL.2", "nombre": "Bloqueo de sesión iniciado por el usuario", "desc": "Permite al usuario bloquear su propia sesión interactiva (con las mismas condiciones de desbloqueo)."},
       {"id": "FTA_SSL.3", "nombre": "Terminación de sesión iniciada por la TSF", "desc": "Termina la sesión interactiva tras el intervalo de inactividad definido."},
       {"id": "FTA_SSL.4", "nombre": "Terminación de sesión iniciada por el usuario", "desc": "Permite al usuario terminar su propia sesión interactiva."}
     ]},
    {"codigo": "FTA_TAB", "nombre": "Rótulos de acceso al TOE", "nombreEn": "TOE access banners", "etiqueta": "",
     "resumen": "Muestra un mensaje de aviso configurable sobre el uso apropiado del TOE antes de iniciar la sesión.",
     "componentes": [
       {"id": "FTA_TAB.1", "nombre": "Rótulos de acceso al TOE por defecto", "desc": "Antes de establecer la sesión del usuario, muestra el mensaje definido de aviso informativo."}
     ]},
    {"codigo": "FTA_TAH", "nombre": "Historial de acceso al TOE", "nombreEn": "TOE access history", "etiqueta": "",
     "resumen": "Muestra al usuario, al iniciar sesión con éxito, el historial de intentos de acceso (exitosos y fallidos) a su cuenta.",
     "componentes": [
       {"id": "FTA_TAH.1", "nombre": "Historial de acceso al TOE", "desc": "Al establecer la sesión con éxito, muestra la [fecha, hora, método, ubicación] del último acceso exitoso y del último intento fallido, junto con el número de intentos fallidos desde el último éxito."}
     ]},
    {"codigo": "FTA_TSE", "nombre": "Establecimiento de sesiones al TOE", "nombreEn": "TOE session establishment", "etiqueta": "",
     "resumen": "Denegación del permiso de establecimiento de sesión con el TOE en función de atributos.",
     "componentes": [
       {"id": "FTA_TSE.1", "nombre": "Establecimiento de sesiones al TOE", "desc": "La TSF puede denegar el establecimiento de una sesión en función de los atributos definidos."}
     ]}
  ]
},
{
  "codigo": "FTP", "seccion": 18,
  "nombre": "Canal y ruta de confianza", "nombreEn": "Trusted path/channels",
  "definicion": "Ruta de confianza entre los usuarios y la TSF y canales de confianza entre la TSF y otros productos TI de confianza: comunicación lógicamente distinta, con identificación garantizada de sus extremos y protección de los datos transmitidos; incluye familias para los protocolos de comunicación habituales.",
  "familias": [
    {"codigo": "FTP_ITC", "nombre": "Canal de confianza inter-TSF", "nombreEn": "Inter-TSF trusted channel", "etiqueta": "",
     "resumen": "Canal de comunicación de confianza entre la TSF y otro producto TI de confianza.",
     "componentes": [
       {"id": "FTP_ITC.1", "nombre": "Canal de confianza inter-TSF", "desc": "Proporciona un canal lógicamente distinto de otros canales, con identificación garantizada de sus extremos y protección de los datos del canal contra modificación o divulgación; iniciado por la TSF o por el producto de confianza para las funciones definidas."}
     ]},
    {"codigo": "FTP_PRO", "nombre": "Protocolo de canal de confianza", "nombreEn": "Trusted channel protocol", "etiqueta": "Nueva en CC:2022",
     "resumen": "Establece un canal de confianza y lo usa para transferir datos de la TSF o del usuario de forma segura (modela protocolos como TLS/IPsec con sus roles y estándares).",
     "componentes": [
       {"id": "FTP_PRO.1", "nombre": "Protocolo de canal de confianza", "desc": "Implementa el protocolo definido actuando como el rol especificado, conforme a los estándares, reglas, opciones estáticas y configuraciones negociables definidas."},
       {"id": "FTP_PRO.2", "nombre": "Establecimiento del canal de confianza", "desc": "Establece un secreto compartido con su par mediante los mecanismos definidos, autentica al par (o se autentica ante él) y deriva las claves criptográficas mediante la función KDF definida."},
       {"id": "FTP_PRO.3", "nombre": "Protección de los datos del canal de confianza", "desc": "Protege los datos en tránsito contra la divulgación no autorizada (cifrado) y contra [modificación, borrado, inserción o repetición] mediante los mecanismos de integridad definidos."}
     ]},
    {"codigo": "FTP_TRP", "nombre": "Ruta de confianza", "nombreEn": "Trusted path", "etiqueta": "",
     "resumen": "Comunicación de confianza entre los usuarios (remotos o locales) y la TSF, requerible para cualquier interacción de seguridad (p. ej., la autenticación inicial).",
     "componentes": [
       {"id": "FTP_TRP.1", "nombre": "Ruta de confianza", "desc": "Proporciona una ruta lógicamente distinta con la TSF para usuarios [remotos/locales], con identificación garantizada de extremos y protección de los datos comunicados; puede iniciarse por el usuario o por la TSF y se exige para [la autenticación inicial u otros servicios definidos]."}
     ]}
  ]
}
];
