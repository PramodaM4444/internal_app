import { EachCartItem } from "../../components/CartItem/CartItem.types";

export const addCartItems = (
    cartItems: EachCartItem[],
    cartItemToAdd: EachCartItem,
) => {
    const existingItem = cartItems.find((item) => item.id === cartItemToAdd.id);

    if (existingItem) {
        return cartItems.map((item: EachCartItem) =>
            item.id === cartItemToAdd.id
                ? { ...item, quantity: item.quantity + 1 }
                : item,
        );
    }

    return [...cartItems, cartItemToAdd];
};
