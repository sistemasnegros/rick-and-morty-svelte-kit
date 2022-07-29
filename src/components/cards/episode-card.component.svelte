<script lang="ts">
	export let episode: any;
</script>

<div class="card">
	<div class="card-body">
		<h5 class="card-title">{episode.name}</h5>
		<div class="details">
			<p class="field">Air Date:</p>
			<p class="data">{episode.air_date}</p>
			<p class="field">Episode:</p>
			<p class="data">{episode.episode}</p>
			<div />
		</div>
	</div>
</div>

<style>
	.field {
		font-weight: bold;
	}
	.card {
		width: 16rem;
		border-style: solid;
		border-width: thin;
		border-radius: 10px;
		padding-top: 1rem;
		padding-left: 1rem;
		padding-right: 1rem;
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
