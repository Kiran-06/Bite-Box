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

    // Function to handle adding product with quantity
    const handleAddToCart = (product) => {
        const quantity = parseInt(prompt(`Enter quantity for ${product.product_name}:`, "1"));

        if (!quantity || quantity <= 0) {
            alert("Please enter a valid quantity!");
            return;
        }

        const productWithQuantity = { ...product, quantity };
        addToCart(productWithQuantity);
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
                        <div className="product-box" key={product.id}>  {/* ✅ Add unique key */}

                            <Link to={`/productdesc/${product.id}`}>
                                <img alt={product.product_name} src={product.image} />
                                <strong>{product.product_name}</strong>
                                <span className="quantity">1 LB</span>
                                <span className="price">$ {product.product_price}</span>
                            </Link>

                            {/* ✅ Prompt for quantity before adding to cart */}
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
