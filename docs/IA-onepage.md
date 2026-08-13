# Tierra Viva — Arquitectura de Información (One Page)
Estado: PROPUESTA para presentar al cliente. Dummy data + placeholders.
Actualizado: 2026-08-13

## Decisiones cerradas
- Objetivo primario: **presentar empresa + producto**. Cotización = objetivo secundario.
- Datos: dummy realistas, marcados como tales en la presentación.
- Deploy: Render free tier. Dominio/hosting propio post-aprobación.
- Imágenes: stock/placeholder provistos por el equipo.
- Certificaciones: mini-sección con slots vacíos para logos PNG/SVG.
- Idioma: EN por defecto, ES secundario.
- Tipografías: self-host desde `Rec/Fonts` (Haqmuse display, Abro Sans cuerpo).

## Referencias visuales — AUDITADAS (visitadas 2026-08-13, DOM + copy)
Nota: se extraen **patrones de estructura, UX y presentación de datos**. Color y tipografía se ignoran por decisión de proyecto.

### Métricas medidas
| | To'ak (/our-cacao) | Cuvée (/our-beans) | Maison Deuza (home) |
|---|---|---|---|
| Alto de página | 9.239 px | corta, ~1 pantalla + listado | 11.229 px (~15 viewports) |
| Imágenes | 78 (44 lazy, 64 srcset) | pocas | **17** |
| Video | ninguno | ninguno | ninguno |
| Sticky / fixed | 0 sticky | — | 1 sticky, 5 fixed |
| Animación | CSS/Shopify | mínima | **GSAP** |

**Corrección a la asunción previa:** no hay un "denominador común de lujo minimal con foto dominante".
- Deuza es **tipográfico**, no fotográfico: 11k px de alto con solo 17 imágenes. El peso visual lo carga el texto display animado.
- To'ak sí es fotográfico (78 imgs) pero es **e-commerce DTC** con carruseles de producto — ese lado no aplica a Tierra Viva.
- Ninguno de los tres usa video. Cero. Confirma: no invertir en video para la propuesta.

### Patrones a adoptar

**1. To'ak — el timeline histórico se come la mitad de la página**
La sección de historia del cacao mide 4.611 px de 9.239 px totales: **50% de la página**. Entradas fechadas (3300 BC → 2020), cada una con titular, párrafo corto y `READ MORE` opcional. Sin pinning ni scroll horizontal — apilado vertical simple.
→ Aplicar: la narrativa de origen y proceso puede ocupar mucho más espacio del que asigné. Progressive disclosure con "read more" evita el muro de texto.

**2. To'ak — la historia sustituye a la certificación**
No lideran con sellos. Lideran con linaje: variedad, genética, región, alianza con institución (INIAP, TMA, universidades). La credibilidad viene del relato verificable, no del logo.
→ Aplicar directo a Tierra Viva: sin certificaciones aún, el activo es la trazabilidad y el relato de Manabí. Mismo territorio, misma variedad Nacional.

**3. Cuvée — socios numerados `01 / 02 / 03`**
Cada aliado: número grande, nombre, 1 párrafo de narrativa humana (quién lo fundó y por qué), enlace externo al sitio del socio. Barato, creíble, escalable.
→ Aplicar a la sección de productores aliados. El enlace externo es lo que lo hace verificable.

**4. Cuvée — eyebrow label sobre cada titular**
`OUR GUARANTEE` / `OUR RESPONSIBILITY` en mayúsculas pequeñas encima del H2. Orienta al lector antes de leer.
→ Adoptar como componente de sección en todo el sitio.

**5. Deuza — franja de credenciales de 4 ítems al cierre**
`MAISON CENTENAIRE · TORRÉFACTION ARTISANALE · SAVOIR-FAIRE ANCESTRAL · ÉTABLISSEMENT CERTIFIÉ BIO`
→ Ya estaba en la propuesta (sección 2). Confirmado como patrón del rubro. Repetirlo también al cierre, no solo bajo el hero.

**6. Deuza — datos sensoriales como micro-spec en la tarjeta**
`NOTES: AGRUMES` · `INTENSITÉ: ●●●○○` · `NOTES: CHOCOLAT AU LAIT, FRUITS ROUGES`
Etiqueta corta en mayúsculas + valor. Ni tabla pesada ni prosa.
→ Aplicar al perfil sensorial del cacao (sección 7). La tabla técnica completa se mantiene, pero el perfil sensorial va en este formato compacto.

**7. Deuza — texto display con animación por letra (GSAP)**
Frases construidas carácter por carácter revelándose en scroll (`A DEUZA INSTITUTION LUZIENNE / TORREFACTEURS DEPUIS 1920`).
→ Candidato para la sección 5 ("Quality is not manufactured. It is cultivated."). Un solo momento animado en toda la página, no más — usado dos veces pierde efecto.

### Patrones a NO copiar
- Carruseles de producto de To'ak (e-commerce, Tierra Viva vende a granel B2B).
- Reseñas de clientes con estrellas (no aplica a compradores industriales).
- Blog/journal (no hay contenido y envejece mal sin mantenimiento).
- Barra de anuncios rotativa superior ("SUBSCRIBE FOR A GIFT" — ruido DTC).

