# Catálogo completo — Common Criteria Parte 2 · Requisitos Funcionales de Seguridad

> **Fuente:** Common Criteria for Information Technology Security Evaluation, Part 2: Security functional components — CC:2022 Revision 1 (CCMB-2022-11-002), noviembre de 2022  
> **Nota:** Resumen divulgativo en español del documento oficial CCMB-2022-11-002. No sustituye al texto normativo; para evaluaciones, consulte siempre el documento original (commoncriteriaportal.org).

**Totales del catálogo:** 11 clases · 74 familias · 156 componentes.

**Jerarquía oficial:** El catálogo se organiza en 3 niveles: CLASE (agrupación temática, código de 3 letras) → FAMILIA (tema dentro de la clase, código de 7 caracteres: clase + sufijo de 3 letras) → COMPONENTE (requisito evaluable, se numera CODE.1, CODE.2…; los componentes pueden ser jerárquicos: uno superior satisface lo exigido por otro inferior).

**Siglas:** **SFR** = Security Functional Requirement — requisito funcional de seguridad · **TSF** = TOE Security Functionality — función(es) de seguridad del TOE · **TOE** = Target of Evaluation — producto/sistema en evaluación · **SFP** = Security Functionality Policy — política de seguridad impuesta por la TSF

## Guía para volcar este contenido en H5P

1. **Herramienta recomendada: *Interactive Book*** — cada *Clase* es un capítulo de la pestaña 'Chapters'; el encabezado de la clase va en la página de portada del capítulo.
2. **Alternativa: *Accordion*** — cada *Clase* es un panel (title = código + nombre); el contenido del panel lleva la definición de la clase y, por cada *Familia*, un subtítulo con su lista de componentes.
3. Dentro de cada familia, los componentes se listan como viñetas con su **código jerárquico** (p. ej., `FDP_ACC.1`), nombre y descripción breve.
4. Las insignias indican: **Nueva en CC:2022** (familia/componente añadido respecto a CC v3.1), **Restaurada en CC:2022** (regresó al catálogo activo) y **Desusado** (componente obsoleto mantenido por compatibilidad).

---

## 1. FAU — Auditoría de seguridad (*Security audit*) · §8

**Definición de la clase:** Exige reconocer, registrar, almacenar y analizar la información relativa a actividades relevantes para la seguridad bajo control de la TSF, de modo que los registros de auditoría permitan determinar qué actividades ocurrieron y qué usuario es responsable de ellas.

*Contiene 6 familias y 16 componentes.*

### FAU_ARP — Respuesta automática de auditoría de seguridad (*Security audit automatic response*)

*Define la respuesta a tomar cuando se detectan eventos indicativos de una posible violación de seguridad.*

- **FAU_ARP.1 · Alarmas de seguridad** — La TSF debe ejecutar las acciones definidas [asignación: lista de acciones] al detectar una posible violación de seguridad (p. ej., bloquear cuenta, notificar a un administrador).

### FAU_GEN — Generación de datos de auditoría (*Security audit data generation*)

*Registra la ocurrencia de eventos de seguridad bajo control de la TSF: define niveles de auditoría, tipos de eventos auditables y el contenido mínimo de cada registro.*

- **FAU_GEN.1 · Generación de datos de auditoría** — Genera registros de los eventos auditables (arranque/parada de las funciones de auditoría, eventos según el nivel mínimo/básico/detallado, otros definidos) con fecha, hora, tipo de evento, identidad del sujeto y resultado (éxito/fallo).
- **FAU_GEN.2 · Asociación con la identidad del usuario** — Para eventos generados por usuarios identificados, asocia cada evento auditable con la identidad del usuario que lo causó.

### FAU_SAA — Análisis de auditoría de seguridad (*Security audit analysis*)

*Análisis automático de la actividad del sistema y de los datos de auditoría para detectar posibles o reales violaciones de seguridad (soporta capacidades de detección de intrusiones).*

- **FAU_SAA.1 · Análisis de posibles violaciones** — Aplica un conjunto de reglas al monitorear los eventos auditados e indica la existencia de una posible violación de los SFR.
- **FAU_SAA.2 · Detección de anomalías basada en perfiles** — Mantiene perfiles del uso histórico del sistema y una 'puntuación de sospecha' por usuario; alerta cuando la actividad se desvía de los patrones establecidos.
- **FAU_SAA.3 · Heurística de ataques simples** — Mantiene una representación interna de eventos-firma (subconjunto de eventos del sistema) que indican violaciones y los compara con la actividad del sistema.
- **FAU_SAA.4 · Heurística de ataques complejos** — Además de eventos-firma, mantiene secuencias de eventos representativas de escenarios de intrusión conocidos y detecta su ocurrencia.

### FAU_SAR — Revisión de auditoría de seguridad (*Security audit review*)

*Pone a disposición de usuarios autorizados herramientas para examinar la información de auditoría de forma comprensible.*

- **FAU_SAR.1 · Revisión de auditoría** — Permite a los usuarios autorizados leer la información de auditoría y la presenta en un formato interpretable.
- **FAU_SAR.2 · Revisión restringida** — Prohíbe el acceso de lectura a la auditoría a todo usuario salvo a los que recibieron autorización explícita.
- **FAU_SAR.3 · Revisión seleccionable** — Permite filtrar y/u ordenar los datos de auditoría según criterios con relaciones lógicas.

### FAU_SEL — Selección de eventos de auditoría (*Security audit event selection*)

*Permite decidir, durante la operación del TOE, qué eventos se auditan del conjunto de todos los eventos auditables.*

- **FAU_SEL.1 · Auditoría selectiva** — Selecciona los eventos a auditar según identidad de objeto, usuario, sujeto o host, tipo de evento u otros atributos definidos.

### FAU_STG — Almacenamiento de datos de auditoría (*Security audit data storage*)

*Crea y mantiene un rastro de auditoría seguro (ubicación, protección, disponibilidad y actuación ante pérdida de datos).*

- **FAU_STG.1 · Ubicación del almacenamiento de datos de auditoría** — Almacena los datos de auditoría generados en el propio TOE o los transmite a una entidad TI externa mediante un canal de confianza (según FTP_ITC).
- **FAU_STG.2 · Almacenamiento protegido de datos de auditoría** — Protege el rastro de auditoría contra el borrado no autorizado y previene o detecta modificaciones no autorizadas.
- **FAU_STG.3 · Garantía de disponibilidad de los datos de auditoría** — Además de proteger el rastro, garantiza conservar cierta cantidad de datos ante agotamiento del almacenamiento, fallo o ataque.
- **FAU_STG.4 · Acción ante posible pérdida de datos de auditoría** — Ejecuta acciones definidas cuando el almacenamiento de auditoría alcanza un límite predefinido (p. ej., avisar al administrador).
- **FAU_STG.5 · Prevención de la pérdida de datos de auditoría** — Define el comportamiento si el almacenamiento se llena: ignorar eventos, impedirlos (salvo los del usuario con derechos especiales) o sobrescribir los registros más antiguos.

