<script lang="ts">
	export let metadata = { prev: null, next: null, pages: 0, count: 0 };
	export let numberPageOnClick: any;
	export let currentPageProps = 1;
	let currentPage = currentPageProps;
	let currentChuck = 0;
	const chunkSize = 5;
	let arrayChuck: any[] = [];
	let records = 0;

	$: {
		arrayChuck = [];
		records = metadata.count;
		let pages = Array.from(Array(metadata.pages).keys());
		for (let i = 0; i < pages.length; i += chunkSize) {
			const chunk = pages.slice(i, i + chunkSize);
			arrayChuck = arrayChuck.concat([chunk]);
		}
		currentPage = currentPageProps;

		if (!arrayChuck[currentChuck + 1]) {
			metadata.next = null;
		}

		if (currentPage <= chunkSize) {
			metadata.prev = null;
		}
	}

	const numberPageOnClickLocal = async (page: number) => {
		currentPage = page;
		await numberPageOnClick(page);
	};

	const nextChunkPageOnClick = async () => {
		currentChuck += 1;
		currentPage = arrayChuck[currentChuck][0] + 1;
		await numberPageOnClick(currentPage);
	};
	const prevChunkPageOnClick = async () => {
		currentChuck -= 1;
		currentPage = arrayChuck[currentChuck][0] + 1;
		await numberPageOnClick(currentPage);
	};
</script>

<div>
	{#if arrayChuck[currentChuck]}
		<button on:click={prevChunkPageOnClick} disabled={metadata.prev ? false : true}>
			<span>&laquo;</span>
		</button>
		{#each arrayChuck[currentChuck] as page}
			<button
				class={page + 1 === currentPage ? 'active' : ''}
				on:click={() => numberPageOnClickLocal(page + 1)}>{page + 1}</button
			>
		{/each}
		<button
			class="page-link"
			on:click={nextChunkPageOnClick}
			disabled={metadata.next ? false : true}
		>
			<span>&raquo;</span>
		</button>
	{/if}
</div>
<p>Records:{records}</p>

<style>
	div {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		justify-content: center;
	}

	.active {
		background-color: #0a2540;
	}

	button {
		width: 2rem;
		height: 3rem;
		font-size: 0.9rem;
		padding: 0.3rem;
	}
</style>