### Implicaciones sobre la propuesta
1. Subir el peso de las secciones narrativas 4, 5 y 6 — hoy están subdimensionadas frente al benchmark.
2. Sección 9 (certificaciones) baja de prioridad: el benchmark del rubro no lidera con sellos. Se mantiene el placeholder, pero pequeño.
3. La sección de aliados pasa de "condicional" a **recomendada** — es el patrón de credibilidad que usan los tres.
4. Sin video. Presupuesto visual entero a fotografía fija con `srcset` + lazy.
5. Una sola animación protagonista (GSAP, sección 5). El resto, reveals sobrios en scroll.

---

## Estructura — 11 bloques

### 0. Nav sticky
Logo · Origin · Process · Cacao · Traceability · About · Contact · [Request Samples]
Selector EN/ES derecha. CTA naranja #F3A155.

### 1. Hero — full bleed, centrado, video de fondo
**Decisión revertida por el cliente (referencia Cuvée):** vuelve a centrado, con video de fondo. Sustituye el split asimétrico y el "sin video" de rondas anteriores.

Layout: nav superpuesta transparente sobre el video, logo centrado. Debajo, contenido centrado verticalmente: eyebrow opcional, H1, subtítulo, un solo CTA.
H1: **Regenerative Cacao at Origin**
Sub: *From the land of Manabí, Ecuador, to the world.*
CTA único: Explore the Origin.
Fondo: video loop mudo, fermentación o secado de cacao, overlay azul `#00283C` al 40-55% para contraste de texto. `poster` con foto fija para el primer frame y como fallback si el video no carga. Pausado bajo `prefers-reduced-motion`.
Tipografía sigue siendo Haqmuse/Abro Sans, no serif — Cuvée usa serif pero eso no es parte del manual de marca, se toma layout y composición, no tipo de letra.

### 2. Franja de credenciales
`Chone, Manabí — Ecuador` | `Nacional — Fino de Aroma` | `Centralized Fermentation` | `Lot-level Traceability`

### 3. Manifiesto — "Cacao begins here"
Bloque editorial, texto centrado sobre crema. Copy oficial:

> Cacao begins here, where farmers read the land, care for the soil, and pass down knowledge from one generation to the next.
> At Tierra Viva, great cacao starts with people, biodiversity, and regenerative agroforestry systems that allow both forests and communities to thrive.
> From the land of Manabí, Ecuador to the world.

### 4. El origen / La empresa
Foto grande + texto. Fundación 2025. Territorio Manabí. Misión: transformar el valor del cacao desde el origen fortaleciendo productores.
*Pendiente: narrativa fundacional real.*

### 5. "Quality is not manufactured. It is cultivated." — sección científica
Diferenciador narrativo fuerte. Dato duro + macrofoto de flor de cacao. Copy oficial:

> A cacao flower measures only a few millimeters. Its pollination depends on tiny midges that thrive only in living soils and balanced ecosystems. A single tree can produce hundreds of flowers. Less than 5% will become pods.
> Cacao productivity does not begin at harvest. It begins here; in the micro-life of the forest floor.
> At Tierra Viva, we work from the root: regenerative agroforestry, functional biodiversity, and structure at origin.
> **Because quality is not manufactured. It is cultivated.**

Micro-dato animado: `< 5%` de flores llegan a mazorca. Contador on-scroll.

### 6. Proceso — 5 pasos
Cultivo regenerativo → Cosecha → Fermentación centralizada → Secado → Control de calidad y lote.
Horizontal en desktop, vertical en móvil. 1 línea técnica + foto por paso.

### 7. Producto — ficha técnica (DUMMY)
Nacional — Fino de Aroma. UI tipo spec-sheet, dos columnas, tipografía monoespaciada para valores.

| Campo | Valor dummy |
|---|---|
| Variety | Nacional (Fino de Aroma) |
| Origin | Chone, Manabí, Ecuador |
| Fermentation | 5–6 days, centralized wooden boxes |
| Drying | Sun-dried, 6–8 days |
| Moisture | ≤ 7.0% |
| Cut test (well fermented) | ≥ 85% |
| Bean count | 90–100 beans / 100 g |
| Defects | ≤ 3% |
| Sensory profile | Floral, ripe fruit, light nuts, low bitterness |
| Presentation | 65 kg jute bags, food-grade liner |
| MOQ | 1 t |
| Incoterms | FOB Guayaquil / EXW Chone |
| Harvest window | Mar–Jul · Oct–Dec |

CTA: Download Technical Sheet (PDF placeholder).

### 8. Trazabilidad
Explicación del código de lote + ilustración de territorio. Ej. dummy: `TV-CH-2026-014`
= Tierra Viva · Chone · año · lote.

### 9. Certificaciones y alianzas
Fila de 4–6 slots grises con label. Placeholder hasta recibir logos.
Nota bajo la fila: *In process / En trámite.*

### 10. Para quién
Fine chocolate brands · Craft chocolate makers · Importers & traders.

