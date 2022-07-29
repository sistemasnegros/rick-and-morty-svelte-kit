class LocalStoreRepository {
	save({ key, value }: { key: string; value: any }) {
		const valueStr = typeof value === 'object' ? JSON.stringify(value) : value;
		localStorage.setItem(key, valueStr);
	}

	load({ key }: { key: string }) {
		let item = localStorage.getItem(key);
		try {
			item = JSON.parse(<string>item);
			return item;
		} catch (error) {
			return item;
		}
	}

	delete({ key }: { key: string }) {
		localStorage.removeItem(key);
	}
}

export const LocalStoreRepositoryIst = new LocalStoreRepository();
