import React from 'react';


const Cart = (props) => {
    
    const cart = props.cart;
    // console.log(cart)
    // const total = cart.reduce( (total, element) => total + element.price , 0)

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        total = total + element.price * element.quantity;
    }

    let shipping = 0;
    if(total > 50){
        shipping = 0;
    }
    else if (total > 15){
        shipping = 5.99
    }
    else if (total > 0){
        shipping = 9.99
    }

    const Tax = total / 10;
    const grandTotal = (total + shipping + Number(Tax)).toFixed(2);

    const format = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div className='cart'>
            <h3>Order Summery</h3>
            <p>Items ordered : {cart.length}</p>
            <p>Product Price : {format(total)}</p>
            <p>Shipping Cost : {shipping}</p>
            <p>Tax + VAT : {format(Tax)}</p>
            <h4>Total Price : {grandTotal}</h4>
            {
                props.children
            }
        </div>
    );
};

export default Cart;