### 11. Contacto + Footer
Form: Name · Company · Country · Email · Est. volume (t/yr) · Message.
Dummy: hello@tierravivacacao.com · +593 XX XXX XXXX · Chone, Manabí, Ecuador.
Footer azul #00283C, logo monocromo, eslogan, LinkedIn, legal, © 2026.

---

## Sistema visual
| Rol | Color |
|---|---|
| Base | Crema #FDF3E4 |
| Oscuro (hero, proceso, footer) | Azul #00283C |
| CTA / acento | Naranja #F3A155 |
| Verde marca | #6A8660 |
| Apoyo secundario | #D8C3A5 · #C97D4D · #A8B89A · #556B4F |

**Paleta confirmada por el cliente, en dos capas.** Principal (los 4 primeros de la tabla): azul `#00283C`, naranja `#F3A155`, verde `#6A8660`, crema `#FDF3E4`. Secundarios de apoyo: `#D8C3A5` `#C97D4D` `#A8B89A` `#556B4F`, para ilustración y datos, nunca como fondo de sección ni como segundo CTA. `#F5EBDD` visto en un swatch previo era ruido de captura, no color de marca — se descarta.

**Texturas (manual de marca):** uso sutil, como fondo, nunca compitiendo con el logo. Patrones orgánicos/naturales en tono crema-arena, baja saturación. Aplicar en bloques de transición (ej. detrás del manifiesto sección 3, o como textura de fondo en la franja de credenciales), nunca detrás de texto denso ni en el hero completo.

**Gráficos de apoyo (manual de marca):** set de íconos lineales trazo fino, color naranja de acento, geometría orgánica: mazorca, granos partidos, brote, flor, rombo geométrico, bol de granos, tableta de chocolate, mazorcas colgando. Reemplaza los íconos genéricos de librería en la sección 3 (propuesta de valor) y como marcadores visuales en proceso y trazabilidad. No mezclar con Phosphor/Tabler/otra librería, es un set propio de marca.

Tipografía: Haqmuse (H1–H3) / Abro Sans (cuerpo, UI, tablas).
Ritmo: alternar crema ↔ oscuro. Secciones 1, 5, 6, 11 en oscuro.
Logo mínimo 120px, siempre con eslogan.

## Pendientes del cliente (post-aprobación)
- Fotografía real (finca, fermentación, secado, grano, equipo)
- Ficha técnica real → reemplaza dummy de sección 7
- Logos de certificaciones → sección 9
- Contacto real + dominio
- Narrativa fundacional (sección 4)

---

# Dirección de diseño e ingeniería
Derivado de las skills `design-taste-frontend`, `frontend-design` y `emil-design-eng`.
Esta capa **corrige** varias decisiones de la sección de arquitectura anterior. Donde haya contradicción, manda esta sección.

## Design Read
> **B2B origin/producer landing para chocolate makers y traders de cacao fino, con lenguaje editorial-agrícola sobrio, apoyado en el manual de marca existente y en Astro con CSS nativo + islas mínimas.**

Dials:
| Dial | Valor | Razón |
|---|---|---|
| `DESIGN_VARIANCE` | 7 | Marca premium con identidad propia, pero comprador técnico. No experimental. |
| `MOTION_INTENSITY` | 5 | Movimiento presente y motivado. No scroll-hijack, no cinemático. |
| `VISUAL_DENSITY` | 3 | Producto agrícola sensorial. El aire es parte del argumento de calidad. |

## Excepción de paleta — declarada explícitamente
La guía anti-slop **prohíbe por defecto** la familia crema + latón + ocre + espresso para briefs premium. `#FDF3E4` cae exactamente en la familia "warm paper/cream"; `#C97D4D` y `#D8C3A5` en la familia "clay/tan".

Se aplica la **excepción documentada**: el manual de marca de Tierra Viva nombra esos valores explícitamente. No es un default alcanzado por pereza, es identidad preexistente.

Condiciones para que la excepción no degenere en genérico:
- Un solo acento en toda la página: naranja `#F3A155`. Sin excepciones. Nada de un verde de CTA en la sección 8.
- El azul profundo `#00283C` carga el contraste. La página no es "toda crema": alterna crema y azul en bloques grandes.
- Los secundarios (`#6A8660`, `#556B4F`, `#A8B89A`) solo como apoyo en ilustración y datos. Nunca como fondo de sección ni como segundo CTA.

Tipografía: Haqmuse y Abro Sans están fijadas por manual y disponibles en `Rec/Fonts`. Se autohospedan con `font-display: swap`. Sin Google Fonts por `<link>`.

## Correcciones a la arquitectura propuesta

