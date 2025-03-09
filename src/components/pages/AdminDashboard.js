import { CategoryProvider } from "../contexts/CategoryContext";
import CategoryManager from "../CategoryManager";
import { ProductProvider } from "../contexts/ProductContext";
import ProductManager from "../ProductManager";

function AdminDashboard(){
    return (
        <>
        <h1>Admin Dashboard</h1>

        <CategoryProvider>
            <CategoryManager/>
            <ProductProvider>
                <ProductManager />
            </ProductProvider>
        </CategoryProvider>

        
        </>
        
    )
}

export default AdminDashboard;