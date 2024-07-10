<script>
	export let ports;
</script>

<div class="card">
	<h2>Port Information</h2>
	{#if ports}
		{#each ports as port}
			<div class="card-section">
				<h3>Port: {port.portNumber}</h3>
				<div class="details">
					<p><strong>Service:</strong> {port.details.service ?? ""}</p>
					<p><strong>State:</strong> {port.details.state ?? ""}</p>
					<p><strong>Version:</strong> {port.details.version ?? ""}</p>
				</div>
			</div>
		{/each}
	{:else}
		No hay puertos disponibles
	{/if}
</div>

<style>
	.card {
		background-color: #fff;
		border-radius: 8px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		padding: 20px;
		width: 100%;
	}

	.card h2 {
		font-size: 24px;
		margin-bottom: 20px;
		text-align: center;
	}

	.card-section {
		margin-bottom: 20px;
		padding: 15px;
		border: 1px solid #eee;
		border-radius: 8px;
	}

	.card-section h3 {
		font-size: 20px;
		margin-bottom: 10px;
		color: #333;
	}

	.details p {
		font-size: 16px;
		color: #555;
		margin: 5px 0;
	}

	.details p strong {
		color: #333;
	}
</style>
