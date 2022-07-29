<script context="module" lang="ts">
	import { authGuard } from '$lib/guard/guard';
	export const load = async ({ url }: any) => authGuard(url);
</script>

<script lang="ts">
	import { RickAndMortyServiceIns } from '../../services/rick-and-morty/rick-and-morty.service';
	import Card from '../../components/cards/location-card.component.svelte';
	import Spinner from '../../components/spinners/spinner.component.svelte';
	import SearchNameForm from '../../components/forms/searchName.component.svelte';
	import Paginator from '../../components/paginator/paginator.component.svelte';

	let locations = RickAndMortyServiceIns.findLocation({ page: 1 }).then((result) => result);
	let searchFields = {};
	let currentPage = 1;

	const submit = async (fields: any) => {
		locations = await RickAndMortyServiceIns.findLocation(fields);
		searchFields = fields;
		currentPage = 1;
	};

	const numberPageOnClick = async (page: number) => {
		locations = await RickAndMortyServiceIns.findLocation({ page, ...searchFields });
		currentPage = page;
	};
</script>

<img src="/rick_and_morty.webp" alt="" />
<h1>Locations</h1>

<SearchNameForm {submit} />
{#await locations}
	<Spinner />
{:then locations}
	<Paginator metadata={locations.info} {numberPageOnClick} currentPageProps={currentPage} />
	<div class="locations-body">
		{#each locations.results as location}
			<Card {location} />
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
	.locations-body {
		display: grid;
		grid-gap: 1rem;
		grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
		justify-items: center;
	}
</style>
