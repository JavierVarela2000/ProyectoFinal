<script>
	export let vulnsData;
</script>

<div class="card">
	<h2>Vulnerabilities</h2>
	{#if vulnsData}
		{#each vulnsData as item}
			<div class="card-section">
				<h3>{item.id}</h3>
				<p>{item.description}</p>
				<span class="tag">{item.tag}</span>
			</div>
		{/each}
	{:else}
		No hay vulnerabilidades
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

	.card-section p {
		font-size: 16px;
		color: #555;
	}

	.tag {
		display: inline-block;
		background-color: #3498db;
		color: white;
		padding: 5px 10px;
		border-radius: 5px;
		font-size: 14px;
	}
</style>
