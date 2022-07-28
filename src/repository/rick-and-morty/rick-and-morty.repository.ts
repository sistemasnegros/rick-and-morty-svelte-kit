export class RickAndMortyRepository {
	private readonly URL = 'https://rickandmortyapi.com/api';
	private readonly URL_CHARACTER: string;

	constructor() {
		this.URL_CHARACTER = `${this.URL}/character`;
	}

	async findCharacter({ page = 1, name = null, status = null }) {
		try {
			const url = new URL(this.URL_CHARACTER);

			url.searchParams.append('page', `${page}`);

			if (name) {
				url.searchParams.append('name', name);
			}

			if (status) {
				url.searchParams.append('status', status);
			}

			const result = await fetch(url.toString());

			if (!result.ok) {
				throw Error(JSON.stringify(result));
			}

			const resultJson = await result.json();
			return [resultJson, null];
		} catch (e) {
			// console.error(e);
			return [{ results: [], info: { count: 0, pages: 0, next: null, prev: null } }, e];
		}
	}
}
