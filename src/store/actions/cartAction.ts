import { CartActionTypes } from "../types/cartActionTypes";

export const addCartItem = (item: any) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});