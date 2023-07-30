import React from 'react';
import blankImage from '../../assests/images/blank_image.png'

const ProductCard = () => {
    return ( 
        <div className="card" style={{width: "18rem"}}>
            <img src={blankImage} class="card-img-top" alt="blank"/>
            <div className="card-body">
                <h3 className="card-title">Product Name</h3>
                <p className="card-category">category</p>
                <p className= "card-cost">points</p>
                <a href="#" className="btn btn-primary">Add to Cart</a>
            </div>
        </div>
     );
}
 
export default ProductCard;