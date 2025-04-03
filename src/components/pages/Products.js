import { Link, useSearchParams } from "react-router-dom";
import { useProductContext } from "../contexts/ProductContext";
import { useEffect, useState } from "react";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";
import Modal from "react-modal";  // ✅ Install react-modal (npm install react-modal)

Modal.setAppElement("#root");  // Ensure accessibility

function Products() {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
    const { products } = useProductContext();
    const [filteredProducts, setFilteredProducts] = useState([]);
    const { addToCart } = useCart();
    const { user } = useAuth();

    // ✅ State for modals
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isQuantityModalOpen, setIsQuantityModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (category) {
            const filtered = products.filter(product =>
                product.category_name.toLowerCase().includes(category.toLowerCase())
            );
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts(products);
        }
    }, [category, products]);

    const handleAddToCart = (product) => {
        const currentUser = user || JSON.parse(localStorage.getItem('user'));

        if (!currentUser) {
            setIsLoginModalOpen(true);  // ✅ Show login modal
            return;
        }

        setSelectedProduct(product);
        setIsQuantityModalOpen(true);  // ✅ Show quantity modal
    };

    const [cartMessage, setCartMessage] = useState("");  // ✅ State for success message

    const confirmAddToCart = () => {
        if (!quantity || quantity <= 0) {
            setCartMessage("⚠️ Please enter a valid quantity!");
            return;
        }

        const currentUser = user || JSON.parse(localStorage.getItem('user'));
        if (!currentUser) {
            setCartMessage("⚠️ Please log in to add items to your cart.");
            return;
        }

        if (!selectedProduct) {
            setCartMessage("❌ Error: No product selected.");
            return;
        }

        // ✅ Ensure the product is properly added to the cart
        const productWithQuantity = {
            ...selectedProduct,
            quantity,
            userId: currentUser.id
        };

        addToCart(productWithQuantity);  // ✅ Add to cart immediately

        // ✅ Show success message
        setCartMessage(`✅ ${selectedProduct.product_name} added!`);

        // ✅ Close modal after 1.5 seconds
        setTimeout(() => {
            setIsQuantityModalOpen(false);
            setCartMessage(""); // Reset message
            setSelectedProduct(null); // Clear selected product
        }, 1500);
    };




    return (
        <>
            <section id="popular-product">
                <div className="product-heading">
                    <h3>{category ? category : 'Products'}</h3>
                </div>

                <div className="product-container">
                    {filteredProducts.map((product) => (
                        <div className="product-box" key={product.id}>
                            <Link to={`/productdesc/${product.id}`}>
                                <img alt={product.product_name} src={product.image} />
                                <strong>{product.product_name}</strong>
                                <span className="quantity">1 LB</span>
                                <span className="price">$ {product.product_price}</span>
                            </Link>

                            <button className="cart-btn" onClick={() => handleAddToCart(product)}>
                                ➕ Add to Cart
                            </button>

                            <Link to="/cart" className="cart-btn">🛒 Go to Cart</Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* ✅ Login Modal */}
            <Modal isOpen={isLoginModalOpen} onRequestClose={() => setIsLoginModalOpen(false)} className="modal">
                <h2>Please Log In</h2>
                <p>You need to log in to add items to your cart.</p>
                <button onClick={() => window.location.href = "/auth"}>Log In</button>
                <button onClick={() => setIsLoginModalOpen(false)}>Close</button>
            </Modal>

            {/* ✅ Quantity Modal */}
            <Modal isOpen={isQuantityModalOpen} onRequestClose={() => setIsQuantityModalOpen(false)} className="modal">
                <h2>Enter Quantity</h2>
                <input type="number" min="1" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} />
                <button onClick={confirmAddToCart}>Confirm</button>
                <button onClick={() => setIsQuantityModalOpen(false)}>Cancel</button>
            </Modal>
        </>
    );
}

export default Products;
