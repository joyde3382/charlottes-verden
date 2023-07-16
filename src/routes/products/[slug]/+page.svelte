<script lang="ts">
	import ProductDetails from '$lib/product/productDetails.svelte';
    import type { PageData } from './$types';

    export let data: PageData;
	const { product } = data;
</script>

<ProductDetails product={product}/>