| # | Lo que propuse antes | Problema | Corrección |
|---|---|---|---|
| 1 | Sección 3 con 3 columnas de propuesta de valor | Tres tarjetas iguales en fila es el tell de layout generado más reconocible | Grid asimétrico 2fr/1fr, o zig-zag de 2, o una afirmación grande con 3 apoyos en línea |
| 2 | Hero centrado full-bleed con overlay | Con `VARIANCE 7` el hero centrado es default perezoso | Split asimétrico: copy a la izquierda sobre margen ancho, foto ocupando el resto. Alternativa válida: editorial manifiesto, dado que el eslogan **es** el mensaje |
| 3 | Ficha técnica de 13 filas con borde por fila | Es exactamente el patrón spec-sheet prohibido: lista larga con hairline bajo cada fila | Agrupar en **3 bloques**: Cultivo y proceso · Grano y calidad · Comercial. 4-5 datos por bloque, un divisor suave por bloque. Los 3-4 datos protagonistas (variedad, cut test, humedad, MOQ) como tiles grandes; el resto tras un disclosure "Full specifications" |
| 4 | Eyebrow labels en todas las secciones | Máximo 1 eyebrow por cada 3 secciones. Con 11 secciones el techo es 4 | Eyebrow solo en hero, producto, trazabilidad y contacto. Las demás con titular directo |
| 5 | Copy con guion largo | Cero guiones largos en texto visible | Reescribir. `It begins here; in the micro-life of the forest floor.` conserva el punto y coma original del cliente, no lo cambio por raya |
| 6 | Barra de credenciales separada por punto medio | El punto medio está racionado a 1 por línea | Separar por columnas o hairlines verticales, no por cadena de puntos |
| 7 | Indicador "SCROLL" bajo el hero, visto en To'ak | Los indicadores de scroll están prohibidos | No se incluye |
| 8 | Datos dummy sin marcar | Cifras de precisión falsa inventadas | Cada valor lleva `<!-- mock -->` en el markup, y la presentación rotula el bloque como datos de ejemplo |
| 9 | Timeline horizontal en desktop para el proceso | El scroll-hijack horizontal necesita justificación fuerte y rompe en móvil | Vertical apilado con reveal escalonado. El horizontal-pan queda como opción solo si el cliente pide espectáculo |

## Capa de motion

Principio rector: **cada animación se justifica en una frase o se elimina.** Un visitante ve esta página una o dos veces en su vida, así que el movimiento de entrada sí está permitido. Lo prohibido es el movimiento decorativo perpetuo.

```css
--ease-out: cubic-bezier(0.23, 1, 0.32, 1);
--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);
```

| Elemento | Duración | Curva |
|---|---|---|
| Botón `:active` | 160 ms | ease-out |
| Nav, hover de enlace | 150 ms | ease |
| Reveal de sección en scroll | 400 ms | ease-out |
| Stagger entre ítems | 50 ms | n/a |
| Contador de porcentaje | 900 ms | ease-out |

Reglas duras:
- Nunca `ease-in`. Arranca lento y hace sentir la interfaz pesada.
- Nunca `transition: all`. Solo `transform` y `opacity`.
- Nunca entrar desde `scale(0)`. Desde `scale(0.96)` con `opacity: 0`.
- Botones y CTA: `transform: scale(0.97)` en `:active`. Feedback físico.
- Hover detrás de `@media (hover: hover) and (pointer: fine)`.
- `prefers-reduced-motion: reduce` colapsa todo movimiento a fade. Obligatorio.
- Transiciones CSS antes que keyframes. Se interrumpen limpio.

Inventario completo de movimiento. Todo lo demás queda estático:

1. **Hero.** Entrada escalonada de titular, subtítulo y CTA. 400 ms, stagger 50 ms. Justificación: jerarquía, ordena la primera lectura.
2. **Reveal de secciones.** `opacity` con `translateY(16px)` al entrar en viewport, una sola vez. Justificación: ritmo narrativo.
3. **Contador del porcentaje de flores** en la sección de la flor de cacao. Justificación: el dato *es* el argumento; animarlo lo convierte en momento.
4. **Timeline de proceso.** Los 5 pasos entran escalonados. Justificación: secuencia real, el orden importa.
5. **Botones y campos de formulario.** Press, focus, hover. Justificación: feedback.

Implementación: CSS scroll-driven animations (`animation-timeline: view()`) con fallback a `IntersectionObserver`.

**Sin GSAP.** Corrijo lo que dije antes: GSAP se justificaba si hacía falta pinning o scrub, y con el timeline vertical ya no hace falta. Menos peso, corre fuera del hilo principal, y en Astro estático es la opción correcta. `window.addEventListener('scroll')` está prohibido.

## Imágenes
- Cada sección con foto necesita asset real. Nada de SVG decorativo dibujado a mano ni maquetas hechas con `div`.
- Mientras llegan las fotos: `https://picsum.photos/seed/{descriptivo}/{w}/{h}` con semilla que describa el hueco (`tierraviva-fermentation-boxes`), más un comentario `<!-- TODO: foto real, 1600x1200 -->`.
- `srcset` con `loading="lazy"` en todo salvo el hero. Hero con `fetchpriority="high"`.
- Sin video. Los tres referentes auditados tienen cero video.

