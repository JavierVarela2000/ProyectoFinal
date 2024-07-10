<script>
	import { getOrganizations } from "$lib/supabase.js";
	import { onMount } from "svelte";
	import AddOrganizationForm from "../lib/components/AddOrganizationForm.svelte";
	let organizaciones = [];
	onMount(async () => {
		const { data, error } = await getOrganizations();
		if (!error) {
			organizaciones = [...data];
		}
	});
</script>

<div
	class="modal fade"
	id="exampleModal"
	tabindex="-1"
	aria-labelledby="exampleModalLabel"
	aria-hidden="true"
>
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="exampleModalLabel">Formulario</h5>
				<button
					type="button"
					class="btn-close"
					data-bs-dismiss="modal"
					aria-label="Close"
				></button>
			</div>
			<div class="modal-body">
				<AddOrganizationForm bind:organizaciones />
			</div>
		</div>
	</div>
</div>

<div class="d-flex p-2 container mt-5 gap-3">
	{#each organizaciones as org}
		<a href="#" class="card">
			<h2>{org?.name}</h2>
			<p>Número de activos:</p>
		</a>
	{/each}

	<button
		type="button"
		data-bs-toggle="modal"
		data-bs-target="#exampleModal"
		class="card"><h2>+ Agregar nueva organizacion</h2></button
	>
</div>

<style>
	button:hover {
		text-decoration: underline;
	}
	a {
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}
	.card {
		background-color: #fff;
		border-radius: 8px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		padding: 20px;
		text-align: center;
		width: 300px;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.card h2 {
		font-size: 24px;
	}

	.card p {
		font-size: 18px;
		color: #555;
	}
</style>
