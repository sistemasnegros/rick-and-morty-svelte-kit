<script lang="ts">
	import Menu from '../components/menu/menu.svelte';
</script>

<Menu />
<div class="my-container">
	<slot />
</div>

<footer>
	<p>
		Front make with <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
	</p>
</footer>

<style>
	.my-container {
		text-align: center;
		padding-top: 3em;
		width: 80%;
		margin: 0 auto;
	}

	:global(body) {
		font-family: 'Roboto', sans-serif;
	}

	footer {
		padding-top: 2rem;
		text-align: center;
	}
</style>
