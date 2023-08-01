import Product from "../Product/Product";

const ProductList = ({items , userInput}) => {
    return ( 
        <ul>
            {items
            .filter(item => (
                item.name.includes(userInput) ||
                item.category.includes(userInput) ||
                item.cost.includes(userInput) ||
                item.inventory.includes(userInput)
            ))
            .map((item) => (
                <Product item= {item} key= {item.id}/>
            ))}
        </ul>
     );
}
 
export default ProductList;