## Checklist antes de entregar
- [ ] Cero guiones largos en texto visible
- [ ] Un solo acento (`#F3A155`) en toda la página
- [ ] Un solo sistema de radios de esquina
- [ ] Contraste WCAG AA en CTA, formulario, placeholders y focus
- [ ] Ningún CTA que parta a dos líneas en desktop
- [ ] Un solo texto por intención de CTA
- [ ] Máximo 4 eyebrows en 11 secciones
- [ ] Nav en una sola línea, alto máximo 80px
- [ ] Al menos 4 familias de layout distintas
- [ ] Máximo 2 secciones seguidas con el patrón imagen+texto
- [ ] Hero cabe en viewport: titular máximo 2 líneas, subtítulo máximo 20 palabras
- [ ] `min-h-[100dvh]`, nunca `h-screen`
- [ ] `prefers-reduced-motion` cubierto
- [ ] Decisión de dark mode tomada explícitamente
- [ ] Datos dummy rotulados como mock

## Pendiente de resolver
**Skill "impeccable".** Resuelto: no se usa. No forma parte del set obligatorio de skills del proyecto.

**Dark mode.** Resuelto: NO. Página bloqueada en modo claro (paleta única del manual de marca). No se implementa variante oscura.

---

# Implementación (Astro)

Construido 2026-08-13. Stack: Astro 7 + Tailwind v4, CSS propio con tokens. Sin React en la página (cero islas: no hacía falta). Sin GSAP.

## Archivos
```
src/styles/global.css        tokens, tipografía, escala, botones, reveals
src/components/Nav.astro     fijo, transparente sobre el hero, drawer en móvil
src/components/Hero.astro    centrado, video de fondo, scrim, poster
src/components/Credentials.astro
src/components/ValueProp.astro
src/components/Manifesto.astro
src/components/Origin.astro
src/components/Flower.astro  contador animado
src/components/Process.astro
src/components/Product.astro ficha agrupada + disclosure
src/components/Traceability.astro
src/components/Allies.astro  + slots de certificaciones
src/components/Contact.astro formulario con validación inline
src/components/Footer.astro
src/components/BrandIcon.astro  set de íconos del manual
public/fonts/                Haqmuse + Abro Sans autohospedadas
public/media/                11 placeholders en escala de grises
```

## Hallazgo importante: el naranja de marca no es legible sobre crema

`#F3A155` sobre `#FDF3E4` da **1.9:1**. No pasa AA como texto en ningún tamaño. Sobre el azul da 7.34:1, que sí pasa.

Solución aplicada, sin introducir un segundo acento: se añadió `--color-orange-ink: #9c4f10`, el mismo acento llevado a un valor legible en fondos claros (5.4:1 sobre crema, 4.9:1 sobre arena).

Regla resultante:
- `--color-orange` `#F3A155`: texto sobre el azul, y relleno de botón con texto azul.
- `--color-orange-ink` `#9c4f10`: texto de rol acento sobre crema o arena, íconos sobre claro, anillo de foco sobre claro.

Consecuencias en el hero: el eyebrow y el eslogan del logo pasaron a crema. En naranja habrían necesitado un scrim del 84%, que aplanaría el video.

## Otros ajustes derivados de la auditoría
- `--color-ink-45` pasó de `#7d919b` a `#506674`. El original daba 2.7:1 sobre arena.
- Scrim del hero con piso del 70%, dimensionado contra el peor caso (un fotograma blanco). Con el metraje real puede recalibrarse, pero no debe bajar de ahí.
- Objetivos táctiles: enlaces del footer, de contacto y el logo llevados a 44px.
- Un solo radio en toda la página: 2px.
- CTA unificado: "Request samples" en nav, drawer y producto. "Explore the origin" es scroll, "Send enquiry" es envío de formulario.
- 3 eyebrows en 11 secciones (techo: 4).

## Robustez
El contenido es visible por defecto; solo una página que confirmó que su JS corre lo oculta para animarlo (`.js` en `<html>`). Tres capas:
1. Sin JS: todo visible, contador muestra `< 5`.
2. Con JS pero sin IntersectionObserver: revelado inmediato.
3. Con IO: revelado en scroll, más un temporizador de seguridad a 2.5s.

El hero anima **desde** un estado oculto con `animation-fill-mode: backwards`, en vez de reposar en `opacity: 0` esperando que la animación termine. Si las animaciones fallan o están desactivadas, el hero simplemente está ahí.

## Nota de Astro
Astro añade su atributo de scope a cada compuesto del selector, así que `blockquote p` (0,2,2) le gana a `.close` (0,2,0). Costó que el cierre del manifiesto renderizara a 34px en vez de 12px. Corregido con `p:not(.close)`. Vale tenerlo presente al escribir selectores descendentes en componentes.

## Pendiente
| Qué | Dónde |
|---|---|
| Video del hero | `public/media/hero.mp4`, luego `hasVideo = true` en `Hero.astro` |
| Fotografía real | `public/media/`, 11 archivos, mismos nombres |
| Ficha técnica real | `Product.astro`, arrays `headline` y `groups` |
| Logos de certificación | `Allies.astro`, array `certs` |
| Datos de contacto | `Contact.astro` y `Footer.astro` |
| Productores reales | `Allies.astro`, array `allies` |
| Narrativa fundacional | `Origin.astro` |
| Backend del formulario | `Contact.astro`, el submit hoy solo valida |

