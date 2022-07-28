<script lang="ts">
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
		{#if $authStore.username}
			<li><a href={URL_FRONT.rickAndMorty.characters}>Characteres</a></li>
			<li><a href="#">Episodes</a></li>
			<li><a href="#">Locations</a></li>
			<li>
				<details role="list" dir="rtl">
					<summary aria-haspopup="listbox" role="link" class="secondary"
						>{$authStore.username}</summary
					>
					<ul role="listbox">
						<li>
							<a type="button" on:click={logout}>Logout</a>
						</li>
					</ul>
				</details>
			</li>
		{/if}

		{#if !$authStore.username}
			<li><a href={URL_FRONT.login}>Login</a></li>
		{/if}
	</ul>
</nav>
