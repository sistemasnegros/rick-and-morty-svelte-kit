import { UsersRepository } from '../../repository/users/users.repository';

class UsersService {
	private readonly _repository;
	constructor(repository: UsersRepository) {
		this._repository = repository;
	}

	async login({ username, password }: any) {
		const [user] = await this._repository.login({ username, password });
		return user;
	}
}

export const UsersServiceIns = new UsersService(new UsersRepository());
