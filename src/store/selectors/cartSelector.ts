import { createSelector } from "reselect";

// Selector is a function which accepts the Redux state as an argument and returns the piece of the state that is requried.

export const selectCart = (state: { cartReducer: any }) => state.cartReducer;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems,
);
