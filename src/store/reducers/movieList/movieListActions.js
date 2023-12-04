export const MOVIES_DATA = 'MOVIES_DATA'

/**
 *
 * Esta función despacha una acción al store de Redux con los datos de las series
 * en el idioma seleccionado y requiere el idioma (lang) como parámetro.
 *
 * @param {string} lang - El idioma en el que se deben cargar los datos.
 * @returns {(function(*): Promise<void>)|*}
 */
export const getMovies = lang => async dispatcher => {
	try {

		// Datos de muestra para la serie, disponibles en español e inglés.
		// Estos datos pueden ser reemplazados por datos reales en el futuro.
		const series = {
			es: {
				serie: 'Rick y Morty',
				year: '2023',
				genre: 'Acción • Aventura • Ciencia • ficción',
				score: 7,
				description:
					'“Rick y Morty” es una serie de televisión animada para adultos que sigue las desventuras de Rick Sanchez, un científico loco y cínico, y su nieto Morty Smith, de buen corazón pero ansioso. Dividen su tiempo entre la vida doméstica y las aventuras interdimensionales que tienen lugar en un número infinito de realidades, a menudo viajando a otros planetas y dimensiones a través de portales y en el platillo volador de Rick.',
				image:
					'https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_QL75_UX380_CR0,4,380,562_.jpg',
				cast: [
					{
						name: 'Rick Sanchez',
						description:
							'Un científico genio pero alcohólico y sociópata que frecuentemente se embarca en aventuras peligrosas y extravagantes con su nieto Morty.'
					},
					{
						name: 'Morty Smith',
						description:
							'El nieto de Rick, que es arrastrado a las peligrosas aventuras de su abuelo. Morty es nervioso y fácilmente manipulable.'
					}
				]
			},
			en: {
				serie: 'Rick and Morty',
				year: '2023',
				genre: 'Action • Adventure • Science • Fiction',
				score: 7,
				description:
					"“Rick and Morty” is an adult animated television series that follows the misadventures of Rick Sanchez, a mad and cynical scientist, and his good-hearted but anxious grandson Morty Smith. They divide their time between domestic life and interdimensional adventures that take place in an infinite number of realities, often traveling to other planets and dimensions through portals and in Rick's flying saucer.",
				image:
					'https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_QL75_UX380_CR0,4,380,562_.jpg',
				cast: [
					{
						name: 'Rick Sanchez',
						description:
							'A genius scientist but an alcoholic and sociopath who frequently embarks on dangerous and extravagant adventures with his grandson Morty.'
					},
					{
						name: 'Morty Smith',
						description:
							"Rick's grandson, who is dragged into his grandfather's dangerous adventures. Morty is nervous and easily manipulable."
					}
				]
			}
		}

		dispatcher({
			type: MOVIES_DATA,
			payload: { data: { serie: series[lang] || [] } }
		})
	} catch (error) {
		/* empty */
	}
}
