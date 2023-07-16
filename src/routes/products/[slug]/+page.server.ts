import { getProductBySlug } from '$lib/cosmicjs/cosmicjs';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
   
    const { slug } = params;
    var product = await getProductBySlug(slug)

    if (!product) throw error(404);

    return {
        product: product
    }
}) satisfies PageServerLoad;