## 2. FCO — Comunicación (*Communication*) · §9

**Definición de la clase:** Garantiza la identidad de las partes que participan en un intercambio de datos: prueba del origen (el emisor no puede negar haber enviado el mensaje) y prueba de la recepción (el receptor no puede negar haberlo recibido).

*Contiene 2 familias y 4 componentes.*

### FCO_NRO — No repudio del origen (*Non-repudiation of origin*)

*Proporciona evidencia de quién originó la información transmitida, de modo que el emisor no pueda negarlo.*

- **FCO_NRO.1 · Prueba selectiva del origen** — Genera evidencia de origen para la información transmitida a petición del originador, del receptor o de terceros autorizados, y permite verificarla.
- **FCO_NRO.2 · Prueba forzada del origen** — Genera la evidencia de origen en todo momento (obligatoria), no solo a petición; jerárquico sobre FCO_NRO.1.

### FCO_NRR — No repudio de la recepción (*Non-repudiation of receipt*)

*Proporciona evidencia de quién recibió la información, de modo que el receptor no pueda negar haberla recibido.*

- **FCO_NRR.1 · Prueba selectiva de la recepción** — Genera evidencia de recepción a petición del originador, del receptor o de terceros autorizados, y permite verificarla.
- **FCO_NRR.2 · Prueba forzada de la recepción** — Genera la evidencia de recepción siempre; jerárquico sobre FCO_NRR.1.

## 3. FCS — Soporte criptográfico (*Cryptographic support*) · §10

**Definición de la clase:** Aplica cuando el TOE implementa funciones criptográficas (hardware, firmware y/o software) para objetivos como identificación y autenticación, no repudio, ruta/canal de confianza o separación de datos. Se compone de 4 familias: gestión de claves, operación criptográfica y generación aleatoria (RBG y RNG).

*Contiene 4 familias y 14 componentes.*

### FCS_CKM — Gestión de claves criptográficas (*Cryptographic key management*)

*Ciclo de vida de las claves criptográficas: generación, distribución, acceso, derivación y destrucción, siempre conforme a estándares especificados.*

- **FCS_CKM.1 · Generación de claves criptográficas** — Genera claves según el algoritmo y los tamaños de clave especificados, que cumplen una lista de estándares definida.
- **FCS_CKM.2 · Distribución de claves criptográficas** — Distribuye claves según el método de distribución especificado, conforme a los estándares definidos.
- **FCS_CKM.3 · Acceso a claves criptográficas** — Realiza el tipo de acceso a claves especificado (almacenamiento, recuperación, exportación…) conforme a un método y estándares definidos.
- **FCS_CKM.4 · Destrucción de claves criptográficas** ⚠️ **[Desusado]** — ⚠ Desusado en CC:2022: reemplazado por FCS_CKM.6 (destrucción con control de momento y evento). Se conserva por compatibilidad histórica.
- **FCS_CKM.5 · Derivación de claves criptográficas** — Deriva claves a partir de parámetros de entrada según un algoritmo de derivación (KDF) y tamaños/estándares especificados.
- **FCS_CKM.6 · Momento y evento de destrucción de claves** — Destruye claves y material de clave cuando ya no se necesitan (u otra circunstancia definida), con el método de destrucción especificado.

### FCS_COP — Operación criptográfica (*Cryptographic operation*)

*Exige que las operaciones criptográficas (cifrado/descifrado, firma/verificación, hash, checksums, acuerdo de claves…) se realicen con algoritmos y tamaños de clave especificados.*

- **FCS_COP.1 · Operación criptográfica** — Realiza las operaciones criptográficas definidas conforme a un algoritmo y tamaños de clave especificados que cumplen una lista de estándares.

### FCS_RBG — Generación de bits aleatorios (*Random bit generation*) **[Nueva en CC:2022]**

*Requisitos para generadores de bits aleatorios (RBG): servicio determinista tras sembrado, fuentes de entropía (externas/internas) y exposición como servicio.*

- **FCS_RBG.1 · Generación de bits aleatorios (RBG)** — Realiza el servicio RBG determinista según el algoritmo y estándares especificados, con siembra inicial y actualización del estado (reseeding/reinstancia) en las situaciones definidas.
- **FCS_RBG.2 · Generación de bits aleatorios (siembra externa)** — Acepta una entrada mínima de longitud definida desde una interfaz TSF con el fin de sembrar el RBG.
- **FCS_RBG.3 · Generación de bits aleatorios (siembra interna — fuente única)** — Siembra el RBG con una fuente de ruido TSF (software o hardware) que aporta al menos el número de bits de entropía mínima definido.
- **FCS_RBG.4 · Generación de bits aleatorios (siembra interna — múltiples fuentes)** — Siembra el RBG usando varias fuentes de ruido TSF (software y/o hardware) en la cantidad definida.
- **FCS_RBG.5 · Generación de bits aleatorios (combinación de fuentes de ruido)** — Aplica una operación de combinación a las salidas de las fuentes de ruido o a las entradas de siembra para crear la entrada de entropía, con un mínimo de bits de entropía definido.
- **FCS_RBG.6 · Servicio de generación de bits aleatorios** — Expone la salida del RBG como servicio a entidades fuera del TOE mediante una interfaz de hardware, software u otro tipo definido.

### FCS_RNG — Generación de números aleatorios (*Generation of random numbers*)

*Requisitos de CALIDAD para la generación de números aleatorios destinados a fines criptográficos.*

- **FCS_RNG.1 · Generación de números aleatorios** — Proporciona un generador (físico, no físico verdadero, determinista, híbrido físico o híbrido determinista) con las capacidades de seguridad definidas, entregando salida que cumple una métrica de calidad.

## 4. FDP — Protección de los datos del usuario (*User data protection*) · §11

**Definición de la clase:** La clase más extensa del catálogo: especifica políticas y funciones para proteger los datos del usuario dentro del TOE, durante su importación/exportación, su almacenamiento y su transferencia entre TSFs, así como los atributos de seguridad asociados. Sus familias se organizan en cuatro grupos (políticas de protección SFP, formas de protección de datos, importación/exportación e intercambio, y datos almacenados/residuales).

*Contiene 15 familias y 34 componentes.*

### FDP_ACC — Política de control de acceso (*Access control policy*)

*Nombra las políticas de control de acceso (SFP) y define su alcance de control: sujetos, objetos y operaciones cubiertos.*

