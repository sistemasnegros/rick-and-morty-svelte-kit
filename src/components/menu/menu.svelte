<script lang="ts">
	import { browser } from '$app/env';
	import { goto } from '$app/navigation';

	import { URL_FRONT } from '../../const/url';
	import { authStore } from '../../store/auth';

	const logout = () => {
		authStore.logout();
		goto(URL_FRONT.root);
	};
</script>

<nav class="container-fluid">
	<ul>
		<li><strong><a href={URL_FRONT.root}>Rick and Morty</a></strong></li>
	</ul>
	<ul>
		<li><a href={URL_FRONT.rickAndMorty.characters}>Characteres</a></li>
		{#if $authStore.auth}
			<li><a href={URL_FRONT.rickAndMorty.episodes}>Episodes</a></li>
			<li><a href={URL_FRONT.rickAndMorty.locations}>Locations</a></li>
			<li>
				<details role="list" dir="rtl">
					<summary aria-haspopup="listbox" role="link" class="secondary"
						>{$authStore.user.username}</summary
					>
					<ul role="listbox">
						<li>
							<a href="/" type="button" on:click={logout}>Logout</a>
						</li>
					</ul>
				</details>
			</li>
		{/if}

		{#if !$authStore.auth}
			<li><a href={URL_FRONT.login}>Login</a></li>
		{/if}
	</ul>
</nav>
