import { CategoryProvider } from "../contexts/CategoryContext";
import CategoryManager from "../CategoryManager";
import { ProductProvider } from "../contexts/ProductContext";
import ProductManager from "../ProductManager";
import Grid from "../Grid";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {

    const navigate = useNavigate();

    const isAdmin = true;  // Replace with your actual admin check logic

    useEffect(() => {
        if (!isAdmin) {
            navigate("/");  // Redirect non-admin users to home page
        }
    }, [isAdmin, navigate]);




    return (
        <>
            <h1>Admin Dashboard</h1>

            <CategoryProvider>
                <CategoryManager />
                <ProductProvider>
                    <ProductManager />
                </ProductProvider>
            </CategoryProvider>


            <div style={{ marginTop: "40px" }}>
                <h2>Manage Offers</h2>
                <Grid />
            </div>
        </>
    );
}

export default AdminDashboard;