- **FDP_ACC.1 · Control de acceso por subconjuntos** — Impone la SFP nombrada sobre un subconjunto de sujetos, objetos y operaciones definidos por el autor del PP/ST.
- **FDP_ACC.2 · Control de acceso completo** — Impone la SFP sobre todos los sujetos y objetos y garantiza que toda operación entre ellos esté cubierta por una SFP.

### FDP_ACF — Funciones de control de acceso (*Access control functions*)

*Define las reglas concretas que implementan la SFP de control de acceso nombrada en FDP_ACC.*

- **FDP_ACF.1 · Control de acceso basado en atributos de seguridad** — Impone la SFP basándose en atributos de seguridad de sujetos y objetos; define reglas que permiten o niegan explícitamente el acceso.

### FDP_DAU — Autenticación de datos (*Data authentication*)

*Garantiza la validez de datos 'estáticos' (almacenados, no en tránsito) mediante evidencia verificable, a diferencia de FAU (datos de eventos).*

- **FDP_DAU.1 · Autenticación básica de datos** — Genera evidencia que garantiza la validez de los objetos o tipos de información definidos y permite verificarla.
- **FDP_DAU.2 · Autenticación de datos con identidad del garante** — Además, la evidencia permite identificar al usuario que la generó (jerárquico sobre FDP_DAU.1).

### FDP_ETC — Exportación desde el TOE (*Export from the TOE*)

*Exportación mediada por la TSF de datos del usuario fuera del TOE, con o sin sus atributos de seguridad.*

- **FDP_ETC.1 · Exportación sin atributos de seguridad** — Exporta los datos controlados por la SFP fuera del TOE sin los atributos de seguridad asociados a esos datos.
- **FDP_ETC.2 · Exportación con atributos de seguridad** — Exporta los datos junto con sus atributos, garantizando su asociación inequívoca, su interpretación según el propietario y reglas adicionales de exportación.

### FDP_IFC — Política de control de flujo de información (*Information flow control policy*)

*Nombra las SFP de flujo de información y define su alcance (sujetos, información y operaciones que provocan el flujo).*

- **FDP_IFC.1 · Control de flujo de información por subconjuntos** — Impone la SFP de flujo nombrada sobre un subconjunto de sujetos, información y operaciones definidos.
- **FDP_IFC.2 · Control de flujo de información completo** — Impone la SFP sobre todos los sujetos e información y garantiza que toda operación de flujo esté cubierta.

### FDP_IFF — Funciones de control de flujo de información (*Information flow control functions*)

*Reglas que implementan la SFP de flujo nombrada en FDP_IFC, incluido el tratamiento de los flujos ilícitos (canales encubiertos).*

- **FDP_IFF.1 · Atributos de seguridad simples** — Controla los flujos de información según atributos de sujetos e información, con reglas adicionales que autorizan o niegan flujos explícitamente.
- **FDP_IFF.2 · Atributos de seguridad jerárquicos** — Además, exige una función de ordenación entre atributos válidos (p. ej., niveles de confidencialidad con mínimo común superior); jerárquico sobre FDP_IFF.1.
- **FDP_IFF.3 · Flujos de información ilícitos limitados** — Limita la capacidad de los flujos ilícitos (canales encubiertos) definidos a una capacidad máxima especificada.
- **FDP_IFF.4 · Eliminación parcial de flujos de información ilícitos** — Además de limitar, previene los tipos de flujos ilícitos definidos; jerárquico sobre FDP_IFF.3.
- **FDP_IFF.5 · Sin flujos de información ilícitos** — Garantiza que no existan flujos ilícitos que evadan la SFP nombrada; jerárquico sobre FDP_IFF.4.
- **FDP_IFF.6 · Monitoreo de flujos de información ilícitos** — Monitorea los tipos de flujos ilícitos definidos cuando exceden la capacidad máxima especificada.

### FDP_IRC — Control de retención de información (*Information Retention Control*) **[Nueva en CC:2022]**

*Gestión segura de los datos que el TOE ya no necesita: borrado irreversible e inrastreable y acceso controlado entre la liberación y el borrado.*

- **FDP_IRC.1 · Control de retención de información** — Aplica una política de borrado de información a los objetos definidos: los elimina de forma irreversible e inrastreable al terminar las operaciones definidas, y garantiza que no sean accesibles entre su liberación y su borrado.

### FDP_ITC — Importación desde fuera del TOE (*Import from outside of the TOE*)

*Importación mediada por la TSF de datos del usuario hacia el TOE, con o sin atributos de seguridad.*

- **FDP_ITC.1 · Importación sin atributos de seguridad** — Importa datos controlados por la SFP ignorando cualquier atributo de seguridad asociado, y aplica reglas adicionales de importación.
- **FDP_ITC.2 · Importación con atributos de seguridad** — Importa datos usando los atributos asociados, garantizando la asociación inequívoca y la interpretación correcta de dichos atributos (con canal de confianza o ruta fiable).

### FDP_ITT — Transferencia interna en el TOE (*Internal TOE transfer*)

*Protege los datos del usuario cuando se transmiten entre partes físicamente separadas del TOE a través de un canal interno.*

- **FDP_ITT.1 · Protección básica de la transferencia interna** — Impone la SFP para prevenir la [divulgación, modificación o pérdida de uso] de los datos del usuario durante la transmisión entre partes separadas del TOE.
- **FDP_ITT.2 · Separación de la transmisión por atributo** — Además, separa los datos controlados por la SFP durante la transmisión según los valores de los atributos definidos.
- **FDP_ITT.3 · Monitoreo de integridad** — Monitorea los datos transmitidos para detectar los errores de integridad definidos y ejecuta la acción especificada al detectarlos.
- **FDP_ITT.4 · Monitoreo de integridad basado en atributos** — Monitorea la integridad y, además, usa los atributos definidos para separar los canales de transmisión; jerárquico sobre FDP_ITT.3.

### FDP_RIP — Protección de la información residual (*Residual information protection*)

*Garantiza que el contenido anterior de un recurso no quede disponible cuando el recurso se desasigna y se reasigna a otro objeto.*

- **FDP_RIP.1 · Protección de información residual por subconjuntos** — Hace indisponible el contenido previo de un recurso al asignarlo/desasignarlo para los objetos definidos.
- **FDP_RIP.2 · Protección completa de la información residual** — Lo mismo, pero para TODOS los objetos; jerárquico sobre FDP_RIP.1.

### FDP_ROL — Retroceso (*Rollback*)

*Permite deshacer la última operación o una serie de operaciones (dentro de un límite) y volver a un estado anterior conocido, preservando la integridad de los datos.*

- **FDP_ROL.1 · Retroceso básico** — Permite deshacer las operaciones definidas sobre la información/objetos, dentro del límite especificado.
- **FDP_ROL.2 · Retroceso avanzado** — Permite deshacer TODAS las operaciones sobre los objetos definidos; jerárquico sobre FDP_ROL.1.

