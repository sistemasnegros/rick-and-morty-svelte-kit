const root = '/';
const rickAndMortyRoot = root + `rick-and-morty`;

export const URL_FRONT = {
	root,
	login: root + 'login',
	rickAndMorty: {
		root: `${rickAndMortyRoot}`,
		characters: `${rickAndMortyRoot}/characters`,
		episodes: `${rickAndMortyRoot}/episodes`,
		locations: `${rickAndMortyRoot}/locations`
	}
};
