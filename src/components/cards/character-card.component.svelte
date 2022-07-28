<script lang="ts">
	export let character: any;
</script>

<div class="card">
	<img src={character.image} alt="..." />

	<div class="card-body">
		<h5 class="card-title">{character.name}</h5>
		<div class="details">
			<p class="field">Status:</p>
			<p class="data">{character.status}</p>
			<p class="field">Species:</p>
			<p class="data">{character.species}</p>
			<p class="field">Gender:</p>
			<p class="data">{character.gender}</p>
			<p class="field">Origin:</p>
			<p class="data">{character.origin.name}</p>
			<p class="field">Location:</p>
			<p class="data">{character.location.name}</p>
			<div />
		</div>
	</div>
</div>

<style>
	img {
		padding-top: 0.5rem;
		border-radius: 50%;
		padding-left: 0.5rem;
		padding-right: 0.5rem;
	}
	.field {
		font-weight: bold;
	}
	.card {
		width: 16rem;

		border-style: solid;
		border-width: thin;
		border-radius: 10px;
	}

	.details {
		display: grid;
		grid-template-columns: 35% auto;
		text-align: left;
		margin-left: 1rem;
		align-items: center;
		padding-bottom: 0.5rem;
	}

	p {
		margin-bottom: 0;
		font-size: 0.7rem;
	}
</style>