### FDP_SDC — Confidencialidad de los datos almacenados (*Stored data confidentiality*) **[Nueva en CC:2022]**

*Protege la confidencialidad de los datos del usuario mientras están almacenados en zonas de memoria bajo control de la TSF (solo accesibles por las interfaces especificadas).*

- **FDP_SDC.1 · Confidencialidad de los datos almacenados** — Garantiza la confidencialidad de los datos del usuario [todos o los definidos] mientras están almacenados en memoria temporal, persistente o cualquier memoria.
- **FDP_SDC.2 · Confidencialidad de los datos almacenados con método dedicado** — Confidencialidad según las características de los datos y sin intervención del usuario (depende de FCS_COP.1, p. ej., mediante cifrado).

### FDP_SDI — Integridad de los datos almacenados (*Stored data integrity*)

*Protege los datos del usuario de errores de integridad mientras están almacenados en contenedores controlados por la TSF.*

- **FDP_SDI.1 · Monitoreo de la integridad de los datos almacenados** — Monitorea los datos almacenados para detectar los errores de integridad definidos en todos los objetos, según los atributos especificados.
- **FDP_SDI.2 · Monitoreo de integridad de datos almacenados y acción** — Además, ejecuta la acción definida al detectar un error de integridad; jerárquico sobre FDP_SDI.1.

### FDP_UCT — Protección de la confidencialidad en la transferencia inter-TSF de datos del usuario (*Inter-TSF user data confidentiality transfer protection*)

*Confidencialidad de los datos del usuario cuando se transfieren por un canal externo entre el TOE y otro producto TI de confianza.*

- **FDP_UCT.1 · Confidencialidad básica del intercambio de datos** — Transmite o recibe datos del usuario de forma protegida contra la divulgación no autorizada, impidiendo la SFP y usando canal de confianza (FTP_ITC) o ruta fiable (FTP_TRP).

### FDP_UIT — Protección de la integridad en la transferencia inter-TSF de datos del usuario (*Inter-TSF user data integrity transfer protection*)

*Integridad de los datos del usuario en tránsito entre el TOE y otro producto TI de confianza, con mecanismos de recuperación ante errores detectados.*

- **FDP_UIT.1 · Integridad del intercambio de datos** — Transmite/recibe datos protegidos contra errores de [modificación, borrado, inserción o repetición] y determina, al recibirlos, si ocurrió alguno.
- **FDP_UIT.2 · Recuperación del intercambio por el emisor** — Permite recuperarse de los errores definidos con la ayuda del producto TI de confianza emisor.
- **FDP_UIT.3 · Recuperación del intercambio por el receptor** — Se recupera de los errores definidos sin ayuda del emisor; jerárquico sobre FDP_UIT.2.

## 5. FIA — Identificación y autenticación (*Identification and authentication*) · §12

**Definición de la clase:** Establece y verifica la identidad reclamada de los usuarios: identificación, autenticación, atributos de usuario, gestión de fallos de autenticación, secretos y asociación usuario-sujeto. La identificación y autenticación correctas son prerrequisito para que las demás clases de requisitos sean efectivas.

*Contiene 7 familias y 15 componentes.*

### FIA_AFL — Fallos de autenticación (*Authentication failures*)

*Gestión de los intentos fallidos de autenticación: detección de umbrales y acciones correctivas.*

- **FIA_AFL.1 · Manejo de fallos de autenticación** — Detecta cuando ocurre el número definido de intentos fallidos de autenticación y ejecuta las acciones definidas (p. ej., deshabilitar la cuenta).

### FIA_API — Prueba de identidad por autenticación (*Authentication proof of identity*) **[Restaurada en CC:2022]**

*El TOE demuestra SU PROPIA identidad ante una entidad externa del entorno TI, permitiendo verificar el TOE.*

- **FIA_API.1 · Prueba de identidad por autenticación** — Proporciona el mecanismo de autenticación definido para probar la identidad de la entidad especificada ante una entidad externa, con las propiedades requeridas.

### FIA_ATD — Definición de atributos de usuario (*User attribute definition*)

*Atributos de seguridad de cada usuario (además de su identidad) que la TSF usa para tomar decisiones de seguridad.*

- **FIA_ATD.1 · Definición de atributos de usuario** — Mantiene la lista definida de atributos de seguridad pertenecientes a usuarios individuales.

### FIA_SOS — Especificación de secretos (*Specification of secrets*)

*Métricas de calidad para los secretos (contraseñas, claves…): verificación de los proporcionados y generación por parte de la TSF.*

- **FIA_SOS.1 · Verificación de secretos** — Proporciona un mecanismo para verificar que los secretos cumplen la métrica de calidad definida.
- **FIA_SOS.2 · Generación de secretos por la TSF** — Genera secretos que cumplen la métrica de calidad definida y puede exigir su uso en las funciones TSF especificadas.

### FIA_UAU — Autenticación de usuarios (*User authentication*)

*Mecanismos de autenticación soportados por la TSF, cuándo se exige autenticarse y cómo se protege el proceso.*

- **FIA_UAU.1 · Momento de la autenticación** — Permite ejecutar las acciones TSF definidas antes de autenticarse; exige autenticación exitosa para cualquier otra acción mediada por la TSF.
- **FIA_UAU.2 · Autenticación del usuario antes de cualquier acción** — Exige autenticación exitosa del usuario antes de permitir cualquier acción mediada por la TSF; jerárquico sobre FIA_UAU.1.
- **FIA_UAU.3 · Autenticación infalsificable** — Detecta o previene el uso de datos de autenticación falsificados o copiados de otro usuario de la TSF.
- **FIA_UAU.4 · Mecanismos de autenticación de un solo uso** — Previene la reutilización de los datos de autenticación de los mecanismos identificados (p. ej., OTP).
- **FIA_UAU.5 · Múltiples mecanismos de autenticación** — Proporciona varios mecanismos de autenticación y autentica a cada usuario según las reglas que describen su combinación.
- **FIA_UAU.6 · Re-autenticación** — Re-autentica al usuario bajo las condiciones definidas (p. ej., tras un bloqueo o un cambio de rol).
- **FIA_UAU.7 · Retroalimentación protegida de la autenticación** — Durante la autenticación solo muestra la retroalimentación definida (p. ej., asteriscos en lugar del texto).

### FIA_UID — Identificación de usuarios (*User identification*)

*Condiciones bajo las que el usuario debe identificarse antes de realizar acciones mediadas por la TSF.*

