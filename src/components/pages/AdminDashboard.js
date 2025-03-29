// import { CategoryProvider } from "../contexts/CategoryContext";
// import CategoryManager from "../CategoryManager";
// import { ProductProvider } from "../contexts/ProductContext";
// import ProductManager from "../ProductManager";
// import Grid from "../Grid";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { usePayment } from "../contexts/PaymentContext";

// function AdminDashboard() {

//     const navigate = useNavigate();

//     const isAdmin = true;  // Replace with your actual admin check logic

//     useEffect(() => {
//         if (!isAdmin) {
//             navigate("/");  // Redirect non-admin users to home page
//         }
//     }, [isAdmin, navigate]);

//     //Payment Page Setup
//     const { payments } = usePayment();




//     return (
//         <>
//             <h1>Admin Dashboard</h1>

//             <CategoryProvider>
//                 <CategoryManager />
//                 <ProductProvider>
//                     <ProductManager />
//                 </ProductProvider>
//             </CategoryProvider>


//             <div style={{ marginTop: "40px" }}>
//                 <h2>Manage Offers</h2>
//                 <Grid />
//             </div>

//             <div className="admin-dashboard">
//                 <h2>Payment Details</h2>

//                 {payments.length === 0 ? (
//                     <p>No payment records found.</p>
//                 ) : (
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>Name</th>
//                                 <th>Email</th>
//                                 <th>Address</th>
//                                 <th>Date</th>
//                                 <th>Items</th>
//                                 <th>Total Price</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {payments.map((payment, index) => (
//                                 <tr key={index}>
//                                     <td>{payment.name}</td>
//                                     <td>{payment.email}</td>
//                                     <td>{payment.address}</td>
//                                     <td>{payment.date}</td>
//                                     <td>
//                                         {payment.items.map((item, i) => (
//                                             <div key={i}>
//                                                 {item.product_name} x {item.quantity} - ₹{item.total}
//                                             </div>
//                                         ))}
//                                     </td>
//                                     <td>₹{payment.totalPrice}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 )}
//             </div>
//         </>
//     );
// }

// export default AdminDashboard;
import { CategoryProvider } from "../contexts/CategoryContext";
import CategoryManager from "../CategoryManager";
import { ProductProvider } from "../contexts/ProductContext";
import ProductManager from "../ProductManager";
import Grid from "../Grid";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usePayment } from "../contexts/PaymentContext";

function AdminDashboard() {
    const navigate = useNavigate();
    const isAdmin = true;  // Replace with your actual admin check logic

    useEffect(() => {
        if (!isAdmin) {
            navigate("/");
        }
    }, [isAdmin, navigate]);

    const { payments } = usePayment();

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

            <div className="admin-dashboard">
                <h2>Payment Details</h2>

                {payments.length === 0 ? (
                    <p>No payment records found.</p>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Date</th>
                                <th>Items</th>
                                <th>Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {payments.map((payment, index) => (
                                <tr key={index}>
                                    <td>{payment.name}</td>
                                    <td>{payment.email}</td>
                                    <td>{payment.address}</td>
                                    <td>{payment.date}</td>
                                    <td>
                                        {payment.items.map((item, i) => (
                                            <div key={i}>
                                                {item.product_name} x {item.quantity} - ${item.total}
                                            </div>
                                        ))}
                                    </td>
                                    <td>${payment.totalPrice}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
}

export default AdminDashboard;
