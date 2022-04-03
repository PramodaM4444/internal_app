import React from "react";
import { CartItem } from "../../components/CartItem/CartItem";
import { CustomButton } from "../../components/CustomButton/CustomButton";
import { UI_Constants } from "../../Constants/UI_Constants";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { addCartItem } from "../../store/actions/cartAction";
import { selectCartItems } from "../../store/selectors/cartSelector";

export const Example: React.FC = () => {
  const dispatch = useAppDispatch();

  // Selectors are used to access the part of the state
  const cartItems = useAppSelector(selectCartItems);

  // This will be action payled, Anything which needs to stored in the Redux store
  const item1 = {
    id: 1,
    name: "Shirt",
    price: 400,
    quantity: 1,
  };

  const addToCart = () => {
    // Dispatching the action, will call the assiciated reducer with the matching action type
    dispatch(addCartItem(item1));
  };

  return (
    <>
      <div>Redux Example</div>
      {/* Custom button which will modify the MUI button by accepting the props i.e color etc */}
      <CustomButton variant="contained" color="black" onClick={addToCart}>
        {UI_Constants.addToCart}
      </CustomButton>
      {cartItems.map((ele: any) => (
        <CartItem key={ele.id} item={ele} />
      ))}
    </>
  );
};

