<script lang="ts">
	export let location: any;
</script>

<div class="card">
	<div class="card-body">
		<h5 class="card-title">{location.name}</h5>
		<div class="details">
			<p class="field">Type:</p>
			<p class="data">{location.type}</p>
			<p class="field">Dimension:</p>
			<p class="data">{location.dimension}</p>
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
