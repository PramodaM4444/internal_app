
export const addCartItems = (cartItems: any[], cartItemToAdd: { id: any; }) => {
    const existingItem = cartItems.find((item: { id: any; }) => item.id === cartItemToAdd.id);

    if(existingItem){
        return cartItems.map((item: { id: any; quantity: number; }) => (
            item.id === cartItemToAdd.id ? 
            {...item, quantity: item.quantity + 1} :
            item
        ))
    }

    return [...cartItems, cartItemToAdd]
}

export const removeItem = (cartItems: any[], cartItemToRemove: { id: any; }) => {
    return cartItems.filter((item: { id: any; }) => item.id !== cartItemToRemove.id)
};
