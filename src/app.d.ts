// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

declare class CosmicJsProducts {
	objects: CosmicProduct[]
	total: number
}

declare class CosmicJsProduct {
    object: CosmicProduct;
}

declare class CosmicProduct {
    slug:     string;
    title:    string;
    thumbnail: string;
    metadata: Metadata
}

declare class Metadata {
    id:            string;
    price:         number;
    discount:      number;
    stock:         number;
    image:         Image;
    sub_category:  SubCategory;
    main_category: MainCategory;
    images:        Image[];
}

enum SubCategory {
    Crochet = 1,
    WeddingCake = 2,
    Translation = 3,
}
enum MainCategory {
    Service = 1,
    Product = 2,
}
declare class Image {
    url:       string;
    imgix_url: string;
}

declare class Product {
    slug:     string;
    title:    string;
    id: string;
    price: number;
    discount: number;
    stock: number;
    image: Image;
    images: Image[];
    thumbnail: string;
    main_category: Category;
    sub_category: Category;
}

declare class AppStore {
    mobileMenuOpen: boolean;
    cartOpen: boolean;
    cart: Cart;
}

declare class Cart {
    products: CartProduct[];
    totalQuantity: number;
    totalPrice: number;
  };
declare class CartProduct extends Product {
    quantity: number;
}
  

