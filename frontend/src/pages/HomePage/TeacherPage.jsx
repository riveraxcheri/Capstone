import useAuth from "../../hooks/useAuth";
import ProductsForm from "../../components/ProductsForm/ProductsForm";

const TeacherPage = ({addItems}, {items}) => {
    const [user, token] = useAuth();
    return ( 
        <div>
            <h1>Teacher Home Page</h1>
            <h2>Welcome {user.username}!</h2>
            <p>Thank you for all you do!</p>
            <button>Get Student Cart</button>
            <button>Get Students Info</button>
            <button>Get Product Info</button>
            <button onClick=
            {<ProductsForm addItems={addItems} items={items}/>}>
                Add New Product
            </button>
            
        </div> );
}
 
export default TeacherPage;