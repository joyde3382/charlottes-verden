<script lang="ts">
    import { get } from 'svelte/store';
	// import { cartItems} from '../../cart';
	import Presentation from '$lib/components/productPage/Presentation.svelte';
	import Slider from '$lib/components/productPage/Slider.svelte';

    export let product : Product;
    // = {  slug: "",title: "", id: "", price: 0, discount: 0, stock: 0,
    //  image: {url: "/Coffee.jpg"}, images: [{ image: {url: "/Coffee.jpg"}}, { image: {url: "/Coffee.jpg"}}] }

    // let cart = get(cartItems);
    // let cartItemIndex = cart.findIndex((item) => { return item.id === product.id });
    // let cartProduct = cart[cartItemIndex];
    // cartItems.subscribe((newCartValue) => {
    //     cart = newCartValue;
    //     cartItemIndex = cart.findIndex((item) => {return item.id === product.id });
    //     cartProduct = cart[cartItemIndex];
    // })
</script>

<main
  class="lg:grid lg:grid-cols-2 lg:place-items-center lg:my-auto lg:py-12 lg:px-6 lg:gap-12 max-w-6xl mx-auto w-full"
>

    <Slider product={product} />
    <Presentation product={product} />

</main>