<!-- Card.svelte -->
<script>
	export let generalInformation;
</script>

<div class="card">
	<div class="card-header">Información General</div>
	{#if generalInformation}
		<ul class="list-group list-group-flush">
			<li class="list-group-item">Country: {generalInformation.Country}</li>
			<li class="list-group-item">City: {generalInformation.City}</li>
			<li class="list-group-item">
				Organization: {generalInformation.Organization}
			</li>
			<li class="list-group-item">ISP: {generalInformation.ISP}</li>
			<li class="list-group-item">ASN: {generalInformation.ASN}</li>
		</ul>
	{:else}
		No hay informacion
	{/if}
</div>

<style>
	.card {
		width: 100%;
	}
</style>
