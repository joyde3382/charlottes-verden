import { getProductsByMainCategory } from '$lib/cosmicjs/cosmicjs';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({params}) => {
    const { slug } = params;
    var products = await getProductsByMainCategory(slug)

    if (!products) throw error(404);

    return {
        products: products
    }
}) satisfies PageServerLoad;