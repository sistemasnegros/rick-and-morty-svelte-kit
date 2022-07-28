import { writable } from 'svelte/store';

const authInitStore = { username: null };

function createAuth() {
	const { subscribe, set, update } = writable(authInitStore);

	return {
		subscribe,
		login: (user: any) => set(user),
		logout: () => set(authInitStore)
	};
}

export const authStore = createAuth();