- **FIA_UID.1 · Momento de la identificación** — Permite ejecutar las acciones TSF definidas antes de identificarse; exige identificación exitosa para el resto de acciones.
- **FIA_UID.2 · Identificación del usuario antes de cualquier acción** — Exige identificación exitosa antes de permitir cualquier acción mediada por la TSF; jerárquico sobre FIA_UID.1.

### FIA_USB — Asociación usuario-sujeto (*User-subject binding*)

*Asociación de los atributos de seguridad del usuario autenticado con los sujetos que actúan en su nombre.*

- **FIA_USB.1 · Asociación usuario-sujeto** — Asocia los atributos de seguridad del usuario con los sujetos que actúan en su nombre, con reglas para la asociación inicial y para los cambios posteriores.

## 6. FMT — Gestión de la seguridad (*Security management*) · §13

**Definición de la clase:** Especifica la gestión de los distintos aspectos de la TSF: atributos de seguridad, datos de la TSF y funciones de la TSF, así como los roles de gestión y su interacción. Objetivos: gestión de datos TSF, de atributos, de funciones y definición de roles.

*Contiene 8 familias y 16 componentes.*

### FMT_LIM — Capacidades y disponibilidad limitadas (*Limited capabilities and availability*) **[Nueva en CC:2022]**

*Limita por diseño las capacidades y la disponibilidad de la TSF (procede de los perfiles de tarjetas inteligentes) para facilitar los análisis de ataque.*

- **FMT_LIM.1 · Capacidades limitadas** — La TSF limita sus capacidades para que, junto con FMT_LIM.2, se imponga la política de capacidad y disponibilidad limitada definida.
- **FMT_LIM.2 · Disponibilidad limitada** — La TSF está diseñada de forma que limita su disponibilidad para imponer la misma política conjuntamente con FMT_LIM.1.

### FMT_MOF — Gestión de las funciones en la TSF (*Management of functions in TSF*)

*Permite a los roles autorizados gestionar el comportamiento de las funciones de seguridad.*

- **FMT_MOF.1 · Gestión del comportamiento de las funciones de seguridad** — Restringe a los roles autorizados la capacidad de [determinar el comportamiento de, deshabilitar, habilitar, modificar el comportamiento de] las funciones definidas.

### FMT_MSA — Gestión de los atributos de seguridad (*Management of security attributes*)

*Gestión (consulta, modificación, valores por defecto y herencia) de los atributos de seguridad por parte de roles autorizados.*

- **FMT_MSA.1 · Gestión de los atributos de seguridad** — Restringe a los roles autorizados la capacidad de [cambiar el valor por defecto, consultar, modificar, borrar u otras operaciones] sobre los atributos definidos.
- **FMT_MSA.2 · Atributos de seguridad seguros** — Garantiza que solo se aceptan valores seguros para los atributos de seguridad definidos.
- **FMT_MSA.3 · Inicialización estática de atributos** — Proporciona valores por defecto [restrictivos/permisivos] para los atributos usados por la SFP y permite a los roles autorizados especificar valores iniciales alternativos.
- **FMT_MSA.4 · Herencia de los valores de los atributos de seguridad** — Garantiza que los atributos definidos heredan sus valores de acuerdo con la relación de herencia especificada (p. ej., de un contenedor o plantilla a los objetos que crea).

### FMT_MTD — Gestión de los datos de la TSF (*Management of TSF data*)

*Gestión de los datos de la TSF (p. ej., listas de auditoría, umbrales): operaciones, límites y valores seguros.*

- **FMT_MTD.1 · Gestión de los datos de la TSF** — Restringe a los roles autorizados la capacidad de [modificar, consultar, borrar, limpiar u otras operaciones] sobre los datos TSF definidos.
- **FMT_MTD.2 · Gestión de los límites sobre los datos de la TSF** — Restringe la especificación de los límites de los datos TSF y ejecuta las acciones definidas cuando los datos alcanzan o superan dichos límites.
- **FMT_MTD.3 · Datos de la TSF seguros** — Garantiza que solo se aceptan valores seguros para los datos TSF definidos.

### FMT_REV — Revocación (*Revocation*)

*Revocación de atributos de seguridad (p. ej., credenciales o permisos) de usuarios, sujetos, objetos y otros recursos.*

- **FMT_REV.1 · Revocación** — Restringe a los roles autorizados la capacidad de revocar los atributos definidos asociados a [usuarios, sujetos, objetos, otros recursos], aplicando las reglas de revocación especificadas.

### FMT_SAE — Caducidad de los atributos de seguridad (*Security attribute expiration*)

*Exige límites de validez temporal para los atributos de seguridad y acciones al expirar (depende de FPT_STM.1).*

- **FMT_SAE.1 · Autorización con validez limitada en el tiempo** — Permite especificar el tiempo de caducidad de los atributos definidos y ejecuta las acciones definidas una vez vencido el plazo.

### FMT_SMF — Especificación de las funciones de gestión (*Specification of Management Functions*)

*Define las funciones de gestión que la TSF debe poder realizar (atributos, auditoría, copia de seguridad…); trabaja junto con las demás familias de FMT.*

- **FMT_SMF.1 · Especificación de las funciones de gestión** — La TSF debe poder realizar la lista definida de funciones de gestión.

### FMT_SMR — Roles de gestión de la seguridad (*Security management roles*)

*Controla la asignación de roles a usuarios y las condiciones para asumirlos (separación de capacidades).*

- **FMT_SMR.1 · Roles de seguridad** — La TSF mantiene los roles autorizados definidos y es capaz de asociar usuarios con roles.
- **FMT_SMR.2 · Restricciones sobre los roles de seguridad** — Además, garantiza que se cumplen las condiciones definidas para los distintos roles; jerárquico sobre FMT_SMR.1.
- **FMT_SMR.3 · Asumir roles** — Exige una petición explícita para asumir los roles definidos.

## 7. FPR — Privacidad (*Privacy*) · §14

**Definición de la clase:** Protege al usuario contra el descubrimiento y el uso indebido de su identidad por otros usuarios: anonimato, seudonimato, no vinculación (unlinkability) y no observabilidad.

*Contiene 4 familias y 10 componentes.*

### FPR_ANO — Anonimato (*Anonymity*)

*Garantiza que un usuario pueda usar recursos o servicios sin que otros usuarios determinen su identidad real.*

- **FPR_ANO.1 · Anonimato** — Garantiza que el conjunto definido de usuarios/sujetos no puede determinar el nombre real del usuario vinculado a los sujetos, operaciones u objetos definidos.
- **FPR_ANO.2 · Anonimato sin información solicitada** — Además, ofrece los servicios definidos sin solicitar ninguna referencia al nombre real del usuario; jerárquico sobre FPR_ANO.1.

### FPR_PSE — Seudonimato (*Pseudonymity*)

*El usuario usa recursos sin revelar su identidad, pero sigue siendo responsable (alias) de ese uso.*

