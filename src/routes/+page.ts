import type { PageLoad } from './$types';
import { getProducts } from '$lib/cosmicjs/cosmicjs';

export const load = (async () => {
   
  let products = await getProducts();
  return {
    products: products
  }

}) satisfies PageLoad;

    // let testProducts: Product[] = 
    //   [
    //     {
    //       title: "test",
    //       slug: "slug",
    //       id: "00",
    //       metadata: {
    //         price: 5,
    //         discount: 1,
    //         stock: 2,
    //         image: ""
    //       }
    //     }
    //   ]