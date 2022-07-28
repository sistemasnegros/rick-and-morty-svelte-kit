//Fake longin
export class UsersRepository {
	async login({ username, password }: any): Promise<[any, any]> {
		try {
			const user = { username, password };
			return new Promise((resolve) => {
				setTimeout(() => {
					resolve([user, null]);
				}, 3000);
			});
		} catch (e: any) {
			return [null, e];
		}
	}
}
