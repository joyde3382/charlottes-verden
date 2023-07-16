export function cosmicProductsToProducts(cosmicProducts: CosmicJsProducts): Product[] {
    return cosmicProducts.objects.map((cosmicJsProduct: CosmicProduct) => {
        // const { object } = cosmicJsProduct;
        const { slug, title, metadata, thumbnail } = cosmicJsProduct;

        return {
          slug,
          title,
          id: metadata.id,
          price: metadata.price,
          discount: metadata.discount,
          stock: metadata.stock,
          image: metadata.image,
          images: metadata.images,
          thumbnail: thumbnail,
          main_category: metadata.main_category,
          sub_category: metadata.sub_category
        };
    });
}

export function cosmicProductToProduct(cosmicProduct: CosmicJsProduct): Product {
    const { object } = cosmicProduct;
    const { slug, title, metadata, thumbnail } = object;
  
    return {
      slug,
      title,
      id: metadata.id,
      price: metadata.price,
      discount: metadata.discount,
      stock: metadata.stock,
      image: metadata.image,
      images: metadata.images,
      thumbnail: thumbnail,
      main_category: metadata.main_category,
      sub_category: metadata.sub_category
    };
  }