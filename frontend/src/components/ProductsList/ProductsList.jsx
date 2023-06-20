import ProductsForm from "../ProductsForm/ProductsForm";

//pull 

const ProductsList = ({items}) => {
    return ( 
        <li className="items_list">
            <p> Name: {items.name} </p>
            <p> Cost: {items.cost} </p>
            <p> Categorsy: {items.category} </p>
            <p> Inventory: {items.inventory} </p>
            <p> Is Available: {items.is_available} </p>
        </li>
     );
}
 
export default ProductsList;