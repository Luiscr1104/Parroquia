export interface Santo {
	slug: string;
	title: string;
	image: string;
	description: string;
	fullBiography: string;
	class?: string;
}

export const santos: Santo[] = [
	{
		slug: "san-isidro-labrador",
		title: "San Isidro Labrador",
		image: "/images/santos/San Isidro Labrador.webp",
		description:
			"Nacido en Madrid alrededor del año 1070, es el modelo de fe, trabajo y caridad. Patrón de los agricultores, su vida nos recuerda que cada labor puede ser un acto de adoración.",
		fullBiography: "San Isidro Labrador (c. 1070 - 1130) fue un campesino español que trabajó la tierra en las afueras de Madrid. Su vida es un testimonio de cómo la santidad se puede alcanzar en la vida ordinaria a través del trabajo honesto y la oración constante. Se cuenta que mientras él oraba, los ángeles le ayudaban a arar el campo. Su caridad con los pobres y los animales era legendaria. Fue canonizado en 1622 y es el patrón de Madrid y de los agricultores del mundo entero.",
		class: "bento-large",
	},
	{
		slug: "santa-barbara",
		title: "Santa Bárbara",
		image: "/images/santos/Santa Barbara.jpg.webp",
		description:
			"Mártir del siglo III, símbolo de valentía y fe inquebrantable. Invocada como protectora contra tormentas y rayos, su legado inspira a enfrentar la adversidad con coraje.",
		fullBiography: "Santa Bárbara fue una virgen y mártir cristiana del siglo III. Según la tradición, fue encerrada en una torre por su padre pagano para evitar que se convirtiera al cristianismo. A pesar de esto, recibió el bautismo en secreto. Cuando su padre descubrió su fe, la entregó a las autoridades. Tras sufrir diversos tormentos, fue decapitada por su propio padre, quien murió fulminado por un rayo poco después. Por ello, es invocada contra el rayo, el fuego y las muertes repentinas.",
		class: "bento-tall",
	},
	{
		slug: "santa-lucia",
		title: "Santa Lucía",
		image: "/images/santos/San Lucia.jpg.webp",
		description:
			"Nacida en Siracusa, su nombre significa 'luz'. Patrona de los ciegos, su vida es un testimonio de resistencia y dedicación total a Dios en tiempos de persecución.",
		fullBiography: "Santa Lucía (283–304) fue una mártir cristiana que nació en Siracusa, Sicilia. Durante la persecución de Diocleciano, Lucía consagró su virginidad a Dios y repartió su dote entre los pobres. Fue denunciada por su pretendiente y sufrió martirio. Una leyenda popular cuenta que le arrancaron los ojos, pero que Dios se los devolvió más hermosos. Es la santa patrona de la vista y su fiesta se celebra el 13 de diciembre.",
	},
	{
		slug: "santa-ana",
		title: "Santa Ana",
		image: "/images/santos/Santa Ana.jpg.webp",
		description:
			"Madre de la Virgen María y abuela de Jesús. Patrona de las madres y educadores, su vida refleja la importancia de la fe y la educación en la familia.",
		fullBiography: "Santa Ana es, según la tradición cristiana y los evangelios apócrifos, la madre de la Virgen María y abuela materna de Jesús. Su nombre significa 'gracia'. Pasó muchos años de esterilidad antes de concebir a María, lo que fue visto como un milagro de Dios en respuesta a sus constantes oraciones. Es modelo de paciencia y fe, y es considerada la protectora de los abuelos, las mujeres embarazadas y los educadores.",
	},
	{
		slug: "san-francisco-de-asis",
		title: "San Francisco de Asís",
		image: "/images/santos/SAN FRANCSCO DE ASIS.webp",
		description:
			"El santo de la humildad y la naturaleza. Fundador de la Orden Franciscana, nos enseñó a ver la presencia de Dios en todas las criaturas y a vivir en paz.",
		fullBiography: "San Francisco de Asís (1181–1226) renunció a una vida de riqueza para seguir a Cristo en la pobreza absoluta. Fundó la Orden de los Frailes Menores y es conocido por su profundo amor a toda la creación, a la que llamaba 'hermanos' y 'hermanas'. Fue el primer santo documentado en recibir los estigmas de Cristo. Su ejemplo de humildad, paz y fraternidad universal sigue inspirando a millones hoy en día. Es el patrón de la ecología.",
		class: "bento-wide",
	},
	{
		slug: "san-rafael-arcangel",
		title: "San Rafael Arcángel",
		image: "/images/santos/San Rafael Arcangel.webp",
		description:
			"Su nombre significa 'Dios sana'. Guía de viajeros y medicina de Dios, es el arcángel que acompaña y protege en los momentos de incertidumbre y dolor.",
		fullBiography: "San Rafael es uno de los tres arcángeles mencionados por nombre en las Sagradas Escrituras (Libro de Tobías). Acompañó al joven Tobías en su viaje, protegiéndolo de peligros y sanando la ceguera de su padre. Como 'Medicina de Dios', intercede por la salud física y espiritual. Es patrón de los viajeros, los médicos, los enfermeros y los que buscan un buen cónyuge.",
	},
	{
		slug: "san-juan-evangelista",
		title: "San Juan Evangelista",
		image: "/images/santos/San Juan Evangelista.jpg.webp",
		description:
			"El 'discípulo amado' de Jesús. Autor del cuarto evangelio, sus escritos enfatizan el amor divino y la naturaleza espiritual de nuestra fe.",
		fullBiography: "San Juan fue el más joven de los doce apóstoles y el único que permaneció al pie de la cruz junto a María. Jesús le encomendó el cuidado de su Madre. Se le atribuyen el cuarto Evangelio, tres epístolas y el Apocalipsis. Sus escritos son profundamente teológicos y se centran en el misterio de la Encarnación y el mandamiento del amor: 'Dios es amor'. Fue el único apóstol que no murió mártir, sino de vejez en Éfeso.",
	},
	{
		slug: "san-juan-bautista",
		title: "San Juan Bautista",
		image: "/images/santos/San Juan Bautista 2.webp",
		description:
			"El precursor del Señor. Su voz en el desierto llamó al arrepentimiento y preparó el camino para la llegada de Jesucristo, el Salvador del mundo.",
		fullBiography: "San Juan Bautista fue el profeta que anunció la llegada del Mesías. Hijo de Zacarías e Isabel, nació seis meses antes que Jesús. Vivió en el desierto una vida de ascesis y predicó un bautismo de conversión en el Jordán. Tuvo el honor de bautizar a Jesús, señalándolo como el 'Cordero de Dios que quita el pecado del mundo'. Murió mártir, decapitado por orden de Herodes Antipas tras denunciar su matrimonio ilegal.",
		class: "bento-tall",
	},
	{
		slug: "san-lucas-evangelista",
		title: "San Lucas Evangelista",
		image: "/images/santos/SAN LUCAS EVANGELISTA.webp",
		description:
			"Médico y evangelista de la misericordia. Su evangelio destaca el amor de Jesús por los pobres, los marginados y los que buscan sanación.",
		fullBiography: "San Lucas fue un médico griego convertido al cristianismo y compañero de San Pablo en sus viajes misioneros. Es el autor del tercer Evangelio y de los Hechos de los Apóstoles. Su evangelio es conocido como el 'Evangelio de la Misericordia' por su énfasis en el perdón de Dios y su preocupación por los pobres y las mujeres. La tradición también lo describe como el primer pintor de iconos de la Virgen María.",
	},
	{
		slug: "san-jose",
		title: "San José",
		image: "/images/santos/SAN JOSE.webp",
		description:
			"Esposo de María y protector de Jesús. Modelo de paternidad, obediencia y trabajo honrado como carpintero en el hogar de Nazaret.",
		fullBiography: "San José, el 'Justo', fue elegido por Dios para ser el custodio de la Sagrada Familia. Aunque no se conserva ninguna de sus palabras en los Evangelios, sus acciones demuestran una obediencia incondicional a la voluntad divina. Como carpintero, enseñó a Jesús el valor del trabajo. Es el patrono de la Iglesia Universal, de los padres de familia, de los trabajadores y de la buena muerte.",
	},
	{
		slug: "virgen-del-carmen",
		title: "Virgen del Carmen",
		image: "/images/santos/Virgen del Carmen.jpg.webp",
		description:
			"Nuestra Señora del Monte Carmelo, protectora de los marineros. El escapulario es el signo de su intercesión maternal y nuestra confianza en su cuidado.",
		fullBiography: "La advocación de la Virgen del Carmen tiene su origen en el Monte Carmelo, en Tierra Santa, donde unos ermitaños se reunieron para imitar al profeta Elías. En 1251, la Virgen se apareció a San Simón Stock y le entregó el escapulario del Carmen, prometiendo protección a quienes lo lleven con devoción. Es la 'Estrella del Mar' y patrona de las gentes del mar, así como una de las advocaciones más queridas en todo el mundo cristiano.",
		class: "bento-wide",
	},
	{
		slug: "cristo-de-esquipulas",
		title: "Cristo de Esquipulas",
		image: "/images/santos/SANTO CRISTO ESQUIPULAS.webp",
		description:
			"El 'Cristo Negro', símbolo de fe y unidad en Centroamérica. Su imagen en la Basílica de Esquipulas es un faro de esperanza y milagros para miles.",
		fullBiography: "El Santo Cristo de Esquipulas es una imagen de Jesús Crucificado que se venera en la ciudad de Esquipulas, Guatemala. Tallado en madera oscura en el siglo XVI, es conocido como el 'Señor de Esquipulas' o 'Cristo Negro'. Su fama de milagroso se extendió rápidamente por toda Centroamérica, convirtiendo su santuario en uno de los centros de peregrinación más importantes del continente. Representa la unidad de los pueblos bajo la cruz de Cristo.",
	},
];
