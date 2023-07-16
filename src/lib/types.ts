// export interface CartProduct extends Pick<Product, "id" | "title" | "thumbnail"> {
//     price: number;
//     quantity: number;
//     thumbnail: string;
//   }

const localStorageHash = "553d2d4d-edc3-441a-b570-22af983bf768";
const localStorageKeys = [`${localStorageHash}-cart`] as const;
export type LocalStorageKey = typeof localStorageKeys[number];
