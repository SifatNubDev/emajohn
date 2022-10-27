import React, { useEffect } from 'react';
import fakeData from "../../fakeData";
import { useState } from 'react';
import '../Shop/Shop.css';
import Product from '../product/Product';
import Cart from '../cart/Cart'
import { addToDb } from '../../utilities/fakedb';
import { getStoredCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';

function Shop() {

   const products = fakeData.slice(0, 20);


    const [cart, setCart] = useState([]);

    const addProduct = (product) => {
        const tobeAdded = product.key;
        const sameProduct = cart.find((pd) => pd.key === tobeAdded)

        let count = 1;
        let newCart;
        if (sameProduct) {
            const count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== tobeAdded)
            newCart = [...others, sameProduct];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product]
        }

        setCart(newCart);
        addToDb(product.key, count)
    }

    useEffect(() => {
        const savedData = getStoredCart();
        const ProductKeys = Object.keys(savedData);
        const productCart = ProductKeys.map((existing) => {
            const product = fakeData.find(pd => pd.key === existing);
            product.quantity = savedData[existing];
            return product;
        })
        setCart(productCart)
    }, [])

    return (
        <div className="main-container">
            <div className='dual-container'>
                {
                    products.map(item => <Product
                        key={item.key}
                        showAddButton={true}
                        showDetails={false}
                        addProduct={addProduct}
                        product={item}></Product>)
                }
            </div>
            <div className="line"></div>
            <div className="total-container">
                <Cart cart={cart}>
                    { cart.length? <Link to='/Review'><button className='main-button'>Review Order</button></Link> : <button className='main-button'>Review Order</button>}
                </Cart>
            </div>
        </div>
    );
}

export default Shop;