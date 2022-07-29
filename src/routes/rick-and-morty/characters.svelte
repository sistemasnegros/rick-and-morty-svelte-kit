<script context="module" lang="ts">
	import type { LoadEvent } from '@sveltejs/kit';
	import { authGuard } from '$lib/guard/guard';
	export const load = async ({ url, fetch, params }: LoadEvent) => {
		const guard = authGuard(url);

		const page = url.searchParams.get('page') || 1;
		const name = url.searchParams.get('name');
		const status = url.searchParams.get('status');

		// if route is private
		/* if (guard.status === 302) { */
		/* 	return guard; */
		/* } */

		let characters = await RickAndMortyServiceIns.findCharacter(
			{ page, name, status },
			{ fetch }
		).then((result) => result);

		return {
			/* ...guard, */
			props: {
				characters,
				currentPage: +page,
				searchFields: { name, status }
			}
		};
	};
</script>

<script lang="ts">
	import { RickAndMortyServiceIns } from '../../services/rick-and-morty/rick-and-morty.service';
	import Card from '../../components/cards/character-card.component.svelte';
	import Spinner from '../../components/spinners/spinner.component.svelte';
	import SearchForm from '../../components/forms/search.component.svelte';
	import Paginator from '../../components/paginator/paginator.component.svelte';
	import { goto } from '$app/navigation';
	import { URL_FRONT } from '../../const/url';
	import { page as pageStore } from '$app/stores';

	/* let characters = RickAndMortyServiceIns.findCharacter({ page: 1 }).then((result) => result); */
	export let characters: Promise<any>;
	export let searchFields = {};
	export let currentPage = 1;

	const submit = async (fields: any) => {
		// ssr
		const url = $pageStore.url;
		url.searchParams.set('page', `1`);
		url.searchParams.set('name', fields.name);
		url.searchParams.set('status', fields.status);
		await goto(url, { keepfocus: true, noscroll: true });
		// spa
		characters = await RickAndMortyServiceIns.findCharacter(fields);
		searchFields = fields;
		currentPage = 1;
	};

	const numberPageOnClick = async (page: number) => {
		// ssr
		const url = $pageStore.url;
		url.searchParams.set('page', `${page}`);
		await goto(url, { keepfocus: true, noscroll: true });
		// spa
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