Las imágenes están en escala de grises a propósito: se leen como marcador de posición y no como contenido final.

---

# Ronda 2: interacción, medios reales y scrollytelling

Ajustes pedidos por el cliente sobre la base ya construida. Los cuatro
componentes de Framer citados se **reimplementaron nativos** (decisión del
cliente, opción A): los módulos `framer.com/m/*.js` son ESM alojados en un CDN
externo, varios dependen del runtime del canvas de Framer, y ninguno respeta la
paleta ni la auditoría de contraste de este proyecto.

## Equivalencias

| Referencia Framer | Implementación nativa | Dónde |
|---|---|---|
| Progressive Blur | 6 capas apiladas, cada una con más `backdrop-filter` y enmascarada a una banda más baja | `Nav.astro` |
| Text Arrow CTA | `.link-arrow`: la flecha sale por la derecha mientras su gemela entra por la izquierda | `global.css`, `ArrowLink.astro` |
| Fluid Button | `.btn::before`: el fondo sube desde abajo con una cresta que se aplana al llegar | `global.css` |
| Media Hover Trail | rastro de granos tras el puntero sobre "read the land", con caída por distancia | `Manifesto.astro` |

Un `backdrop-filter` único deja un borde duro donde termina; las seis capas lo
degradan a cero. El desenfoque **no** garantiza contraste: un fotograma claro
sigue claro al desenfocarse, así que la legibilidad la carga `.nav-tint`.

## Medios reales

- Video del hero: `1407821_Snack_Pods_1280x720.mp4`, reencodeado de 15 MB a
  827 KB (H.264, CRF 30) y 795 KB (VP9). El póster es un fotograma del propio
  video, ya no un marcador.
- Logos de marca en `public/logos/`. La barra muestra el logotipo completo
  sobre el hero y colapsa al símbolo al despegarse. Favicon desde `favico@2x`.
- `grano cacao.jpg` alimenta el rastro del manifiesto. Una sola imagen a
  propósito: se lee como rastro del mismo grano, no como galería.

## Sistema de radios

Deja de haber uno solo. Ahora hay **dos, documentados**: `--radius-control: 2px`
para controles y superficies, `--radius-media: 10px` para fotografía. La regla
es que la esquina blanda pertenece a la imagen, no a la interfaz.

## Movimiento añadido

- Entrada de imagen: barrido con `clip-path` de abajo hacia arriba.
- Parallax: `animation-timeline: view()`, ±2.6% sobre un `scale(1.08)`. Sin
  soporte, la imagen simplemente está quieta, que es una imagen correcta.
- Iconos: trazo dibujado con `stroke-dasharray` sobre `pathLength="1"`, así una
  sola longitud de guion sirve para glifos de largos muy distintos.
- Entradas secuenciales: `[data-stagger]` reparte 90 ms por elemento en orden de
  documento. Los retardos escritos a mano siguen mandando.

## Scrollytelling: "From canopy to lot code"

Solo cambia el comportamiento de scroll. Mismos textos, números, imágenes,
tipografías, tamaños, colores, márgenes y proporciones.

Las cinco figuras se envían **dentro de sus pasos**. En ≥900 px un script las
traslada a un marco sticky; el paso que cruza el centro del viewport es el dueño
del marco, detectado con `rootMargin: "-50% 0px -50% 0px"`, que crea una banda de
un píxel en el centro. Crossfade de 340 ms, una sola imagen visible.

Sin JS, o por debajo de 900 px, las figuras nunca se mueven y la sección es la
original. Si el observer no reporta ningún paso en 3 s, el script devuelve las
figuras a su sitio en vez de dejar el marco congelado en la primera imagen.

## Hallazgos de esta ronda

1. **La barra ahora es sólida por defecto y la transparencia se gana.** Antes el
   estado base era transparente y el script añadía el fondo. Si el observer
   fallaba, quedaba texto crema flotando sobre video claro. Invertido: el
   script añade `data-top` mientras estamos sobre el hero.
2. **El minificador rompía el parallax.** Lightning CSS fusionaba
   `animation` + `animation-timeline` en el atajo de Animations Level 2, que el
   motor descarta entero. Escrito con propiedades largas.
3. **El `IntersectionObserver` no dispara en este entorno de verificación.** Un
   observer sintético sobre el `h1` visible nunca disparó. Los 31 reveals
   resueltos venían del temporizador de seguridad, no del observer. Por eso el
   scrollytelling y el estado de la barra se validaron forzando los estados a
   mano, no observándolos en scroll real.
4. Objetivos táctiles: enlaces del nav (28.8 px) y CTA del nav (37.6 px)
   llevados a 44.
5. Los errores del formulario ahora se anuncian en el propio campo con
   `aria-invalid` y `aria-describedby`, no solo al lado.

---

# Ronda 3: por qué la ronda 2 no se veía

El cliente reportó que el progressive blur, el scrollytelling, el rastro de
medios, el reveal de imágenes y las entradas secuenciales "no existían". No era
caché: los tres servidores servían el markup nuevo. Eran cuatro fallos
distintos, tres de ellos míos.

## 1. El temporizador de seguridad mataba todos los reveals

