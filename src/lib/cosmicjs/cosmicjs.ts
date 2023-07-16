import { createBucketClient } from '@cosmicjs/sdk'
import { error } from '@sveltejs/kit';
import { cosmicProductToProduct, cosmicProductsToProducts } from './cosmicMapper';
const cosmic = createBucketClient({
  bucketSlug: 'charlottes-verden-development',
  readKey: 'TJ3sCNcvsibL8HNpYWtW2CZU8oL40ChgroY4MGXSRfZnc7jIck'
})



export async function getProducts(): Promise<Product[]> {

     const cosmicResponse: CosmicJsProducts = await cosmic.objects.find({
        type: 'products'
      }).props("slug,title,metadata,thumbnail")

    if (!cosmicResponse) throw error(404);

    let convertedProducts = cosmicProductsToProducts(cosmicResponse);

    return convertedProducts;
};

export async function getProductBySlug(slug: string): Promise<Product> {
    const cosmicResponse: CosmicJsProduct = await cosmic.objects.findOne({
      type: 'products',
      slug: slug
    }).props([
      "slug,title,metadata,thumbnail"
    ])

    if (!cosmicResponse) throw error(404);

    let convertedProduct = cosmicProductToProduct(cosmicResponse);
    return convertedProduct;
}

export async function getProductsByMainCategory(category: string): Promise<Product[]> {
  const query = {
    type: 'products',
    "metadata.main_category":{
      $eq: category
    } 
};
    // 'metadata.category.metadata.parent_category.metadata.parent_category.metadata.parent_category.slug': category.toLowerCase()
  const cosmicResponse: CosmicJsProducts = await cosmic.objects.find(query)
  .props("slug,title,metadata,thumbnail").depth(1)

  if (!cosmicResponse) throw error(404);

  let convertedProducts = cosmicProductsToProducts(cosmicResponse);

  return convertedProducts;
}