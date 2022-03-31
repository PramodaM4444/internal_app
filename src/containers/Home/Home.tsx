import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../components/Button/Button';
import { CartItem } from '../../components/CartItem/CartItem';
import { addCartItem } from '../../store/actions/cartAction';
import { selectCartItems } from '../../store/selectors/cartSelector';

export const Home: React.FC<any> = ({ }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

   const item1 = {
        id: 1,
        name: 'Shirt',
        price: 400,
        quantity: 1
    }

    const addToCart = () => {
        dispatch(addCartItem(item1))
    }

    return(
        <>
        <div>From Home</div>
        <Button text="Add to Cart"  handleClick={addToCart} />
        {cartItems.map((ele: any) => <CartItem item={ele} />)}
        </>
    )
}
