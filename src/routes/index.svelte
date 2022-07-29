<script lang="ts">
</script>

<svelte:head>
	<title>Skeleton</title>
</svelte:head>

<div>
	<img src="/rick_and_morty.webp" alt="" />
	<img src="/dog.png" alt="" />
</div>
<h1>Svelte Kit Skeleton</h1>
<h3>Routes publics with SSR</h3>
<ul>
	<li>Home</li>
	<li>Login</li>
	<li>Characteres</li>
</ul>
<h3>Please login to view private routes</h3>
<ul>
	<li>Episodes</li>
	<li>Locations</li>
</ul>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	h1 {
		font-family: Arial, Helvetica, sans-serif;
		color: blue;
	}
	img {
		max-width: 22rem;
	}
	li {
		list-style: none;
	}
</style>
