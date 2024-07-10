<script>
	// Datos a mostrar en la tarjeta
	export let technologies;
</script>

<div class="card">
	<h2>WebTechnologies</h2>
	{#if technologies}
		{#each Object.keys(technologies) as key}
			<div class="card-section">
				<h3>{key}</h3>
				<ul>
					{#each technologies[key] as item}
						<li>{item.name} {item.version ? `(v${item.version})` : ""}</li>
					{/each}
				</ul>
			</div>
		{/each}
	{:else}
		No hay tecnologias que mostrar
	{/if}
</div>

<style>
	.card {
		background-color: #fff;
		border-radius: 8px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		padding: 20px;
		display: flex;
		width: 100%;
	}

	.card h2 {
		font-size: 24px;
		margin-bottom: 20px;
		text-align: center;
	}

	.card-section h3 {
		font-size: 20px;
		margin-bottom: 10px;
	}

	.card-section ul li {
		font-size: 16px;
		color: #555;
	}
</style>
