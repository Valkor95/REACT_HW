import React from 'react';
import CartWindow from "../componets/CartWindow/CartWindow.jsx";
import ActionButtons from "../componets/CartWindow/child/ActionButtons.jsx";
import {useSelector} from "react-redux";

const Cart = () => {
    const cartItems = useSelector((state) => state.cartCount.items);

    return (
        <div>
            <CartWindow/>
            {cartItems.length > 0 && <ActionButtons/>}
        </div>
    );
};

export default Cart;