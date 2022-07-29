import { browser } from '$app/env';
import { writable } from 'svelte/store';
import { LocalStoreRepositoryIst } from '../lib/localstore/localstore.repository';

const nameKey = 'auth';
const authDefautStore = { auth: false, user: {} };
let userLocalStore: any = authDefautStore;

if (browser) {
	userLocalStore = LocalStoreRepositoryIst.load({ key: nameKey }) ?? authDefautStore;
}

function createAuth() {
	const { subscribe, set, update } = writable(userLocalStore);

	subscribe((value) => {
		if (browser) {
			LocalStoreRepositoryIst.save({ key: nameKey, value });
		}
	});

	return {
		subscribe,
		login: (user: any) => set({ user, auth: true }),
		logout: () => set(authDefautStore)
	};
}

export const authStore = createAuth();
