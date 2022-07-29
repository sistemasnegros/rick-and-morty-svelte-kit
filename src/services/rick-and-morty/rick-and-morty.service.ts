import { RickAndMortyRepository } from '../../repository/rick-and-morty/rick-and-morty.repository';

class RickAndMortyService {
	private readonly _repository;
	constructor(repository: RickAndMortyRepository) {
		this._repository = repository;
	}

	async findCharacter({ page, name, status }: any, options?: any) {
		const [results] = await this._repository.findCharacter({ page, name, status }, options);
		return results;
	}

	async findEpisode({ page, name }: any) {
		const [results] = await this._repository.findEpisode({ page, name });
		return results;
	}
	async findLocation({ page, name }: any) {
		const [results] = await this._repository.findLocation({ page, name });
		return results;
	}
}

export const RickAndMortyServiceIns = new RickAndMortyService(new RickAndMortyRepository());
