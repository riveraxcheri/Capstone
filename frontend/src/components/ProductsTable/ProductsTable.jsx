import ProductsList from "../ProductsList/ProductsList";


const ProductsTable = ({items, userInput}) => {
    return ( 
        <ul>
            {items
            .filter(item => (
                item.name.includes(userInput) ||
                item.cost.includes(userInput) ||
                item.category.includes(userInput) ||
                item.inventory.includes(userInput) ||
                item.is_available.includes(userInput)

            ))
            .map((item) => (
                <ProductsList item={item} key={item.id} />
            ))}
        </ul>
     );
}
 
export default ProductsTable;