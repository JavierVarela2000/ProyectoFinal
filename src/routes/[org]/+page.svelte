<script>
	import { getOrganization } from "$lib/supabase.js";
	import { page } from "$app/stores";
	import { loadingStore } from "$lib/stores.js";
	import { onMount } from "svelte";
	let org;
	let items = [];
	onMount(async () => {
		loadingStore.update(() => {
			return true;
		});
		const orgName = $page.params.org;
		const id = $page.url.searchParams.get("id");
		console.log(id);
		org = await getOrganization(id);

		items = org.items;
		loadingStore.update(() => {
			return false;
		});
	});
</script>

<div class="container">
	<a href="/" class="btn btn-primary mt-3">
		<i class="bi bi-chevron-left"></i> Return
	</a>
	<div class="table-responsive">
		<table class="table mt-3">
			<thead>
				<tr>
					<th>Source Target</th>
					<th>Nombre</th>
					<th>Tipo</th>
					<th>Categoria</th>
					<th>Valoracion</th>
					<th>Acciones</th>
				</tr>
			</thead>
			<tbody>
				{#each items as item}
					<tr class="table-row">
						<td>{item.targetSource}</td>
						<td class="td-item">
							{#if item.type == "File"}
								<a href=" {item.item}"> {item.item}</a>
							{:else}
								{item.item}
							{/if}
						</td>

						<td>{item.type}</td>
						<td>{item.category}</td>
						<td>{item.valoration}</td>
						<td>
							{#if item.type == "IpAddress"}
								<a
									on:click={() => {
										loadingStore.update(() => {
											return true;
										});
									}}
									class="btn btn-primary"
									href="/{$page.params.org}/scan?ip={item.item}">Escanear</a
								>
							{/if}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>

<style>
	.td-item {
		word-wrap: break-word; /* Rompe las palabras largas */
		max-width: 300px; /* Establece un ancho máximo para la columna Nombre */
	}

	.table-row:hover {
		background-color: #f2f2f2 !important; /* Cambia el color de fondo al hacer hover */
	}
</style>
