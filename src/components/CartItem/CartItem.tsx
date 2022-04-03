import React from 'react';
import { CartItemWrapper } from './CartItem.styles';
import { CartItemProps } from './CartItem.types';

/**
 * Shows each cart item
 * @param param0 accepts the cart item object
 * @returns displays the cart item name and quantity
 */
export const CartItem:React.FC<CartItemProps> = ({ item: { name, quantity } }) => (
    // CartItemWrapper is the styled component
    <CartItemWrapper>
        <div>Name: {name}</div>
        <div>Qty: {quantity}</div>
    </CartItemWrapper>
);
