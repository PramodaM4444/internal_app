import { EachCartItem } from "@components/CartItem/CartItem.types";
import { CartActionTypes } from "@store/actionTypes/cartActionTypes";
import { addCartItems } from "@store/utils/cartFunctions";

const INITIAL_STATE = {
    cartItems: [] as EachCartItem[],
};

export const cartReducer = (
    state = INITIAL_STATE,
    action: { type: any; payload: any },
) => {
    switch (action.type) {
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addCartItems(state.cartItems, action.payload),
            };
        default:
            return state;
    }
};
