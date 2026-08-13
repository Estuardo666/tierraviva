export type Locale = "en" | "es";

export const localePaths: Record<Locale, string> = {
	en: "/",
	es: "/es/",
};

export const copy = {
	en: {
		meta: {
			title: "Tierra Viva Cacao Co. Regenerative Cacao at Origin.",
			description:
				"Nacional fino de aroma cacao from Chone, Manabí, Ecuador. Centralized fermentation, lot-level traceability, regenerative agroforestry.",
		},
		skip: "Skip to content",
		nav: {
			logo: "Tierra Viva, Regenerative Cacao at Origin",
			label: "Main navigation",
			menu: "Menu",
			language: "Language",
			links: [
				["#origin", "Origin"],
				["#process", "Process"],
				["#cacao", "Cacao"],
				["#traceability", "Traceability"],
				["#contact", "Contact"],
			],
			request: "Request samples",
		},
		hero: {
			eyebrow: "Chone, Manabí · Ecuador",
			title: "Regenerative Cacao at Origin",
			subtitle: "From the land of Manabí, Ecuador, to the world.",
			cta: "Explore the origin",
		},
		credentials: {
			label: "Cacao credentials",
			items: [
				["Origin", "Chone, Manabí"],
				["Variety", "Nacional, fino de aroma"],
				["Post-harvest", "Centralized fermentation"],
				["Traceability", "Lot level"],
			],
		},
		value: [
			{
				title: "Grown by the people who read the land",
				body: "Our own farm and a group of partner growers work the same agroforestry system: native shade, living soil, cacao under canopy rather than in place of it.",
			},
			{
				title: "Fermented in one place, to one protocol",
				body: "Pods from every plot converge on a single fermentation facility. One protocol, documented and measured, so a lot tastes the way the last one did.",
			},
		],
		manifesto: {
			opening:
				"Cacao begins here, where farmers read the land, care for the soil, and pass down knowledge from one generation to the next.",
			phrase: "Regenerative Cacao at Origin",
			body: "At Tierra Viva, great cacao starts with people, biodiversity, and regenerative agroforestry systems that allow both forests and communities to thrive.",
			close: "From the land of Manabí, Ecuador, to the world.",
		},
		origin: {
			alt: "Cacao trees under native shade on the Tierra Viva farm in Manabí.",
			carouselAlts: [
				"Cacao trees under native shade on the Tierra Viva farm in Manabí.",
				"Cacao beans ready for selection.",
				"A cacao bean from Tierra Viva.",
			],
			carouselLabel: "Origin story images",
			previous: "Previous image",
			next: "Next image",
			title: "Founded in 2025, on the coast of Ecuador",
			body1:
				"Tierra Viva works in Chone, in the province of Manabí, on the Pacific side of Ecuador. The company was formed to change where the value of cacao is captured: to structure quality at origin instead of shipping raw beans and buying the grading back.",
			body2:
				"That means investing in the post-harvest stage most farms cannot fund alone, and paying growers against measured quality rather than a commodity reference.",
			pending: "Founding narrative to be completed with the client.",
		},
		flower: {
			alt: "Macro photograph of a cacao flower, a few millimetres across.",
			caption: "of flowers become pods",
			body1:
				"A cacao flower measures only a few millimeters. Its pollination depends on tiny midges that thrive only in living soils and balanced ecosystems. A single tree can produce hundreds of flowers. Less than 5% will become pods.",
			body2:
				"Cacao productivity does not begin at harvest. It begins here; in the micro-life of the forest floor. At Tierra Viva, we work from the root: regenerative agroforestry, functional biodiversity, and structure at origin.",
			kicker: "Because quality is not manufactured. It is cultivated.",
		},
		process: {
			title: "From canopy to lot code",
			steps: [
				{
					title: "Regenerative growing",
					body: "Cacao under native shade trees, mixed with fruit and timber species. Soil cover stays undisturbed so the midges that pollinate the flower survive.",
				},
				{
					title: "Harvest",
					body: "Pods cut by hand at colour break, plot by plot. Under-ripe and diseased pods are separated before they ever reach the boxes.",
				},
				{
					title: "Centralized fermentation",
					body: "Wooden cascade boxes at one facility. Turned on schedule, temperature and pH logged per batch across five to six days.",
				},
				{
					title: "Drying",
					body: "Sun-dried on raised beds over six to eight days, raked in a fixed rotation to bring moisture down without case hardening.",
				},
				{
					title: "Quality control and lot release",
					body: "Cut test, moisture and bean count on every lot. The result travels with the beans as a lot code, not a claim.",
				},
			],
		},
		product: {
			eyebrow: "The cacao",
			title: "Nacional, fino de aroma",
			mock: "Sample figures. Final specification pending laboratory results.",
			headline: [
				["≤ 7.0%", "Moisture"],
				["≥ 85%", "Well fermented"],
				["1 t", "Minimum order"],
				["FOB GYE", "Incoterm"],
			],
			sensoryLabel: "Notes",
			sensory: "Floral, ripe fruit, light nuts, low bitterness",
			open: "Full specification",
			close: "Hide specification",
			groups: [
				{
					title: "Growing and post-harvest",
					rows: [
						["Variety", "Nacional, fino de aroma"],
						["Origin", "Chone, Manabí, Ecuador"],
						["Fermentation", "5 to 6 days, cascade boxes"],
						["Drying", "Sun-dried, 6 to 8 days"],
					],
				},
				{
					title: "Bean and quality",
					rows: [
						["Moisture", "≤ 7.0%"],
						["Cut test, well fermented", "≥ 85%"],
						["Bean count", "90 to 100 per 100 g"],
						["Defects", "≤ 3%"],
					],
				},
				{
					title: "Commercial",
					rows: [
						["Presentation", "65 kg jute, food-grade liner"],
						["Minimum order", "1 tonne"],
						["Incoterms", "FOB Guayaquil or EXW Chone"],
						["Harvest windows", "Mar to Jul, Oct to Dec"],
					],
				},
			],
		},
		traceability: {
			eyebrow: "Traceability",
			title: "Every bag carries its own address",
			body1:
				"A lot code is assigned at fermentation and stays with the beans through drying, quality control and shipping. Given the code, we can name the plots the pods came from, the days the batch was turned, and the cut test it passed.",
			body2: "For a maker, that is the difference between a story about origin and a record of it.",
			mock: "Example code",
			parts: [
				["TV", "Tierra Viva"],
				["CH", "Chone"],
				["2026", "Harvest year"],
				["014", "Fermentation lot"],
			],
		},
		allies: {
			title: "The growers",
			items: [
				{
					name: "Finca La Herradura",
					place: "Río Grande, Chone",
					body: "Eight hectares under mixed canopy, worked by the Zambrano family since 1998. Joined the centralized fermentation programme in its first season.",
				},
				{
					name: "Asociación San Lorenzo",
					place: "Canuto, Manabí",
					body: "Fourteen smallholders pooling harvest into shared collection days, which is what makes a single fermentation protocol possible across small plots.",
				},
				{
					name: "Finca El Aromo",
					place: "Tosagua, Manabí",
					body: "A recovery plot: old commodity-clone cacao being grafted back to Nacional, with shade species planted between rows.",
				},
			],
			certLabel: "Certifications in process",
			certs: ["Organic", "Rainforest Alliance", "Export registry", "Laboratory analysis"],
		},
		cta: {
			eyebrow: "For chocolate makers",
			title: "Bring origin into the conversation",
			subtitle: "Request a sample from the current lot.",
			button: "Request samples",
		},
		contact: {
			eyebrow: "Who we work with",
			audiences: ["Fine chocolate brands", "Craft chocolate makers", "Importers and traders"],
		},
		footer: {
			back: "Tierra Viva Cacao Co., back to top",
			line: "Cacao that carries its own record, from Manabí to your factory.",
			contact: "Get in touch",
			page: "On this page",
			where: "Where we are",
			origin: "Origin",
			process: "Process",
			cacao: "The cacao",
			traceability: "Traceability",
			coast: "Pacific coast of Ecuador",
			harvest: "Harvest: March to July, October to December",
		},
		modal: {
			close: "Close",
			eyebrow: "Request samples",
			title: "Tell us what you are buying for",
			intro:
				"Volume and window are enough to start. We come back with availability, the current lot specification, and samples.",
			name: "Name",
			company: "Company",
			country: "Country",
			email: "Email",
			volume: "Estimated volume",
			volumePlaceholder: "Tonnes per year",
			help: "Approximate is fine. It sets which lots we quote.",
			message: "Message",
			submit: "Send enquiry",
			required: "This one is required.",
			invalidEmail: "Check the email address.",
			demo: "Demo form. Sending is wired up once the real inbox exists.",
		},
	},
	es: {
		meta: {
			title: "Tierra Viva Cacao Co. Cacao regenerativo desde el origen.",
			description:
				"Cacao Nacional fino de aroma de Chone, Manabí, Ecuador. Fermentación centralizada, trazabilidad por lote y agroforestería regenerativa.",
		},
		skip: "Ir al contenido",
		nav: {
			logo: "Tierra Viva, cacao regenerativo desde el origen",
			label: "Navegación principal",
			menu: "Menú",
			language: "Idioma",
			links: [
				["#origin", "Origen"],
				["#process", "Proceso"],
				["#cacao", "Cacao"],
				["#traceability", "Trazabilidad"],
				["#contact", "Contacto"],
			],
			request: "Solicitar muestras",
		},
		hero: {
			eyebrow: "Chone, Manabí · Ecuador",
			title: "Cacao regenerativo desde el origen",
			subtitle: "Desde la tierra de Manabí, Ecuador, hacia el mundo.",
			cta: "Explora el origen",
		},
		credentials: {
			label: "Credenciales del cacao",
			items: [
				["Origen", "Chone, Manabí"],
				["Variedad", "Nacional, fino de aroma"],
				["Poscosecha", "Fermentación centralizada"],
				["Trazabilidad", "Por lote"],
			],
		},
		value: [
			{
				title: "Cultivado por quienes saben leer la tierra",
				body: "Nuestra finca y un grupo de agricultores aliados trabajan bajo el mismo sistema agroforestal: sombra nativa, suelo vivo y cacao bajo el dosel, no en lugar de él.",
			},
			{
				title: "Fermentado en un solo lugar, bajo un solo protocolo",
				body: "Las mazorcas de cada parcela convergen en una sola planta de fermentación. Un protocolo documentado y medido para que un lote tenga la consistencia del anterior.",
			},
		],
		manifesto: {
			opening:
				"El cacao comienza aquí, donde los agricultores leen la tierra, cuidan el suelo y transmiten sus conocimientos de una generación a la siguiente.",
			phrase: "Cacao regenerativo desde el origen",
			body: "En Tierra Viva, el gran cacao comienza con las personas, la biodiversidad y sistemas agroforestales regenerativos que permiten prosperar tanto a los bosques como a las comunidades.",
			close: "Desde la tierra de Manabí, Ecuador, hacia el mundo.",
		},
		origin: {
			alt: "Árboles de cacao bajo sombra nativa en la finca Tierra Viva, en Manabí.",
			carouselAlts: [
				"Árboles de cacao bajo sombra nativa en la finca Tierra Viva, en Manabí.",
				"Granos de cacao listos para selección.",
				"Un grano de cacao de Tierra Viva.",
			],
			carouselLabel: "Imágenes de nuestra historia",
			previous: "Imagen anterior",
			next: "Imagen siguiente",
			title: "Fundada en 2025, en la costa de Ecuador",
			body1:
				"Tierra Viva trabaja en Chone, provincia de Manabí, en la costa del Pacífico ecuatoriano. La empresa nació para cambiar el lugar donde se captura el valor del cacao: estructurar la calidad desde el origen en vez de exportar granos sin procesar y comprar después su clasificación.",
			body2:
				"Esto implica invertir en la poscosecha que la mayoría de las fincas no puede financiar por sí sola y pagar a los productores según una calidad medible, no según una referencia de mercado.",
			pending: "Relato fundacional pendiente de completar con el cliente.",
		},
		flower: {
			alt: "Fotografía macro de una flor de cacao de apenas unos milímetros.",
			caption: "de las flores se convierten en mazorcas",
			body1:
				"Una flor de cacao mide apenas unos milímetros. Su polinización depende de pequeñas mosquillas que solo prosperan en suelos vivos y ecosistemas equilibrados. Un solo árbol puede producir cientos de flores. Menos del 5% se convertirán en mazorcas.",
			body2:
				"El rendimiento del cacao no comienza en la cosecha. Comienza aquí, en la microvida del suelo del bosque. En Tierra Viva, trabajamos desde la raíz: agroforestería regenerativa, biodiversidad funcional y estructura en origen.",
			kicker: "Porque la calidad no se fabrica. Se cultiva.",
		},
		process: {
			title: "Del dosel al código de lote",
			steps: [
				{
					title: "Cultivo regenerativo",
					body: "Cacao bajo árboles de sombra nativos, combinado con especies frutales y maderables. La cobertura del suelo permanece intacta para proteger a las mosquillas que polinizan la flor.",
				},
				{
					title: "Cosecha",
					body: "Las mazorcas se cortan a mano al alcanzar su color de madurez, parcela por parcela. Las mazorcas inmaduras o enfermas se separan antes de llegar a las cajas.",
				},
				{
					title: "Fermentación centralizada",
					body: "Cajas de madera en cascada dentro de una sola planta. Se voltean según el protocolo y se registran temperatura y pH por lote durante cinco o seis días.",
				},
				{
					title: "Secado",
					body: "Secado al sol sobre camas elevadas durante seis a ocho días, con una rotación fija para reducir la humedad sin endurecer la superficie del grano.",
				},
				{
					title: "Control de calidad y liberación del lote",
					body: "Prueba de corte, humedad y conteo de granos en cada lote. El resultado viaja con el cacao como un código de lote, no como una promesa.",
				},
			],
		},
		product: {
			eyebrow: "El cacao",
			title: "Nacional, fino de aroma",
			mock: "Datos de muestra. Especificación final pendiente de resultados de laboratorio.",
			headline: [
				["≤ 7,0%", "Humedad"],
				["≥ 85%", "Bien fermentado"],
				["1 t", "Pedido mínimo"],
				["FOB GYE", "Incoterm"],
			],
			sensoryLabel: "Notas",
			sensory: "Floral, fruta madura, frutos secos suaves y bajo amargor",
			open: "Especificación completa",
			close: "Ocultar especificación",
			groups: [
				{
					title: "Cultivo y poscosecha",
					rows: [
						["Variedad", "Nacional, fino de aroma"],
						["Origen", "Chone, Manabí, Ecuador"],
						["Fermentación", "5 a 6 días, cajas en cascada"],
						["Secado", "Al sol, 6 a 8 días"],
					],
				},
				{
					title: "Grano y calidad",
					rows: [
						["Humedad", "≤ 7,0%"],
						["Prueba de corte, bien fermentado", "≥ 85%"],
						["Conteo de granos", "90 a 100 por 100 g"],
						["Defectos", "≤ 3%"],
					],
				},
				{
					title: "Comercial",
					rows: [
						["Presentación", "Yute de 65 kg, liner grado alimentario"],
						["Pedido mínimo", "1 tonelada"],
						["Incoterms", "FOB Guayaquil o EXW Chone"],
						["Ventanas de cosecha", "Mar a jul, oct a dic"],
					],
				},
			],
		},
		traceability: {
			eyebrow: "Trazabilidad",
			title: "Cada saco lleva su propia dirección",
			body1:
				"El código de lote se asigna durante la fermentación y acompaña a los granos durante el secado, el control de calidad y el envío. A partir de ese código podemos identificar las parcelas de origen, los días de volteo del lote y la prueba de corte que aprobó.",
			body2:
				"Para un fabricante, esa es la diferencia entre contar una historia sobre el origen y tener un registro de él.",
			mock: "Código de ejemplo",
			parts: [
				["TV", "Tierra Viva"],
				["CH", "Chone"],
				["2026", "Año de cosecha"],
				["014", "Lote de fermentación"],
			],
		},
		allies: {
			title: "Los productores",
			items: [
				{
					name: "Finca La Herradura",
					place: "Río Grande, Chone",
					body: "Ocho hectáreas bajo dosel mixto, trabajadas por la familia Zambrano desde 1998. Se integró al programa de fermentación centralizada en su primera temporada.",
				},
				{
					name: "Asociación San Lorenzo",
					place: "Canuto, Manabí",
					body: "Catorce pequeños productores reúnen su cosecha en jornadas compartidas. Así es posible aplicar un solo protocolo de fermentación en parcelas pequeñas.",
				},
				{
					name: "Finca El Aromo",
					place: "Tosagua, Manabí",
					body: "Una parcela en recuperación: el cacao de clones comerciales antiguos se reinjerta con Nacional y se plantan especies de sombra entre las hileras.",
				},
			],
			certLabel: "Certificaciones en proceso",
			certs: ["Orgánico", "Rainforest Alliance", "Registro de exportación", "Análisis de laboratorio"],
		},
		cta: {
			eyebrow: "Para fabricantes de chocolate",
			title: "Lleva el origen a la conversación",
			subtitle: "Solicita una muestra del lote actual.",
			button: "Solicitar muestras",
		},
		contact: {
			eyebrow: "Con quién trabajamos",
			audiences: ["Marcas de chocolate fino", "Productores de chocolate artesanal", "Importadores y comercializadores"],
		},
		footer: {
			back: "Tierra Viva Cacao Co., volver arriba",
			line: "Cacao con un registro propio, desde Manabí hasta tu fábrica.",
			contact: "Hablemos",
			page: "En esta página",
			where: "Dónde estamos",
			origin: "Origen",
			process: "Proceso",
			cacao: "El cacao",
			traceability: "Trazabilidad",
			coast: "Costa del Pacífico de Ecuador",
			harvest: "Cosecha: marzo a julio, octubre a diciembre",
		},
		modal: {
			close: "Cerrar",
			eyebrow: "Solicitar muestras",
			title: "Cuéntanos qué necesitas comprar",
			intro:
				"El volumen y la ventana de compra bastan para comenzar. Te responderemos con disponibilidad, la especificación del lote actual y muestras.",
			name: "Nombre",
			company: "Empresa",
			country: "País",
			email: "Correo electrónico",
			volume: "Volumen estimado",
			volumePlaceholder: "Toneladas por año",
			help: "Un aproximado es suficiente. Nos permite saber qué lotes cotizar.",
			message: "Mensaje",
			submit: "Enviar consulta",
			required: "Este campo es obligatorio.",
			invalidEmail: "Revisa la dirección de correo.",
			demo: "Formulario de demostración. El envío se activará cuando exista el buzón definitivo.",
		},
	},
} as const;
