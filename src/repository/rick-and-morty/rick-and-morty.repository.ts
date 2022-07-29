export class RickAndMortyRepository {
	private readonly URL = 'https://rickandmortyapi.com/api';
	private readonly URL_CHARACTER: string;
	private readonly URL_EPISODE: string;
	private readonly URL_LOCATION: string;
	private readonly resultDefault = {
		results: [],
		info: { count: 0, pages: 0, next: null, prev: null }
	};

	constructor() {
		this.URL_CHARACTER = `${this.URL}/character`;
		this.URL_EPISODE = `${this.URL}/episode`;
		this.URL_LOCATION = `${this.URL}/location`;
	}

	async findCharacter({ page = 1, name = null, status = null }, options?: any) {
		try {
			const url = new URL(this.URL_CHARACTER);

			url.searchParams.append('page', `${page}`);

			if (name) {
				url.searchParams.append('name', name);
			}

			if (status) {
				url.searchParams.append('status', status);
			}

			let result;

			if (options && options.fetch) {
				result = await options.fetch(url.toString());
			}

			if (!options) {
				result = await fetch(url.toString());
			}

			if (!result.ok) {
				throw Error(JSON.stringify(result));
			}

			const resultJson = await result.json();
			return [resultJson, null];
		} catch (e) {
			// console.error(e);
			return [this.resultDefault, e];
		}
	}

	async findEpisode({ page = 1, name = null }) {
		try {
			const url = new URL(this.URL_EPISODE);

			url.searchParams.append('page', `${page}`);

			if (name) {
				url.searchParams.append('name', name);
			}

			const result = await fetch(url.toString());

			if (!result.ok) {
				throw Error(JSON.stringify(result));
			}

			const resultJson = await result.json();
			return [resultJson, null];
		} catch (e) {
			// console.error(e);
			return [this.resultDefault, e];
		}
	}

	async findLocation({ page = 1, name = null }) {
		try {
			const url = new URL(this.URL_LOCATION);

			url.searchParams.append('page', `${page}`);

			if (name) {
				url.searchParams.append('name', name);
			}

			const result = await fetch(url.toString());

			if (!result.ok) {
				throw Error(JSON.stringify(result));
			}

			const resultJson = await result.json();
			return [resultJson, null];
		} catch (e) {
			// console.error(e);
			return [this.resultDefault, e];
		}
	}
}
