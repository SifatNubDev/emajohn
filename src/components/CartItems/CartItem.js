import React from 'react';
import '../CartItems/Cartitem.css'

const CartItem = (props) => {
    const { img, name, quantity, key, price } = props.product;
    return (
        <div className='review-item'>
            <div className='product-img'>
                <img src={img} alt="product-img" />
            </div>
            <div className="review-content">
                <h3>{name}</h3>
                <p>Quantity : {quantity}</p>
                <h4>$ {price}</h4>
                <button onClick={ () => props.remove(key)} className='main-button'>Remove</button>
            </div>
        </div>
    );
};

export default CartItem;