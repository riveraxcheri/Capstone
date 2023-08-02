import React from 'react';
import blankImage from '../../assests/images/blank_image.png'
import './ProductCard.css'


const ProductCard = () => {
    return ( 
        <div className="card_container">
            <div className="card">
                <img src={blankImage} className="card-img-top" alt="blank"/>
                <h3 className="card-title">Coke</h3>
                <p className="card-category">Drink</p>
                <p className= "card-cost">5 points</p>
                <button class="btn btn-primary">Add to Cart</button>
            </div>

            <div className="card">
                <img src={blankImage} className="card-img-top" alt="blank"/>
                <h3 className="card-title">Sprite</h3>
                <p className="card-category">Drink</p>
                <p className= "card-cost">5 points</p>
                <button className="btn btn-primary">Add to Cart</button>
            </div>

            <div className="card">
                <img src={blankImage} className="card-img-top" alt="blank"/>
                <h3 className="card-title">Popcorn</h3>
                <p className="card-category">Snack</p>
                <p className= "card-cost">10 points</p>
                <button className="btn btn-primary">Add to Cart</button>
            </div>

            <div className="card">
                <img src={blankImage} className="card-img-top" alt="blank"/>
                <h3 className="card-title">Skittles</h3>
                <p className="card-category">Treat</p>
                <p className= "card-cost">10 points</p>
                <button className="btn btn-primary">Add to Cart</button>
            </div>

            <div className="card">
                <img src={blankImage} className="card-img-top" alt="blank"/>
                <h3 className="card-title">Snickers</h3>
                <p className="card-category">Treat</p>
                <p className= "card-cost">10 points</p>
                <button className="btn btn-primary">Add to Cart</button>
            </div>

            <div className="card">
                <img src={blankImage} className="card-img-top" alt="blank"/>
                <h3 className="card-title">Water</h3>
                <p className="card-category">Drink</p>
                <p className= "card-cost">5 points</p>
                <button className="btn btn-primary">Add to Cart</button>
            </div>

            <div className="card">
                <img src={blankImage} className="card-img-top" alt="blank"/>
                <h3 className="card-title">Pretzel</h3>
                <p className="card-category">Snack</p>
                <p className= "card-cost">10 points</p>
                <button className="btn btn-primary">Add to Cart</button>
            </div>

            <div className="card">
                <img src={blankImage} className="card-img-top" alt="blank"/>
                <h3 className="card-title">Nachos</h3>
                <p className="card-category">Snack</p>
                <p className= "card-cost">10 points</p>
                <button className="btn btn-primary">Add to Cart</button>
            </div>
        </div>
     );
}
 
export default ProductCard;