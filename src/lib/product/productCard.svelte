<script lang="ts">
    // import { Card } from "flowbite-svelte";
	import { addToCart } from '$lib/stores/cartStore';
    export let product : Product;

    // let cart = get(cartItems);
    // let cartItemIndex = cart.findIndex((item) => { return item.id === product.id });
    // let cartProduct = cart[cartItemIndex];
    // cartItems.subscribe((newCartValue) => {
    //     cart = newCartValue;
    //     cartItemIndex = cart.findIndex((item) => {return item.id === product.id });
    //     cartProduct = cart[cartItemIndex];
    // })

let cartQuantity = 0;

const onIncrement = () => cartQuantity++;
  const onDecrement = () => {
    if (cartQuantity === 0) return;
    cartQuantity--;
  };
  const onAddToCart = () => {
    onIncrement()
    addToCart(product, cartQuantity);
    cartQuantity = 0;
  };
</script>

<div class="card p-4">
<!-- <Card padding="none" > -->
    <a href="/products/{product.slug}">
		<img class="p-8 rounded-t-lg object-cover h-48 w-96" src={product.image.url} alt="product 1" />
	</a>
    <div class="px-5 pb-5">
        <a href="/">
          <h5 class='text-xl font-semibold tracking-tight'>
            {product.title}
          </h5>
        </a>
        <div class="flex justify-between items-center">
            <span class="text-3xl font-bold ">${product.price}</span>
            <button class="btn variant-filled" on:click={onAddToCart}>Buy now</button>
        </div>
    </div>
</div>