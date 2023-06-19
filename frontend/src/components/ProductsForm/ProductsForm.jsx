import React, { useState } from 'react';


const ProductsForm = (props) => {
    const[itemName, setItemName] = useState("");
    const[itemCost, setItemCost] = useState("");
    const[itemCategory, setItemCategory] = useState("");
    const[itemInventory, setItemInventory] = useState("");
    const[isAvailable, setIsAvailable]= useState(true);

    const availableToggle = () => {setIsAvailable(!isAvailable);};

    function handleSubmit(event) {
        event.prevenrDefault();
        const formValues = {
            name: itemName,
            cost: itemCost,
            category: itemCategory,
            inventory: itemInventory,
            isAvailable: true,
        };
        console.log(formValues);
        props.editProductsProp(formValues).then(response =>props.getAllPropducts());
    }
    

    return ( 
        <div>
            <h1>Products Form</h1>
            <p>
                This is where Teachers/Admin can add new Products:
            </p>
            <form onSubmit={(event) => handleSubmit(event)}>
                <div>
                    <h2>Add New Product:</h2>
                </div>
                <div>
                    <label>Name:</label>
                    <input type="text"
                    value={itemName}
                    onChange={(event) => setItemName(event.target.value)}
                    />
                </div>
                <div>
                    <label>Cost:</label>
                    <input type='number'
                    value={itemCost}
                    onChange={(event) => setItemCost(event.target.value)}
                    />
                </div>
                <div>
                    <label>Category:</label>
                    <input type="text"
                    value={itemCategory}
                    onChange={(event) => setItemCategory(event.target.value)}
                    />
                </div>
                <div>
                    <label>Inventory:</label>
                    <input type="number"
                    value={itemInventory}
                    onChange={(event) => setItemInventory(event.target.value)}
                    />
                </div>
                <div>
                    <label>Availability:</label>
                    <input type={Boolean}
                    value={isAvailable}
                    onChange={(event) => setIsAvailable(event.target.value)}
                    />
                </div>
                <div>
                    <button type="submit">Add Product</button>
                </div>
                
            </form>
        </div>
     );
}
 
export default ProductsForm;