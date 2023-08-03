import React from 'react';
import blankImage from '../../assests/images/blank_image.png'
import './ProductCard.css'


const ProductCard = () => {
    return ( 
        <div className="card_container">
            <div className="card">
                <img src={blankImage} className="card-img-top" alt="blank"/>
                <h3 className="card-title">Coke</h3>
                <p className="card-category">Category: Drink</p>
                <p className= "card-cost">Cost: 5 points</p>
                <button className="btn btn-primary">Add to Cart</button>
            </div>

            <div className="card">
                <img src={blankImage} className="card-img-top" alt="blank"/>
                <h3 className="card-title">Sprite</h3>
                <p className="card-category">Category: Drink</p>
                <p className= "card-cost">Cost: 5 points</p>
                <button className="btn btn-primary">Add to Cart</button>
            </div>

            <div className="card">
                <img src={blankImage} className="card-img-top" alt="blank"/>
                <h3 className="card-title">Popcorn</h3>
                <p className="card-category">Category: Snack</p>
                <p className= "card-cost">Cost: 10 points</p>
                <button className="btn btn-primary">Add to Cart</button>
            </div>

            <div className="card">
                <img src={blankImage} className="card-img-top" alt="blank"/>
                <h3 className="card-title">Skittles</h3>
                <p className="card-category">Category: Treat</p>
                <p className= "card-cost">Cost: 10 points</p>
                <button className="btn btn-primary">Add to Cart</button>
            </div>

            <div className="card">
                <img src={blankImage} className="card-img-top" alt="blank"/>
                <h3 className="card-title">Snickers</h3>
                <p className="card-category">Category: Treat</p>
                <p className= "card-cost">Cost: 10 points</p>
                <button className="btn btn-primary">Add to Cart</button>
            </div>

            <div className="card">
                <img src={blankImage} className="card-img-top" alt="blank"/>
                <h3 className="card-title">Water</h3>
                <p className="card-category">Category: Drink</p>
                <p className= "card-cost">Cost: 5 points</p>
                <button className="btn btn-primary">Add to Cart</button>
            </div>

            <div className="card">
                <img src={blankImage} className="card-img-top" alt="blank"/>
                <h3 className="card-title">Pretzel</h3>
                <p className="card-category">Category: Snack</p>
                <p className= "card-cost">Cost: 10 points</p>
                <button className="btn btn-primary">Add to Cart</button>
            </div>

            <div className="card">
                <img src={blankImage} className="card-img-top" alt="blank"/>
                <h3 className="card-title">Nachos</h3>
                <p className="card-category">Category: Snack</p>
                <p className= "card-cost">Cost: 10 points</p>
                <button className="btn btn-primary">Add to Cart</button>
            </div>
        </div>
     );
}
 
export default ProductCard;