// // React Context
// import { writable, get } from "svelte/store";

// export const cartItems = writable<CartItem[]>([]);
// // [ {id: "1", quantity: 4}, {id: "2", quantity: 1}]

// // add to cart
// export const addToCart = (id: string) => {
//     // cartItems is a writable, not a value
//     // get(cartItems)

//     let items = get(cartItems);
//     let itemPosition = items.findIndex(
//         (item) => { return item.id == id} // does the current item have an id of "1"?
//     )

//     if (itemPosition !== -1) {
//         // item is not in the cart at all, so add the object to the cart
//         cartItems.update(() => {
//             let updatedItems = items.map((item) => {
//                 if(item.id === id) {
//                     return {...item, quantity: item.quantity + 1 };
//                 }
//                 return item;
//             })
//             return updatedItems;
//         });
//     } else {
//         // Item is already in cart, add to the quantity of that item
//         cartItems.update(() => {
//             return [...items, {id: id, quantity: 1} ];
//         })
//     }

// }

// // remove from cart
// export const removeFromCart = (id: string) => {
//     let items = get(cartItems);
//     let itemPosition = items.findIndex(
//         (item) => { return item.id == id} // does the current item have an id of "1"?
//     )

//     if (items[itemPosition]?.quantity - 1 === 0) {
//         items.splice(itemPosition, 1);
//     }

//     cartItems.update(() => {
//         let updatedItems = items.map((item) => {
//             if(item.id === id) {
//                 return {...item, quantity: item.quantity - 1 };
//             }
//             return item;
//         })
//         return updatedItems;
//     });
// }