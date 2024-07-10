<script>
	import { getOrganizations, deleteOrganization } from "$lib/supabase.js";
	import { onMount } from "svelte";
	import AddOrganizationForm from "../lib/components/AddOrganizationForm.svelte";
	import { loadingStore } from "$lib/stores";
	let organizaciones = [];
	const closeModal = () => {
		const modalElement = document.getElementById("exampleModal");
		const modalInstance = bootstrap.Modal.getInstance(modalElement);
		modalInstance.hide();
	};

	const handleDelete = async (id) => {
		if (deleteOrganization(id)) {
			const { data, error } = await getOrganizations();
			if (!error) window.location.reload();
		}
	};
	onMount(async () => {
		loadingStore.update(() => {
			return true;
		});
		const { data, error } = await getOrganizations();
		organizaciones = data;
		loadingStore.update(() => {
			return false;
		});
	});
</script>

<div
	class="modal fade"
	id="exampleModal"
	tabindex="-1"
	aria-labelledby="exampleModalLabel"
	aria-hidden="false"
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
				<AddOrganizationForm {closeModal} />
			</div>
		</div>
	</div>
</div>

<div class="d-flex p-2 container mt-5 gap-3">
	{#each organizaciones as org}
		<a href="/{org.name}?id={org.id}" class="card">
			<div class="card-content">
				<h2>{org?.name}</h2>
				<p>Número de activos: {org?.items.length}</p>
			</div>
			<button
				class="delete-button"
				on:click|preventDefault={() => handleDelete(org.id)}>Eliminar</button
			>
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
	a {
		text-decoration: none;
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

		position: relative; /* Permite posicionar el botón en relación a la tarjeta */
	}

	.card:hover {
		box-shadow: 0px 0px 16px -7px rgba(0, 0, 0, 0.75);
	}

	.card-content {
		flex-grow: 1; /* Permite que el contenido principal de la tarjeta crezca */
	}

	.card h2 {
		font-size: 24px;
	}

	.card p {
		font-size: 18px;
		color: #555;
	}

	.delete-button {
		background-color: #e74c3c;
		color: white;
		border: none;
		border-radius: 4px;
		padding: 10px;
		cursor: pointer;
		margin-top: 10px;
		align-self: center;
		position: absolute;
		transform: scale(0.7, 0.7);
		right: 0px;
		top: 0px;
	}

	.delete-button:hover {
		background-color: #c0392b;
	}

	.delete-button:active {
		background-color: #a93226;
	}
</style>
