export interface EachCartItem {
    id: number;
    name: string;
    quantity: number;
}

export interface CartItemProps {
    item: EachCartItem;
}
