<script>
	import { insetOrganization } from "$lib/supabase.js";
	import handleExcelFile from "$lib/handleExcelFile";
	import categorizeData from "$lib/categorizeData";
	export let closeModal;

	const handleSubmimt = async (event) => {
		const titulo = event.target[0].value;
		const excel = event.target[1].files[0];
		const excelData = await handleExcelFile(excel);
		if (!excelData) return;
		let categorizedData = await categorizeData(excelData);
		const org = { name: titulo, items: categorizedData };
		insetOrganization(org);
		closeModal();
		window.location.reload();
	};
</script>

<form on:submit|preventDefault={(e) => handleSubmimt(e)}>
	<div class="mb-3">
		<label for="textInput" class="form-label">Texto</label>
		<input name="titulo" type="text" class="form-control" id="textInput" />
	</div>
	<div class="mb-3">
		<label for="fileInput" class="form-label">Archivo Excel</label>
		<input
			name="excel"
			type="file"
			class="form-control"
			id="fileInput"
			accept=".xls,.xlsx"
		/>
	</div>
	<div class="modal-footer">
		<button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
			>Cerrar</button
		>
		<button type="submit" class="btn btn-primary">Guardar</button>
	</div>
</form>
