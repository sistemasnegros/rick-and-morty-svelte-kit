import { get } from 'svelte/store';
import { URL_FRONT } from '../../const/url';

import { authStore } from '../../store/auth';

const isClient = typeof window !== 'undefined';

export function authGuard({ pathname }: any): any {
	const user = get(authStore);
	const isLoggedIn = user.username;

	if (!isClient) {
		return {};
	}

	if (isLoggedIn && pathname === URL_FRONT.login) {
		return { status: 302, redirect: URL_FRONT.root };
	}

	if (!isLoggedIn && pathname !== URL_FRONT.login) {
		return { status: 302, redirect: URL_FRONT.login };
	}

	return {};
}
