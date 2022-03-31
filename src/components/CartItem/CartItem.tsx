
import React from 'react';

export const CartItem:React.FC<any> = ({ item: { id, name, quantity } }: {item: any}) => (
    <div key={id}>
        <div>Name: {name}</div>
        <div>Qty: {quantity}</div>
    </div>
);
