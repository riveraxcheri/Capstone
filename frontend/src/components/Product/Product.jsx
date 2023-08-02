import React from 'react';
import EditButton from '../EditButton/EditButton';
import DeleteButton from '../DeleteButton/DeleteButton';
import blankImage from '../../assests/images/blank_image.png'


const Product = ({item}) => {
    return ( 
        <li className='product_info'>
            <img src={blankImage} className="card-img-top" alt="blank"/>
            <p>Product: {item.name}</p>
            <p>Category: {item.category}</p>
            <p>Points Cost: {item.cost}</p>
            <p>Inventory: {item.inventory}</p>
            <EditButton/>
            <DeleteButton/>
        </li>
     );
}
 
export default Product;