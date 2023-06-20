
import React, { useState } from 'react';
import useCustomForm from '../../hooks/useCustomForm';

const ProductsForm = ({addProducts}, {getAllProducts}) => {
    // const[itemName, setItemName] = useState("");
    // const[itemCost, setItemCost] = useState("");
    // const[itemCategory, setItemCategory] = useState("");
    // const[itemInventory, setItemInventory] = useState("");
    // const[isAvailable, setIsAvailable]= useState("");
    const[newProduct, setNewProduct]= useState("");
    const[formData, handleInputChange, handleSubmit] = useCustomForm (
        newProduct,
        setNewProduct
    );
    
    return ( 
        <div className='product_container'>
            <h1>Products Form</h1>

            <form className='products_form' onSubmit={handleSubmit}>
                <div>
                    <h2>Add New Product:</h2>
                </div>
                <div>
                    <label>Name:</label>
                    <input type="text"
                    name='name'
                    value={formData.itemName}
                    onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Cost:</label>
                    <input type='number'
                    value={formData.itemCost}
                    onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Category:</label>
                    <input type="text"
                    value={formData.itemCategory}
                    onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Inventory:</label>
                    <input type="number"
                    value={formData.itemInventory}
                    onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Availability:</label>
                    <input type={Boolean}
                    value={formData.isAvailable}
                    onChange={handleInputChange}
                    />
                </div>
                <div>
                    <button onClick={addProducts(setNewProduct).then(getAllProducts())} >
                        Add Product</button>
                </div>
                
            </form>
        </div>
     );
    }
    
    export default ProductsForm;
    // const availableToggle = () => {setIsAvailable(!isAvailable);};

    // function handleSubmit(event) {
    //     event.prevenrDefault();
    //     const formValues = {
    //         name: {itemName},
    //         cost: {itemCost},
    //         category: {itemCategory},
    //         inventory: {itemInventory},
    //         isAvailable: {Boolean},
    //     };
    //     console.log(formValues);
    //     addProducts(formValues).then(response =>getAllProducts());
    // }