- **FPR_PSE.1 · Seudonimato** — Permite el uso sin revelar el nombre real, mediante el número definido de alias que la TSF determina o acepta y verifica conforme a la métrica de alias definida.
- **FPR_PSE.2 · Seudonimato reversible** — Un usuario autorizado puede determinar la identidad real a partir del alias solo bajo las condiciones definidas; jerárquico sobre FPR_PSE.1.
- **FPR_PSE.3 · Seudonimato con alias** — El alias puede ser idéntico a uno proporcionado previamente bajo condiciones definidas; si no, debe ser ajeno a los alias previos; jerárquico sobre FPR_PSE.1.

### FPR_UNL — No vinculación (*Unlinkability*)

*Las entidades externas no pueden rastrear los vínculos entre operaciones, aunque existan.*

- **FPR_UNL.1 · No vinculación de las operaciones** — Garantiza que el conjunto definido de entidades/operaciones no puede determinar si otras operaciones fueron causadas por el mismo usuario o están relacionadas según lo definido.

### FPR_UNO — No observabilidad (*Unobservability*)

*El usuario puede usar un recurso o servicio sin que terceros puedan observar que se está usando.*

- **FPR_UNO.1 · No observabilidad** — Los usuarios/sujetos definidos no pueden observar la operación definida sobre los objetos por parte de los usuarios/sujetos protegidos.
- **FPR_UNO.2 · Asignación de la información que impacta la no observabilidad** — Reparte la información relacionada con la no observabilidad entre las distintas partes del TOE de forma que se mantengan las condiciones definidas; jerárquico sobre FPR_UNO.1.
- **FPR_UNO.3 · No observabilidad sin información solicitada** — Ofrece los servicios definidos sin solicitar ninguna referencia a la información de privacidad definida.
- **FPR_UNO.4 · Observabilidad por usuario autorizado** — Proporciona al conjunto definido de usuarios autorizados la capacidad de observar el uso de los recursos/servicios definidos.

## 8. FPT — Protección de las funciones de seguridad del TOE (TSF) (*Protection of the TSF*) · §15

**Definición de la clase:** Relacionada con la integridad y gestión de los MECANISMOS que constituyen la TSF (su implementación, sus datos y las entidades externas con las que interactúa), garantizando que las SFP no puedan ser manipuladas ni evitadas. Es el contrapunto de FDP: mientras FDP protege los datos del usuario, FPT protege los datos y funciones de la propia TSF.

*Contiene 16 familias y 26 componentes.*

### FPT_EMS — Emisiones del TOE (*TOE emanation*) **[Nueva en CC:2022]**

*Controla las emisiones del TOE (ondas, señales, radiación electromagnética) que podrían permitir el acceso a datos de la TSF o del usuario.*

- **FPT_EMS.1 · Emisión de datos de la TSF y del usuario** — Garantiza que el TOE no emite emisiones sobre su superficie de ataque en cantidad que permita acceder a los datos de la TSF o del usuario, según lo especificado en la Tabla 1 del documento.

### FPT_FLS — Fallo seguro (*Fail secure*)

*Preservación de un estado seguro cuando la TSF falla.*

- **FPT_FLS.1 · Fallo con preservación del estado seguro** — Preserva un estado seguro cuando ocurren los tipos de fallo de la TSF definidos.

### FPT_INI — Inicialización de la TSF (*TSF initialization*) **[Nueva en CC:2022]**

*Inicialización de la TSF por una función dedicada que garantiza un estado operativo correcto y seguro.*

- **FPT_INI.1 · Inicialización de la TSF** — Proporciona una función de inicialización autoprotegida (integridad y autenticidad) que verifica las propiedades definidas (Tabla 2) antes de establecer la TSF en su estado inicial seguro.

### FPT_ITA — Disponibilidad de los datos de la TSF exportados (*Availability of exported TSF data*)

*Disponibilidad de los datos de la TSF compartidos con otro producto TI de confianza.*

- **FPT_ITA.1 · Disponibilidad inter-TSF dentro de una métrica definida** — Garantiza la disponibilidad de los tipos de datos TSF proporcionados a otro producto TI de confianza, dentro de la métrica y condiciones definidas.

### FPT_ITC — Confidencialidad de los datos de la TSF exportados (*Confidentiality of exported TSF data*)

*Protección contra la divulgación no autorizada de los datos de la TSF durante su transmisión entre TSFs.*

- **FPT_ITC.1 · Confidencialidad inter-TSF durante la transmisión** — Protege todos los datos de la TSF transmitidos a otro producto TI de confianza contra la divulgación no autorizada durante la transmisión.

### FPT_ITI — Integridad de los datos de la TSF exportados (*Integrity of exported TSF data*)

*Protección contra la modificación no autorizada de los datos de la TSF durante su transmisión entre TSFs.*

- **FPT_ITI.1 · Detección inter-TSF de la modificación** — Detecta modificaciones de todos los datos TSF transmitidos según la métrica definida, verifica su integridad y ejecuta la acción definida si se detectan.
- **FPT_ITI.2 · Detección y corrección inter-TSF de la modificación** — Además de detectar, es capaz de corregir la modificación de los datos TSF transmitidos; jerárquico sobre FPT_ITI.1.

### FPT_ITT — Transferencia interna de datos de la TSF (*Internal TOE TSF data transfer*)

*Protección de los datos de la TSF cuando se transfieren entre partes separadas del TOE por un canal interno.*

- **FPT_ITT.1 · Protección básica de la transferencia interna de datos de la TSF** — Protege los datos de la TSF contra [divulgación o modificación] cuando se transmiten entre partes separadas del TOE.
- **FPT_ITT.2 · Separación de la transferencia de datos de la TSF** — Además, separa los datos del usuario de los datos de la TSF durante su transmisión interna; jerárquico sobre FPT_ITT.1.
- **FPT_ITT.3 · Monitoreo de la integridad de los datos de la TSF** — Detecta [modificación, sustitución, reordenamiento o borrado] de los datos TSF transmitidos internamente y ejecuta la acción definida.

### FPT_PHP — Protección física de la TSF (*TSF physical protection*)

*Restricción del acceso físico no autorizado a la TSF y disuasión/resistencia ante su modificación o sustitución física.*

- **FPT_PHP.1 · Detección pasiva de ataques físicos** — Proporciona detección inequívoca de la manipulación física que puede comprometer la TSF y capacidad para determinar si ocurrió.
- **FPT_PHP.2 · Notificación de ataques físicos** — Además, monitorea los dispositivos/elementos definidos y notifica a un usuario o rol designado cuando ocurre manipulación física; jerárquico sobre FPT_PHP.1.
- **FPT_PHP.3 · Resistencia a ataques físicos** — Resiste los escenarios de manipulación física definidos respondiendo automáticamente de modo que los SFR sigan siempre siendo impuestos.

