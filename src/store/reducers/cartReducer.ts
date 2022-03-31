
// interface articleState {
//     article: {}
// }

import { CartActionTypes } from "../types/cartActionTypes";
import { addCartItems, removeItem } from "../utils/cartFunctions";

// const initialState = {
//     article: {} as articleState
// }

// export const articleReducer = (state: articleState = initialState, action: any) => {

// }


const INITIAL_STATE = {
    hidden: true,
    cartItems: [{
            id: 1,
            name: 'Shirt',
            price: 400,
            quantity: 1
    }] as any
}

export const cartReducer = (state = INITIAL_STATE as any, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case CartActionTypes.SHOW_HIDE_CART:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM: 
        return {
            ...state,
            cartItems: addCartItems(state.cartItems, action.payload)
        }
        case CartActionTypes.REMOVE_ITEM: 
        return{
            ...state,
            cartItems: removeItem(state.cartItems, action.payload)
        }
        default:
            return state;
    }
}
