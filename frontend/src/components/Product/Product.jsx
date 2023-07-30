import React from 'react';

// Create AddToCart Button Component?

const Product = ({item}) => {
    return ( 
        <li className='product_info'>
            <img src={blankImage} className="card-img-top" alt="blank"/>
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>Points Needed: {item.cost}</p>
            <AddToCartButton/>
        </li>
     );
}
 
export default Product;