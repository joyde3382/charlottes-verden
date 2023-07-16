import { getProducts } from "$lib/cosmicjs/cosmicjs";
import { writable, get } from "svelte/store";

export const productStore = writable(async () => {
    await getProducts();
})