Revelaba la página entera a los 2.5 s. Como cualquier lector pasa más de 2.5 s
en el hero, al bajar ya estaba todo marcado `is-in`: cero animación de entrada,
cero barrido de imagen. Solo sobrevivía el hero, que es CSS puro y no depende
del observer.

La corrección importa conceptualmente: hay que comprobar si el observer
**corre**, no si ha **reportado algo útil**. Un `IntersectionObserver` siempre
entrega una primera llamada por cada elemento observado, intersecte o no. Así
que basta un flag `ran` puesto en la entrada del callback. Esperar una
intersección era el error, porque al cargar no hay nada intersectando bajo el
hero.

## 2. El scrollytelling se apagaba solo antes de llegar a él

Mi red de seguridad devolvía las figuras a sus pasos si el observer no había
reportado ningún paso en 3 s. Al cargar la página ningún paso está en el centro
del viewport, así que se desactivaba siempre. Misma corrección: `ran`, no
`reported`.

## 3. Chrome ya no soporta `-webkit-backdrop-filter`

El fallo más interesante. El CSS fuente declaraba las dos formas, prefijada y
estándar. Lightning CSS las dedupe y dejó **solo la prefijada**. Chrome 148
devuelve `false` en `CSS.supports("-webkit-backdrop-filter", "blur(4px)")`, así
que las seis capas quedaban sin desenfoque alguno. Funcionaba en dev, moría en
el build.

Las dos declaraciones ahora se escriben inline en cada capa desde un array en el
frontmatter. Los atributos `style` no los reescribe el minificador. Es el mismo
tipo de fallo que el parallax de la ronda 2: **el minificador es parte del
runtime, y hay que verificar contra el build, no contra dev.**

## 4. El tinte ahogaba el desenfoque

Las capas existían pero bajo un azul al 92%, prácticamente opaco. Bajado a 72%,
que es el valor más claro donde el texto crema del nav sigue pasando AA sobre
crema (6.01:1) y sobre un hipotético fondo blanco (5.71:1). Sobre el hero baja a
42% arriba y 14% abajo, porque el scrim del hero ya aporta el 80% del fondo
(9.89:1 y 8.21:1 en el peor caso).

## Cambios de diseño pedidos

- **Radios**: `--radius-control` 2 → 10 px, `--radius-media` 10 → 20 px. Razón
  exacta de 1:2, para que la suavidad se lea como sistema y no como dos
  decisiones sueltas.
- **Logo del header**: la caja del contenedor estaba estrangulando la altura. Los
  anchos ahora se derivan de la proporción real de cada marca (433x301 el
  logotipo, 270x383 el símbolo) a la altura objetivo. El logotipo pasó de 35 px
  a 64 px dentro de una barra de 84 px.
- **Formulario a modal**: `<dialog>` nativo, así el atrapado de foco, Escape y la
  inertización de la página son del navegador. Cinco disparadores en la página.
  Entra a 220 ms desde `scale(0.97)`, sale a 160 ms. El modal lleva `band-dark`
  porque esa clase es la que aporta el eyebrow acento, el anillo de foco y el
  botón outline correctos sobre azul; sin ella el eyebrow caía a 2.6:1.
- **Footer rediseñado**: fondo crema contra las dos secciones azules que lo
  preceden, para que la página cierre en vez de disolverse. Es el único sitio
  donde el logotipo para fondo claro tiene sentido. Tres columnas desiguales
  (1.3 / 0.8 / 1), no tres iguales.
- **Rastro del manifiesto**: la frase disparadora ahora lleva subrayado sólido en
  el acento, que se retrae al pasar el cursor y cede el protagonismo al rastro.
  Granos cuadrados de 164 px, porque el origen es cuadrado (472x472) y un marco
  vertical le cortaba los lados.

## Estado verificado sobre el build

0 fallos de contraste con el modal abierto, 0 guiones largos, 1 `h1`, 0 imágenes
sin alt, exactamente 2 radios, sin scroll horizontal a 375 px, el drawer cierra
al abrir el modal, el modal cabe en 375x812.

Sigue sin poder verificarse aquí el movimiento real: el `IntersectionObserver`
no dispara en este entorno, así que los reveals y el scrollytelling se validan
forzando estados, no observándolos.

---

# Ronda 4: el componente estaba mal leído

## Media Hover Trail: no es un rastro sobre el cursor

Lo había implementado como imágenes flotando tras el puntero. El componente real
inserta las imágenes **dentro de la línea de texto**: las palabras se separan
lateralmente para hacerles sitio y se vuelven a cerrar cuando el marco más viejo
colapsa. La media está en la frase, no encima de ella.

Reimplementado así, y colocado donde lo pidió el cliente: entre los dos párrafos
del manifiesto, no dentro de uno de ellos.

- Línea disparadora: `read` + hueco + `the land`, en el mismo cuerpo display que
  los párrafos, para que se lea como parte de la misma voz y no como un widget.
- Cada marco abre desde ancho cero. El ancho **tiene** que ser la propiedad
  animada aquí, porque el desplazamiento del texto es el efecto; el número de
  nodos está acotado, así que el trabajo de layout está acotado.
