import React, { useEffect, useState } from 'react';
import '../Review/Review.css'
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';
import fakeData from '../../fakeData';
import CartItem from '../CartItems/CartItem';
import { deleteFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Cart from '../cart/Cart'
import shipping from '../../images/Shipping.gif';

const Review = () => {

    const [cart, setCart] = useState([]);
    const [placement, setPlacement] = useState(false);

    const orderPlacement = () => {
        setCart([]);
        setPlacement(true);
        clearTheCart();
    }

    const removeProduct = (Selected) => {
        const deleteItem = cart.filter((pd) => pd.key !== Selected)
        setCart(deleteItem);
        deleteFromDb(Selected);
    }

    useEffect(() => {
        const savedData = getStoredCart();
        const ProductKeys = Object.keys(savedData);
        const productCart = ProductKeys.map((key) => {
            const product = fakeData.find((pd) => pd.key === key);
            product.quantity = savedData[key];
            return product;
        })
        setCart(productCart);
    }, [])

    let Thankyou;
    if (placement) {
        Thankyou = <img className='ship' src={shipping} alt="order-shipping" />
    }

    return (
        <div className="main-container">
            <div className="dual-container">
                {
                    cart.map(pd => <CartItem
                        key={pd.key}
                        remove={removeProduct}
                        product={pd}></CartItem>)
                }
                <div className='shipping'>
                    {Thankyou}
                </div>
            </div>
            <div className="total-container">
                <h2><FontAwesomeIcon icon={faShoppingCart} /> {cart.length}</h2>
                <Cart cart={cart}>
                    <button onClick={orderPlacement} className='main-button'>Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;