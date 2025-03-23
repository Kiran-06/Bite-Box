import { Link, useSearchParams } from "react-router-dom";
import { useProductContext } from "../contexts/ProductContext";
import { useEffect, useState } from "react";
import { useCart } from "../contexts/CartContext";

function Products() {

    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
    const { products } = useProductContext();
    const [filteredProducts, setFilteredProducts] = useState([]);
    const { addToCart } = useCart();

    // Store selected quantities
    const [quantities, setQuantities] = useState({});

    // Filter products based on category
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

    // Handle quantity change
    const handleQuantityChange = (productId, quantity) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [productId]: quantity,
        }));
    };

    // Handle adding product to cart with selected quantity
    const handleAddToCart = (product) => {
        const quantity = quantities[product.id] || 1;  // Default to 1 if not selected
        addToCart({ ...product, quantity });
        alert(`${product.product_name} added to cart with quantity: ${quantity}`);
    };

    return (
        <>
            <section id="popular-product">

                <div className="product-heading">  {/* ✅ Use className */}
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

                            {/* ✅ Quantity Selector */}
                            <div className="quantity-selector">
                                <label>Quantity:</label>
                                <input
                                    type="number"
                                    min="1"
                                    value={quantities[product.id] || 1}
                                    onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                                    className="quantity-input"
                                />
                            </div>

                            {/* ✅ Add to Cart with quantity */}
                            <button
                                className="cart-btn"
                                onClick={() => handleAddToCart(product)}
                            >
                                ➕ Add to Cart
                            </button>

                            <Link to="/cart" className="cart-btn">🛒 Go to Cart</Link>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Products;
