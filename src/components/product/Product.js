import React from 'react';
import '../product/Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Product = (props) => {
    
    const { img, name, seller, price, stock, key, category, features } = props.product;


    return (
        <div className="product-item">
            <div>
                <img src={img} alt="product-img" />
            </div>
            <div className="p-content">
                <h3><Link to={"/product/"+key}>{name}</Link></h3>
                { props.showDetails && <div className="review">
                    <h4>Product Category : {category}</h4>
                </div>}
                <p>By : {seller}</p>
                <h4>$ {price}</h4>
                <p>Only {stock} left in stock - Order soon</p>
                {
                    showdetails(props.showAddButton, props, features)
                }

            </div>
        </div>
    );
};

function showdetails(showAddButton, props, features){
    if(showAddButton === true){
        return (
            <button className='main-button' onClick={() => props.addProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /><span>add to cart</span></button>
        )
    }
    return (
        <>
            <h4>Detail Info : </h4>
            {
                features.map(f => <Feature feature={f}></Feature>)
            }
        </>
    )
    function Feature(props){
        const {description, value} = props.feature;
        return (
            <div className="p-details">
                <p>{description} :</p>
                <p>{value}</p>
            </div>
        )
    }
}

export default Product;