<script context="module" lang="ts">
	import { authGuard } from '../lib/guard/guard';
	export const load = async ({ url }: any) => authGuard(url);
</script>

<script lang="ts">
	import { RickAndMortyServiceIns } from '../../services/rick-and-morty/rick-and-morty.service';
	import Card from '../../components/cards/character-card.component.svelte';
	import Spinner from '../../components/spinners/spinner.component.svelte';
	import SearchForm from '../../components/forms/search.component.svelte';
	import Paginator from '../../components/paginator/paginator.component.svelte';

	let characters = RickAndMortyServiceIns.findCharacter({ page: 1 }).then((result) => result);
	let searchFields = {};
	let currentPage = 1;

	const submit = async (fields: any) => {
		characters = await RickAndMortyServiceIns.findCharacter(fields);
		searchFields = fields;
		currentPage = 1;
		/* console.log('busqueda', characters); */
	};

	const numberPageOnClick = async (page: number) => {
		/* console.log('click page', page); */
		characters = await RickAndMortyServiceIns.findCharacter({ page, ...searchFields });
		currentPage = page;
	};
</script>

<img src="/rick_and_morty.webp" alt="" />
<h1>Characters</h1>

<SearchForm {submit} />
{#await characters}
	<Spinner />
{:then characters}
	<Paginator metadata={characters.info} {numberPageOnClick} currentPageProps={currentPage} />
	<div class="characters-body">
		{#each characters.results as character}
			<Card {character} />
		{/each}
	</div>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

<style>
	h1 {
		font-size: 3rem;
		padding-top: 1rem;
		padding-bottom: 2rem;
	}
	img {
		max-width: 20rem;
	}
	.characters-body {
		display: grid;
		grid-gap: 1rem;
		grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
		justify-items: center;
	}
</style>