- Tope según ancho de ventana: 5 marcos en escritorio, 3 por debajo de 1000 px,
  2 por debajo de 720 px. Con cinco marcos en una ventana estrecha la frase se
  salía del viewport.
- Al salir el puntero la línea se vacía y la frase se cierra sola.
- Medido en reposo a 1440 px: hueco de 371 px, marcos de 71x54, las palabras se
  separan 129 px hacia cada lado, sin scroll horizontal.

En vez de `requestAnimationFrame` doble para comprometer el estado inicial se usa
una lectura de `offsetWidth`, que es un vaciado de estilo síncrono. El doble rAF
no llega nunca en un bucle de frames estrangulado, y entonces el marco salta a
ancho completo sin transición.

## Progressive blur: estaba al revés

Iba de 0.5 px arriba a 16 px abajo. Debe ser al contrario: máximo desenfoque
pegado al borde superior, desvaneciéndose hacia abajo, que es lo que hace
invisible la transición al contenido nítido.

Además las seis capas se enmascaraban a un sexto cada una, lo que produce bandas.
Ahora cada capa va **desde arriba** hasta su propio `stop` y se desvanece en
`fade`, así se acumulan hacia el borde superior en vez de embaldosarse. La rampa
mide 150 px contra una barra de 84 px: eso es lo "más extendido".

## Header sin fondo, con tinta que se adapta

Eliminado `.nav-tint`. La barra ya no tiene fondo propio: solo la rampa de
desenfoque. La tinta y el logotipo se invierten según la sección que pasa por
debajo.

El esquema **no** es una lista escrita a mano. Al cargar, el script lee el fondo
computado de cada `main > section` y del `footer`, calcula su luminancia y decide
`dark` o `light`. Una sección que cambie de color se corrige sola. Después
observa las secciones con una banda de un píxel a media altura de la barra, así
solo una puede intersectarla: la que está debajo.

Los dos logotipos del kit se usan por fin como corresponde: `logo-dark-bg` sobre
fondos oscuros, `logo-light-bg` sobre claros, y el símbolo (naranja, válido en
ambos) cuando la barra se despega del hero.

### El coste de quitar el fondo, con números

Sin velo, la legibilidad depende por completo de lo que haya detrás.

- Sobre el fondo que le toca, la tinta mide 13.97:1 en ambos sentidos.
- Pero cuando la barra pasa **sobre una fotografía**, la tinta oscura necesita
  que el fondo tenga luminancia por encima de 0.258, y la tinta crema por debajo
  de 0.162. Cualquier región de foto entre esos dos valores, es decir un gris
  medio, falla con las dos tintas.

Las imágenes que pasan por debajo de la barra al hacer scroll son las de Origin,
Flower, Process y Allies. Con las fotos reales hay que volver a comprobarlo. Es
una consecuencia directa de quitar el overlay, no un descuido.

## Estado verificado

0 fallos de contraste en el cuerpo de la página con el modal abierto, 0 guiones
largos, 1 `h1`, 0 imágenes sin alt, 2 radios, sin scroll horizontal a 375 ni a
1440, el rastro no dispara con puntero grueso, la línea no envuelve.

Nota de entorno: una medición dio toda la página a 0 px de ancho. No era la
página, era el panel del navegador con el viewport colapsado a 0. Verificar
`innerWidth` antes de creerse cualquier medida de layout aquí.

---

# Ronda 6: fallback de revelado de imágenes

El `IntersectionObserver` puede entregar correctamente su lote inicial de
elementos fuera de viewport y, en algunos navegadores, no volver a notificar la
entrada de una imagen lazy al hacer scroll. Eso dejaba la figura en `opacity: 0`
y `clip-path: inset(... 100%)` aunque el archivo ya hubiera cargado.

La página ahora escucha `load` y `error` en cada imagen con `data-img-reveal` y
añade `is-in` cuando el asset termina. El observer sigue controlando el ritmo
normal; el evento de imagen es la red de seguridad que ata la visibilidad al
recurso real. Se añadió una prueba Playwright que lleva cada imagen al viewport
y verifica que la clase y la opacidad se resuelven.

---

# Ronda 5: cierre, credenciales y manifiesto

- La franja de credenciales vive dentro del hero. Su fondo es transparente con
  `backdrop-filter`, borde interior y fallback sólido bajo
  `prefers-reduced-transparency`.
- El header conserva el mismo ancho de columna para el logotipo completo y el
  símbolo sticky. El cambio de marca ya no desplaza los enlaces del nav.
- El pre-footer de contacto se elimina. Solo permanece `Who we work with` con
  los tres públicos aprobados; los datos de contacto y el CTA siguen en el
  footer.
- El footer ya no muestra `Proposal build, sample data throughout`.
- El manifiesto adopta `Regenerative Cacao at Origin` como frase interactiva.
  Cada letra puede convertirse en una imagen inline durante hover, ocultando
  solo ese glifo. Sin subrayado, con escala tipográfica 20% mayor y wrapping por
  palabras. En touch y reduced motion la frase queda estática y completa.
