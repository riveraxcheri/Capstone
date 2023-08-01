import React, { useState } from 'react';
const ProductForm = (props) => {
    const [itemName, setItemName] = useState("");
    const [itemCategory, setItemCategory] = useState("");
    const [itemCost, setItemCost] = useState(0);
    const [itemInventory, setItemInventory] = useState(0);

    function handleSubmit(event) {
        event.preventDefault();
        const formValues = {
          name: itemName,
          category: itemCategory,
          cost: itemCost,
          inventory: itemInventory,
        };
        console.log(formValues);
        props.addNewItem(formValues).then(response =>props.getAllItems())
        ;
      }
    return ( 
        <form onSubmit={(event) => handleSubmit(event)}>
            <div>
                <h1>Add Product To Inventory:</h1>
            </div>
            <div>
                <label>Product:</label>
                <input
                type="text"
                value={itemName}
                onChange={(event) => setItemName(event.target.value)}
                />
            </div>
            <div>
                <label>Category:</label>
                <input
                type="text"
                value={itemCategory}
                onChange={(event) => setItemCategory(event.target.value)}
                />
            </div>
            <div>
                <label>Cost:</label>
                <input
                type="number"
                value={itemCost}
                onChange={(event) => setItemCost(event.target.value)}
                />
            </div>
            <div>
                <label>Inventory:</label>
                <input
                type="number"
                value={itemInventory}
                onChange={(event) => setItemInventory(event.target.value)}
                />
            </div>
            <button type="submit">
                Add Product
            </button>
        </form>
     );
}
 
export default ProductForm;