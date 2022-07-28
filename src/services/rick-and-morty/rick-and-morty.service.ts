import { RickAndMortyRepository } from '../../repository/rick-and-morty/rick-and-morty.repository';

class RickAndMortyService {
	private readonly _repository;
	constructor(repository: RickAndMortyRepository) {
		this._repository = repository;
	}

	async findCharacter({ page, name, status }: any) {
		const [characters] = await this._repository.findCharacter({ page, name, status });
		return characters;
	}
}

export const RickAndMortyServiceIns = new RickAndMortyService(new RickAndMortyRepository());
