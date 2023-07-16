<script lang="ts">
	import { get } from 'svelte/store';
	import ProductCard from "$lib/product/productCard.svelte";
	// import { cartItems } from '../cart';
	import type { PageData } from './$types';

	export let data: PageData;
	const { products } = data;

</script>

<div class="container h-full mx-auto flex justify-center items-center">
	
	<div class="grid grid-cols-3 gap-4">
		<div class="col-span-3">
			<h1>SvelteKit 1.0 Store</h1>
		</div>
		{#each products as product}
			<ProductCard product={product}/>
		{/each}
	</div>
</div>
