import { get } from 'svelte/store';
import { URL_FRONT } from '../../const/url';

import { authStore } from '../../store/auth';

const isClient = typeof window !== 'undefined';

export function authGuard({ pathname }: any): any {
	const { user, auth } = get(authStore);

	if (!isClient) {
		return {};
	}

	if (auth && pathname === URL_FRONT.login) {
		return { status: 302, redirect: URL_FRONT.root };
	}

	if (!auth && pathname !== URL_FRONT.login) {
		return { status: 302, redirect: URL_FRONT.login };
	}

	return {};
}
