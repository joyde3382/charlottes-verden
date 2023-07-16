<script lang="ts">
	import ProductCard from '$lib/product/productCard.svelte';
	import { Gallery } from 'flowbite-svelte';
    import type { PageData } from './$types';

	export let data: PageData;
	$: ( { products } = data);
</script>


<div class="container h-full mx-auto flex justify-center items-center">
	
	<div class="grid grid-cols-3 gap-4">
    {#each products as product}
			<ProductCard product={product}/>
		{/each}
    </div>
</div>