<script lang="ts">
	import { goto } from '$app/navigation';

	import { URL_FRONT } from '../../const/url';

	export let submit: any;
	let formStatus = {
		isInvalid: false,
		isLoading: false
	};

	let form = {
		username: 'admin',
		password: 'pass'
	};

	const handerForm = async (formFields: any) => {
		formStatus.isLoading = true;
		await submit(formFields);
		formStatus.isLoading = false;
		goto(URL_FRONT.rickAndMorty.characters);
	};

	$: buttonText = formStatus.isLoading ? 'Please wait' : 'Login';
</script>

<form on:submit|preventDefault={() => handerForm(form)}>
	<input
		type="text"
		name="login"
		placeholder="Login"
		aria-label="Login"
		autocomplete="false"
		required
		bind:value={form.username}
	/>
	<input
		type="password"
		name="password"
		placeholder="Password"
		aria-label="Password"
		autocomplete="current-password"
		required
		bind:value={form.password}
	/>
	<button type="submit" class="outline" aria-busy={formStatus.isLoading}>{buttonText}</button>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	input,
	button {
		max-width: 30rem;
	}
</style>