### FPT_RCV — Recuperación de confianza (*Trusted recovery*) **[Nueva en CC:2022]**

*Garantiza que el TOE arranca sin compromiso de protección y se recupera sin compromiso tras discontinuidades de operación.*

- **FPT_RCV.1 · Recuperación manual** — Tras los fallos/discontinuidades definidos, la TSF entra en modo de mantenimiento con capacidad de volver a un estado seguro.
- **FPT_RCV.2 · Recuperación automática** — Cuando la recuperación automática no es posible, entra en modo de mantenimiento; y para los fallos definidos asegura el regreso al estado seguro con procedimientos automáticos.
- **FPT_RCV.3 · Recuperación automática sin pérdida indebida** — Además, la recuperación no excede la pérdida cuantificada definida de datos TSF u objetos, y permite determinar qué objetos se recuperaron; jerárquico sobre FPT_RCV.2.
- **FPT_RCV.4 · Recuperación de funciones** — Para las funciones y escenarios de fallo definidos, la función se completa con éxito o se recupera a un estado consistente y seguro.

### FPT_RPL — Detección de repetición (*Replay detection*)

*Detección de ataques de repetición (replay) contra varias entidades y acciones correctivas.*

- **FPT_RPL.1 · Detección de repetición** — Detecta la repetición para las entidades definidas y ejecuta las acciones específicas cuando la detecta.

### FPT_SSP — Protocolo de sincronía de estados (*State synchrony protocol*) **[Nueva en CC:2022]**

*Protocolo de confianza para sincronizar el estado entre partes distribuidas del TOE tras acciones relevantes para la seguridad.*

- **FPT_SSP.1 · Acuse de recibo simple de confianza** — Acusa, cuando otra parte de la TSF lo solicita, la recepción de una transmisión de datos TSF no modificada.
- **FPT_SSP.2 · Acuse de recibo mutuo de confianza** — Además, garantiza que las partes relevantes conocen el estado correcto de los datos transmitidos mediante acuses de recibo; jerárquico sobre FPT_SSP.1.

### FPT_STM — Marcas de tiempo (*Time stamps*)

*Requisitos para una función de marcas de tiempo fiable dentro del TOE (clave para la auditoría).*

- **FPT_STM.1 · Marcas de tiempo fiables** — La TSF puede proporcionar marcas de tiempo fiables.
- **FPT_STM.2 · Fuente de tiempo** — Permite al usuario autorizado por la política de seguridad [establecer la hora y/o configurar otra fuente de tiempo].

### FPT_TDC — Consistencia de datos de la TSF inter-TSF (*Inter-TSF TSF data consistency*)

*Interpretación consistente de los datos de la TSF compartidos con otro producto TI de confianza (p. ej., atributos de seguridad).*

- **FPT_TDC.1 · Consistencia básica de datos de la TSF inter-TSF** — Proporciona la capacidad de interpretar consistentemente los tipos de datos TSF compartidos, aplicando las reglas de interpretación definidas.

### FPT_TEE — Prueba de entidades externas (*Testing of external entities*) **[Nueva en CC:2022]**

*La TSF ejecuta pruebas sobre entidades externas (plataformas, sistemas operativos, IDS, servidores…), no sobre usuarios humanos.*

- **FPT_TEE.1 · Prueba de entidades externas** — Ejecuta un conjunto de pruebas [durante el arranque, periódicamente, a petición de un usuario autorizado u otras condiciones] para verificar las propiedades definidas de las entidades externas y ejecuta las acciones definidas si fallan.

### FPT_TRC — Consistencia de la replicación de datos de la TSF interna al TOE (*Internal TOE TSF data replication consistency*) **[Nueva en CC:2022]**

*Consistencia de los datos de la TSF cuando se replican entre las partes internas del TOE (p. ej., tras caídas de las conexiones internas).*

- **FPT_TRC.1 · Consistencia TSF interna** — Garantiza que los datos TSF replicados entre partes del TOE son consistentes y, ante desconexiones, los sincroniza al reconectar antes de procesar funciones que dependan de ellos.

### FPT_TST — Autoprueba de la TSF (*TSF self-test*)

*Autopruebas de la TSF (interfaces, operaciones aritméticas críticas…) para demostrar su correcto funcionamiento y detectar corrupciones.*

- **FPT_TST.1 · Autoprueba de la TSF** — Ejecuta las autopruebas definidas [durante el arranque, periódicamente, a petición de un usuario autorizado u otras condiciones] y permite a los usuarios autorizados verificar la integridad de la TSF y de sus datos.

## 9. FRU — Utilización de los recursos (*Resource utilization*) · §16

**Definición de la clase:** Apoya la disponibilidad de los recursos requeridos (capacidad de proceso y/o almacenamiento): tolerancia a fallos, prioridad de servicio y asignación de recursos para evitar la monopolización.

*Contiene 3 familias y 6 componentes.*

### FRU_FLT — Tolerancia a fallos (*Fault tolerance*)

*Protege contra la indisponibilidad de capacidades causada por fallos del TOE.*

- **FRU_FLT.1 · Tolerancia a fallos degradada** — Garantiza la operación de las capacidades TOE definidas cuando ocurren los tipos de fallo especificados.
- **FRU_FLT.2 · Tolerancia a fallos limitada** — Garantiza la operación de TODAS las capacidades del TOE ante los fallos definidos; jerárquico sobre FRU_FLT.1.

### FRU_PRS — Prioridad de servicio (*Priority of service*)

*Las actividades de alta prioridad siempre se completan sin interferencias indebidas de las de baja prioridad.*

- **FRU_PRS.1 · Prioridad de servicio limitada** — Asigna una prioridad a cada sujeto y media el acceso a los recursos controlados según esa prioridad.
- **FRU_PRS.2 · Prioridad de servicio completa** — Media el acceso a TODOS los recursos compartibles según la prioridad del sujeto; jerárquico sobre FRU_PRS.1.

### FRU_RSA — Asignación de recursos (*Resource allocation*)

*Evita la denegación de servicio por monopolización no autorizada de recursos, mediante cuotas mínimas y máximas.*

- **FRU_RSA.1 · Cuotas máximas** — Impone cuotas máximas de los recursos definidos que [cada usuario, grupo o sujetos] pueden usar [simultáneamente o en un periodo especificado].
- **FRU_RSA.2 · Cuotas mínimas y máximas** — Además, garantiza una cantidad mínima de cada recurso definido disponible para su uso; jerárquico sobre FRU_RSA.1.

## 10. FTA — Acceso al TOE (*TOE access*) · §17

