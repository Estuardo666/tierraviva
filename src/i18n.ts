export type Locale = "en" | "es";

export const localePaths: Record<Locale, string> = {
	en: "/",
	es: "/es/",
};

export const copy = {
	en: {
		meta: {
			title: "Tierra Viva Cacao Co. Premium cacao from a living system.",
			description:
				"Premium Nacional fino de aroma cacao from Manabí, Ecuador. Farmer Field School, syntropic agroforestry, adaptive fermentation and batch-code traceability.",
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
			request: "Request a batch sample",
		},
		hero: {
			eyebrow: "Manabí, Ecuador · Farmer Field School",
			title: "Premium cacao, grown in a living system",
			subtitle: "Nacional genetics, syntropic agroforestry and adaptive fermentation.",
			cta: "See how we work",
		},
		credentials: {
			label: "Cacao credentials",
			items: [
				["Origin", "Manabí, Ecuador"],
				["Genetics", "Nacional, fino de aroma"],
				["Growing system", "Syntropic agroforestry"],
				["Post-harvest", "Adaptive fermentation"],
			],
		},
		value: [
			{
				title: "Everything starts with the farmer",
				body: "Through our Farmer Field School, farmers in Manabí learn to build resilient syntropic agroforestry systems that regenerate soil and reduce dependence on outside chemical inputs.",
			},
			{
				title: "Centralized post-harvest, adapted to each batch",
				body: "We bring cacao from these systems together so there is enough volume for a careful fermentation. We adapt the process to each batch and work with its microorganisms.",
			},
		],
		manifesto: {
			opening:
				"Everything begins with helping farmers: teaching the system, protecting the soil, and making sure the work behind every pod is recognized.",
			phrase: "Premium from a living system",
			body: "Our cacao is grown through Farmer Field School in syntropic agroforestry systems that regenerate soil, support biodiversity and care for the people and water around them.",
			close: "Premium starts in the land and continues through every stage of care.",
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
			title: "Created to recognize the work behind every pod",
			body1:
				"Tierra Viva was created to give farmers in our program a solution. A small plot can fall short of the volume needed for a strong fermentation cycle, so the extra care behind a syntropic system can go unpaid at the collection center.",
			body2:
				"We bring that cacao together, centralize the post-harvest work and pay a premium for what the farmer has built: its Nacional genetics, regenerated soil, biodiversity, water and care for the people who work it.",
			pending: "Farmer Field School · Syntropic agroforestry · Manabí",
		},
		flower: {
			alt: "Macro photograph of a cacao flower, a few millimetres across.",
			caption: "of flowers become pods",
			body1:
				"A cacao flower measures only a few millimeters. Its pollination depends on tiny midges that thrive only in living soils and balanced ecosystems. A single tree can produce hundreds of flowers. Less than 5% will become pods.",
			body2:
				"Cacao productivity starts before harvest, in the micro-life of the forest floor. At Tierra Viva, we work from the root through regenerative agroforestry and functional biodiversity.",
			kicker: "Quality is cultivated.",
		},
		process: {
			title: "From living soil to batch code",
			steps: [
				{
					title: "Farmer Field School",
					body: "We teach farmers in Manabí to implement syntropic agroforestry: resilient systems that regenerate soil and reduce dependence on outside chemical inputs.",
				},
				{
					title: "Cacao arrives in baba",
					body: "Cacao from the program arrives in baba at our collection center. We gather the volume needed for fermentation to reach the temperatures the cacao needs.",
				},
				{
					title: "Adaptive fermentation",
					body: "We listen to each batch and adapt the process to its needs, working with the microorganisms from the soil into fermentation.",
				},
				{
					title: "Protected sun drying",
					body: "We dry the cacao in the sun inside UV-protected marquesinas, caring for the seeds and protecting the quality built through every previous stage.",
				},
				{
					title: "Batch code and premium recognition",
					body: "A batch code keeps the record of the plots, the fermentation turns and the cut test it passed. The premium recognizes the farmer, the cacao and the living system behind them.",
				},
			],
		},
		product: {
			eyebrow: "The cacao",
			title: "Premium Nacional, fino de aroma",
			mock: "Commercial specifications are defined by batch.",
			headline: [
				["Nacional", "Genetics"],
				["Premium", "Paid at origin"],
				["Syntropic", "Growing system"],
				["Batch code", "Traceability"],
			],
			sensoryLabel: "Value",
			sensory: "Genetics, living soils, farmer recognition and a careful post-harvest process.",
			open: "What sits behind the batch",
			close: "Hide details",
			groups: [
				{
					title: "Growing and post-harvest",
					rows: [
						["Variety", "Nacional, fino de aroma"],
						["Growing system", "Syntropic agroforestry"],
						["Training", "Farmer Field School"],
						["Fermentation", "Adaptive, by batch"],
					],
				},
				{
					title: "Quality and recognition",
					rows: [
						["Origin", "Manabí, Ecuador"],
						["Arrival", "Cacao in baba"],
						["Drying", "Sun-dried in UV-protected marquesinas"],
						["Recognition", "Premium paid at origin"],
					],
				},
				{
					title: "Living system",
					rows: [
						["Soil", "Regenerated while reducing dependence on outside chemical inputs"],
						["Biodiversity", "Habitat for insects, birds and mammals"],
						["Water", "Cultivation that cares for water"],
						["People", "Care for the people who work it"],
					],
				},
			],
		},
		traceability: {
			eyebrow: "Traceability",
			title: "Every batch carries its own record",
			body1:
				"A batch code is assigned at fermentation and stays with the beans through drying, quality control and shipping. Given the code, we can name the plots the pods came from, the days the batch was turned, and the cut test it passed.",
			body2: "For a maker, that is the difference between a story about origin and a record of it.",
			mock: "Example batch code",
			parts: [
				["TV", "Tierra Viva"],
				["MAN", "Manabí"],
				["2026", "Harvest year"],
				["014", "Batch"],
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
			eyebrow: "Premium begins in the field",
			title: "Taste the work behind every pod",
			subtitle: "Request a batch sample.",
			button: "Request a batch sample",
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
			eyebrow: "Request a batch sample",
			title: "Tell us what you need",
			intro:
				"Volume and timing are enough to start. We come back with current batch availability and samples.",
			name: "Name",
			company: "Company",
			country: "Country",
			email: "Email",
			volume: "Estimated volume",
			volumePlaceholder: "Tonnes per year",
			help: "Approximate is fine. It sets which lots we quote.",
			message: "Message",
			submit: "Request sample",
			required: "This one is required.",
			invalidEmail: "Check the email address.",
			demo: "Demo form. Sending is wired up once the real inbox exists.",
		},
	},
	es: {
		meta: {
			title: "Tierra Viva Cacao Co. Cacao premium desde un sistema vivo.",
			description:
				"Cacao premium Nacional fino de aroma de Manabí, Ecuador. Farmer Field School, agroforestería sintrópica, fermentación adaptativa y trazabilidad por código de lote.",
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
			request: "Solicitar una muestra del lote",
		},
		hero: {
			eyebrow: "Manabí, Ecuador · Farmer Field School",
			title: "Cacao premium, cultivado en un sistema vivo",
			subtitle: "Genética Nacional, agroforestería sintrópica y fermentación adaptativa.",
			cta: "Conoce cómo trabajamos",
		},
		credentials: {
			label: "Credenciales del cacao",
			items: [
				["Origen", "Manabí, Ecuador"],
				["Genética", "Nacional, fino de aroma"],
				["Sistema de cultivo", "Agroforestería sintrópica"],
				["Poscosecha", "Fermentación adaptativa"],
			],
		},
		value: [
			{
				title: "Todo nace de ayudar a los agricultores",
				body: "A través de nuestro Farmer Field School, enseñamos a agricultores de Manabí a implementar la agroforestería sintrópica para tener sistemas más resilientes y regenerar sus suelos sin depender de insumos químicos externos.",
			},
			{
				title: "Poscosecha centralizada, adaptada a cada lote",
				body: "Reunimos el cacao de estos sistemas para alcanzar el volumen necesario para una buena fermentación. Adaptamos el proceso a cada lote y acompañamos el trabajo de sus microorganismos.",
			},
		],
		manifesto: {
			opening:
				"Todo nace de ayudar a los agricultores: enseñar el sistema, cuidar el suelo y reconocer el trabajo detrás de cada mazorca.",
			phrase: "Premium desde un sistema vivo",
			body: "Nuestro cacao se cultiva a través del Farmer Field School en sistemas de agroforestería sintrópica que regeneran el suelo, sostienen la biodiversidad y cuidan el agua y a las personas.",
			close: "El premium empieza en la tierra y continúa en cada etapa del cuidado.",
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
			title: "Creada para reconocer el trabajo detrás de cada mazorca",
			body1:
				"Tierra Viva nació para dar una solución a los agricultores de nuestro programa. Una parcela pequeña puede quedarse corta frente al volumen necesario para completar una buena fermentación, y el esfuerzo adicional detrás de un sistema sintrópico puede quedar sin reconocimiento en el centro de acopio.",
			body2:
				"Reunimos ese cacao, centralizamos la poscosecha y pagamos un premium por lo que el agricultor ha construido: su genética Nacional, el suelo regenerado, la biodiversidad, el agua y el cuidado de las personas que lo trabajan.",
			pending: "Farmer Field School · Agroforestería sintrópica · Manabí",
		},
		flower: {
			alt: "Fotografía macro de una flor de cacao de apenas unos milímetros.",
			caption: "de las flores se convierten en mazorcas",
			body1:
				"Una flor de cacao mide apenas unos milímetros. Su polinización depende de pequeñas mosquillas que solo prosperan en suelos vivos y ecosistemas equilibrados. Un solo árbol puede producir cientos de flores. Menos del 5% se convertirán en mazorcas.",
			body2:
				"El rendimiento del cacao empieza antes de la cosecha, en la microvida del suelo del bosque. En Tierra Viva, trabajamos desde la raíz mediante agroforestería regenerativa y biodiversidad funcional.",
			kicker: "La calidad se cultiva.",
		},
		process: {
			title: "Del suelo vivo al código de lote",
			steps: [
				{
					title: "Farmer Field School",
					body: "Enseñamos a agricultores de Manabí a implementar la agroforestería sintrópica: sistemas resilientes que regeneran el suelo y reducen la dependencia de insumos químicos externos.",
				},
				{
					title: "El cacao llega en baba",
					body: "El cacao del programa llega en baba a nuestro centro de acopio. Reunimos el volumen necesario para que la fermentación alcance las temperaturas que necesita.",
				},
				{
					title: "Fermentación adaptativa",
					body: "Escuchamos cada lote y adaptamos el proceso a sus necesidades, acompañando el trabajo de los microorganismos desde el suelo hasta la fermentación.",
				},
				{
					title: "Secado al sol protegido",
					body: "Secamos el cacao al sol dentro de marquesinas con protección UV, cuidando las semillas y protegiendo la calidad construida en cada etapa anterior.",
				},
				{
					title: "Código de lote y reconocimiento premium",
					body: "El código de lote conserva el registro de las parcelas, los volteos de la fermentación y la prueba de corte que aprobó. El premium reconoce al agricultor, al cacao y al sistema vivo detrás de ellos.",
				},
			],
		},
		product: {
			eyebrow: "El cacao",
			title: "Premium Nacional, fino de aroma",
			mock: "Las especificaciones comerciales se definen por lote.",
			headline: [
				["Nacional", "Genética"],
				["Premium", "Pagado en origen"],
				["Sintrópico", "Sistema de cultivo"],
				["Código de lote", "Trazabilidad"],
			],
			sensoryLabel: "Valor",
			sensory: "Genética, suelo vivo, reconocimiento al agricultor y una poscosecha cuidada.",
			open: "Qué hay detrás del lote",
			close: "Ocultar detalles",
			groups: [
				{
					title: "Cultivo y poscosecha",
					rows: [
						["Variedad", "Nacional, fino de aroma"],
						["Sistema de cultivo", "Agroforestería sintrópica"],
						["Formación", "Farmer Field School"],
						["Fermentación", "Adaptativa, por lote"],
					],
				},
				{
					title: "Calidad y reconocimiento",
					rows: [
						["Origen", "Manabí, Ecuador"],
						["Llegada", "Cacao en baba"],
						["Secado", "Al sol en marquesinas con protección UV"],
						["Reconocimiento", "Premium pagado en origen"],
					],
				},
				{
					title: "Sistema vivo",
					rows: [
						["Suelo", "Regenerado al reducir la dependencia de insumos químicos externos"],
						["Biodiversidad", "Hogar para insectos, aves y mamíferos"],
						["Agua", "Un cultivo que cuida el agua"],
						["Personas", "Cuidado para quienes lo trabajan"],
					],
				},
			],
		},
		traceability: {
			eyebrow: "Trazabilidad",
			title: "Cada lote lleva su propio registro",
			body1:
				"El código de lote se asigna durante la fermentación y acompaña a los granos durante el secado, el control de calidad y el envío. A partir de ese código podemos identificar las parcelas de origen, los días de volteo del lote y la prueba de corte que aprobó.",
			body2:
				"Para un fabricante, esa es la diferencia entre contar una historia sobre el origen y tener un registro de él.",
			mock: "Código de lote de ejemplo",
			parts: [
				["TV", "Tierra Viva"],
				["MAN", "Manabí"],
				["2026", "Año de cosecha"],
				["014", "Lote"],
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
			eyebrow: "El premium comienza en la tierra",
			title: "Prueba el trabajo detrás de cada mazorca",
			subtitle: "Solicita una muestra del lote.",
			button: "Solicitar una muestra del lote",
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
			eyebrow: "Solicitar una muestra del lote",
			title: "Cuéntanos qué necesitas",
			intro:
				"El volumen y el momento de compra bastan para comenzar. Te responderemos con disponibilidad del lote actual y muestras.",
			name: "Nombre",
			company: "Empresa",
			country: "País",
			email: "Correo electrónico",
			volume: "Volumen estimado",
			volumePlaceholder: "Toneladas por año",
			help: "Un aproximado es suficiente. Nos permite saber qué lotes cotizar.",
			message: "Mensaje",
			submit: "Solicitar muestra",
			required: "Este campo es obligatorio.",
			invalidEmail: "Revisa la dirección de correo.",
			demo: "Formulario de demostración. El envío se activará cuando exista el buzón definitivo.",
		},
	},
} as const;
