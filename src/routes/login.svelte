<script context="module" lang="ts">
	import { authGuard } from '../lib/guard/guard';
	export const load = async ({ url }: any) => authGuard(url);
</script>

<script lang="ts">
	import LoginForm from '../components/forms/login.component.svelte';
	import { UsersServiceIns } from '../services/users/users.service';
	import { authStore } from '../store/auth';

	const submit = async (formFields: { username: string; password: string }) => {
		const user = await UsersServiceIns.login(formFields);
		authStore.login(user);
	};
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<article class="grid">
	<div>
		<hgroup>
			<h1>Sign in</h1>
		</hgroup>
		<LoginForm {submit} />
	</div>
</article>

<style>
</style>
