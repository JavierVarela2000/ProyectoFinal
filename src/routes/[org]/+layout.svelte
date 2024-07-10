<script>
	import { page } from "$app/stores";
</script>

<header>
	<h1>{$page.params.org}</h1>
</header>
<slot><!-- optional fallback --></slot>

<style>
	header {
		background-color: #333;
		color: white;
		padding: 10px 20px;
		text-align: center;
	}

	h1 {
		margin: 0;
	}
</style>
