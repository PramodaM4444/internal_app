import { EachCartItem } from "../../components/CartItem/CartItem.types";
import { CartActionTypes } from "../actionTypes/cartActionTypes";

export const addCartItem = (item: EachCartItem) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item,
});
