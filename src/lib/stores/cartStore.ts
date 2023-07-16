import { get, writable } from "svelte/store";
import { getInitialData, persistData } from "$lib/helpers/localstorage";

const cartDefaultValue: Cart = {
  products: [],
  totalPrice: 0,
  totalQuantity: 0,
};



export const appStore = writable<AppStore>({
  mobileMenuOpen: false,
  cartOpen: false,
  cart: getInitialData({ defaultValue: cartDefaultValue, key: "553d2d4d-edc3-441a-b570-22af983bf768-cart" }),
});

appStore.subscribe((store) => persistData({ data: store.cart, key: "553d2d4d-edc3-441a-b570-22af983bf768-cart" }));

export const toggleMobileMenu = () => appStore.update((prev) => ({ ...prev, mobileMenuOpen: !prev.mobileMenuOpen }));

export const toggleCart = () => appStore.update((prev) => ({ ...prev, cartOpen: !prev.cartOpen }));

export const removeFromCart = (id: string) =>
  appStore.update((prev) => {
    let cart = { ...prev.cart };
    const index = prev.cart.products.findIndex((product) => product.id === id);
    cart.totalQuantity -= cart.products[index].quantity;
    cart.totalPrice -= cart.products[index].price * cart.products[index].quantity;
    cart.products.splice(index, 1);
    return { ...prev, cart };
  });

  export const addToCart = ({ id, title, images, ...rest }: Product, quantity: number) =>
  appStore.update((prev) => {
    let cart = { ...prev.cart };
    let index = prev.cart.products.findIndex((product) => product.id === id);
    if (index === -1) {
      const { price, thumbnail} = rest;

      const cartProduct: CartProduct = {
        id,
        title,
        slug: '',         // Add the required properties from CartProduct
        discount: 0,      // Add the required properties from CartProduct
        stock: 0,         // Add the required properties from CartProduct
        image: null,      // Add the required properties from CartProduct
        images: [],       // Add the required properties from CartProduct
        price,
        quantity,
        thumbnail,
        main_category: {},
        sub_category: {}
      };
      cart.products.push(cartProduct);
      cart.totalPrice += quantity * price;
    } else {
      cart.products[index].quantity += quantity;
      cart.totalPrice += quantity * cart.products[index].price;
    }
    cart.totalQuantity += quantity;
    return { ...prev, cart };
  });