**Definición de la clase:** Requisitos funcionales para controlar el establecimiento de la sesión del usuario con el TOE: límites de sesiones concurrentes, bloqueo y terminación de sesiones, rótulos de aviso, historial de acceso y denegación de sesiones.

*Contiene 6 familias y 10 componentes.*

### FTA_LSA — Limitación del alcance de los atributos seleccionables (*Limitation on scope of selectable attributes*)

*Restringe el alcance de los atributos de sesión disponibles para el usuario al establecer la sesión.*

- **FTA_LSA.1 · Limitación del alcance de los atributos seleccionables** — Restringe el alcance de los atributos de sesión definidos en función de los atributos especificados.

### FTA_MCS — Limitación de las sesiones concurrentes múltiples (*Limitation on multiple concurrent sessions*)

*Limita el número de sesiones concurrentes que pertenecen al mismo usuario.*

- **FTA_MCS.1 · Limitación básica de sesiones concurrentes múltiples** — Restringe el máximo de sesiones concurrentes por usuario e impone por defecto un límite definido.
- **FTA_MCS.2 · Limitación por atributo de usuario** — Además, aplica reglas según atributos del usuario para el máximo de sesiones; jerárquico sobre FTA_MCS.1.

### FTA_SSL — Bloqueo y terminación de sesión (*Session locking and termination*)

*Bloqueo y terminación de sesiones interactivas, iniciados por la TSF o por el propio usuario.*

- **FTA_SSL.1 · Bloqueo de sesión iniciado por la TSF** — Tras un intervalo de inactividad definido, borra/protege los dispositivos de visualización y deshabilita su actividad hasta el desbloqueo, exigiendo los eventos definidos para desbloquear.
- **FTA_SSL.2 · Bloqueo de sesión iniciado por el usuario** — Permite al usuario bloquear su propia sesión interactiva (con las mismas condiciones de desbloqueo).
- **FTA_SSL.3 · Terminación de sesión iniciada por la TSF** — Termina la sesión interactiva tras el intervalo de inactividad definido.
- **FTA_SSL.4 · Terminación de sesión iniciada por el usuario** — Permite al usuario terminar su propia sesión interactiva.

### FTA_TAB — Rótulos de acceso al TOE (*TOE access banners*)

*Muestra un mensaje de aviso configurable sobre el uso apropiado del TOE antes de iniciar la sesión.*

- **FTA_TAB.1 · Rótulos de acceso al TOE por defecto** — Antes de establecer la sesión del usuario, muestra el mensaje definido de aviso informativo.

### FTA_TAH — Historial de acceso al TOE (*TOE access history*)

*Muestra al usuario, al iniciar sesión con éxito, el historial de intentos de acceso (exitosos y fallidos) a su cuenta.*

- **FTA_TAH.1 · Historial de acceso al TOE** — Al establecer la sesión con éxito, muestra la [fecha, hora, método, ubicación] del último acceso exitoso y del último intento fallido, junto con el número de intentos fallidos desde el último éxito.

### FTA_TSE — Establecimiento de sesiones al TOE (*TOE session establishment*)

*Denegación del permiso de establecimiento de sesión con el TOE en función de atributos.*

- **FTA_TSE.1 · Establecimiento de sesiones al TOE** — La TSF puede denegar el establecimiento de una sesión en función de los atributos definidos.

## 11. FTP — Canal y ruta de confianza (*Trusted path/channels*) · §18

**Definición de la clase:** Ruta de confianza entre los usuarios y la TSF y canales de confianza entre la TSF y otros productos TI de confianza: comunicación lógicamente distinta, con identificación garantizada de sus extremos y protección de los datos transmitidos; incluye familias para los protocolos de comunicación habituales.

*Contiene 3 familias y 5 componentes.*

### FTP_ITC — Canal de confianza inter-TSF (*Inter-TSF trusted channel*)

*Canal de comunicación de confianza entre la TSF y otro producto TI de confianza.*

- **FTP_ITC.1 · Canal de confianza inter-TSF** — Proporciona un canal lógicamente distinto de otros canales, con identificación garantizada de sus extremos y protección de los datos del canal contra modificación o divulgación; iniciado por la TSF o por el producto de confianza para las funciones definidas.

### FTP_PRO — Protocolo de canal de confianza (*Trusted channel protocol*) **[Nueva en CC:2022]**

*Establece un canal de confianza y lo usa para transferir datos de la TSF o del usuario de forma segura (modela protocolos como TLS/IPsec con sus roles y estándares).*

- **FTP_PRO.1 · Protocolo de canal de confianza** — Implementa el protocolo definido actuando como el rol especificado, conforme a los estándares, reglas, opciones estáticas y configuraciones negociables definidas.
- **FTP_PRO.2 · Establecimiento del canal de confianza** — Establece un secreto compartido con su par mediante los mecanismos definidos, autentica al par (o se autentica ante él) y deriva las claves criptográficas mediante la función KDF definida.
- **FTP_PRO.3 · Protección de los datos del canal de confianza** — Protege los datos en tránsito contra la divulgación no autorizada (cifrado) y contra [modificación, borrado, inserción o repetición] mediante los mecanismos de integridad definidos.

### FTP_TRP — Ruta de confianza (*Trusted path*)

*Comunicación de confianza entre los usuarios (remotos o locales) y la TSF, requerible para cualquier interacción de seguridad (p. ej., la autenticación inicial).*

- **FTP_TRP.1 · Ruta de confianza** — Proporciona una ruta lógicamente distinta con la TSF para usuarios [remotos/locales], con identificación garantizada de extremos y protección de los datos comunicados; puede iniciarse por el usuario o por la TSF y se exige para [la autenticación inicial u otros servicios definidos].

---

## Tabla resumen del catálogo

| # | Código | Clase | Familias | Componentes | Sección CC:2022 |
|---|--------|-------|----------|-------------|-----------------|
| 1 | FAU | Auditoría de seguridad | 6 | 16 | §8 |
| 2 | FCO | Comunicación | 2 | 4 | §9 |
| 3 | FCS | Soporte criptográfico | 4 | 14 | §10 |
| 4 | FDP | Protección de los datos del usuario | 15 | 34 | §11 |
| 5 | FIA | Identificación y autenticación | 7 | 15 | §12 |
| 6 | FMT | Gestión de la seguridad | 8 | 16 | §13 |
| 7 | FPR | Privacidad | 4 | 10 | §14 |
| 8 | FPT | Protección de las funciones de seguridad del TOE (TSF) | 16 | 26 | §15 |
| 9 | FRU | Utilización de los recursos | 3 | 6 | §16 |
| 10 | FTA | Acceso al TOE | 6 | 10 | §17 |
| 11 | FTP | Canal y ruta de confianza | 3 | 5 | §18 |
| **Σ** | — | **Total** | **74** | **156** | — |
