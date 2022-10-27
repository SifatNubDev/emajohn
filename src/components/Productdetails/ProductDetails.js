import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../product/Product';
import '../Productdetails/productdetails.css';

const ProductDetails = () => {

    const {productkey} = useParams();
    const product = fakeData.find(pd => pd.key === productkey);

    return (
        <div className='details'>
            <h1>Product Details</h1>
            <Product showAddButton={false} showDetails={true} product={product}></Product>
        </div>
    );
};

export default ProductDetails;