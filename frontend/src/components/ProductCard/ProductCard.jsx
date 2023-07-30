import React from 'react';
import blankImage from '../../assests/images/blank_image.png'
import './ProductCard.css'


const ProductCard = () => {
    return ( 
        <div className="card_container">
            <div className="card">
                <img src={blankImage} className="card-img-top" alt="blank"/>
                <h3 className="card-title">Product Name</h3>
                <p className="card-category">category</p>
                <p className= "card-cost">points</p>
                <button className="btn btn-primary">Add to Cart</button>
            </div>

            <div className="card">
                <img src={blankImage} className="card-img-top" alt="blank"/>
                <h3 className="card-title">Product Name</h3>
                <p className="card-category">category</p>
                <p className= "card-cost">points</p>
                <button className="btn btn-primary">Add to Cart</button>
            </div>

            <div className="card">
                <img src={blankImage} className="card-img-top" alt="blank"/>
                <h3 className="card-title">Product Name</h3>
                <p className="card-category">category</p>
                <p className= "card-cost">points</p>
                <button className="btn btn-primary">Add to Cart</button>
            </div>

            <div className="card">
                <img src={blankImage} className="card-img-top" alt="blank"/>
                <h3 className="card-title">Product Name</h3>
                <p className="card-category">category</p>
                <p className= "card-cost">points</p>
                <button className="btn btn-primary">Add to Cart</button>
            </div>

            <div className="card">
                <img src={blankImage} className="card-img-top" alt="blank"/>
                <h3 className="card-title">Product Name</h3>
                <p className="card-category">category</p>
                <p className= "card-cost">points</p>
                <button className="btn btn-primary">Add to Cart</button>
            </div>

            <div className="card">
                <img src={blankImage} className="card-img-top" alt="blank"/>
                <h3 className="card-title">Product Name</h3>
                <p className="card-category">category</p>
                <p className= "card-cost">points</p>
                <button className="btn btn-primary">Add to Cart</button>
            </div>

            <div className="card">
                <img src={blankImage} className="card-img-top" alt="blank"/>
                <h3 className="card-title">Product Name</h3>
                <p className="card-category">category</p>
                <p className= "card-cost">points</p>
                <button className="btn btn-primary">Add to Cart</button>
            </div>

            <div className="card">
                <img src={blankImage} className="card-img-top" alt="blank"/>
                <h3 className="card-title">Product Name</h3>
                <p className="card-category">category</p>
                <p className= "card-cost">points</p>
                <button className="btn btn-primary">Add to Cart</button>
            </div>
        </div>
     );
}
 
export default ProductCard;