<script>
	import { page } from "$app/stores";
	import TecnologiesCard from "$lib/components/TecnologiesCard.svelte";
	export let data;
	import { loadingStore } from "$lib/stores";
	import GeneralInformationCard from "$lib/components/GeneralInformationCard.svelte";
	import { onMount } from "svelte";
	import VulnsCard from "$lib/components/VulnsCard.svelte";
	import PortsCard from "$lib/components/PortsCard.svelte";
	const { generalInformation, technologies, vulnsData, ports } = data;
	onMount(() => {
		loadingStore.update(() => {
			return false;
		});
	});
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<div class="container">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<a
		on:click={() => {
			window.history.back();
		}}
		class="btn btn-primary mt-3"
	>
		<i class="bi bi-chevron-left"></i> Return
	</a>
	<div class=" d-flex align-items-start justify-content-center mt-5 gap-2">
		<div class="d-flex flex-column gap-2 left-container">
			<GeneralInformationCard {generalInformation} />
			<PortsCard {ports} />
			<TecnologiesCard {technologies} />
		</div>
		<VulnsCard {vulnsData} />
	</div>
</div>

<style>
	.container {
		height: calc(100vh - 100px);
	}
	.left-container {
		width: 30%;
	}
</style>
