<script lang="ts">
	export let submit: any;
	let status = [
		{ id: null, text: `Select Status` },
		{ id: 'alive', text: `Alive` },
		{ id: 'dead', text: `Dead` },
		{ id: 'unknown', text: `Unknown` }
	];

	let form = {
		name: '',
		status: null
	};
</script>

<form on:submit|preventDefault={() => submit(form)}>
	<div class="input-group flex-nowrap">
		<input
			bind:value={form.name}
			type="text"
			class="form-control"
			placeholder="Name..."
			aria-label="Username"
			aria-describedby="addon-wrapping"
		/>
	</div>
	<div>
		<select bind:value={form.status} on:change={() => submit(form)} class="form-select">
			{#each status as s}
				<option value={s.id}>
					{s.text}
				</option>
			{/each}
		</select>
	</div>
</form>

<style>
	form {
		width: 100%;
		margin-top: 1rem;
		margin-bottom: 1rem;
		display: flex;
		flex-direction: row;
		/* flex-wrap: wrap; */
		gap: 5rem;
		justify-content: center;
	}
	form div {
		width: 350px;
	}
</style>
