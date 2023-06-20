import ProductsList from "../ProductsList/ProductsList";
import React, { useState } from 'react';

// const[itemName, setItemName] = useState("");
// const[itemCost, setItemCost] = useState("");
// const[itemCategory, setItemCategory] = useState("");
// const[itemInventory, setItemInventory] = useState("");
// const[isAvailable, setIsAvailable]= useState("");


const ProductsTable = ({items}) => {
    return ( 
        <ul>
            {items
            .filter(item => (
                item.name.includes(itemName) ||
                item.cost.includes(itemCost) ||
                item.category.includes(itemCategory) ||
                item.inventory.includes(itemInventory) ||
                item.is_available.includes(isAvailable)

            ))
            .map((item) => (
                <ProductsList items={items} key={item.id} />
            ))}
        </ul>
     );
}
 
export default ProductsTable;