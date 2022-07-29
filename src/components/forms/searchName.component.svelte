<script lang="ts">
	export let submit: any;

	let form = {
		name: ''
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
</form>

<style>
	form {
		width: 100%;
		margin-top: 1rem;
		margin-bottom: 1rem;
		display: flex;
		flex-direction: row;
		gap: 5rem;
		justify-content: center;
	}
	form div {
		width: 350px;
	}
</style>
