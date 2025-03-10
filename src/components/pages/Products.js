import { useSearchParams } from "react-router-dom";
import { useProductContext } from "../contexts/ProductContext";
import { useEffect, useState } from "react";


function Products(){
    
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
    const {products} = useProductContext();
    const [filteredProducts, setFilteredProducts] = useState([])

    // Filter products based on category
    useEffect(() => {
        if (category){
            const filtered = products.filter(product =>
                product.category_name.toLowerCase().includes(category.toLowerCase())
            );
            setFilteredProducts(filtered);
        }else{
            setFilteredProducts(products);
        }
        
    }, [category, products]);

    return (
        <>
            <section id="popular-product">
              
                <div class="product-heading">
                    <h3>{category ? category : 'products'}</h3>
                </div>
               
                <div class="product-container">
                  
                {
                    filteredProducts.map((product, index) => (
                        <div class="product-box">
                            <img alt={product.product_name}src={product.image} />
                            <strong>{product.product_name}</strong>
                            <span class="quantity">1 KG</span>
                            <span class="price">Rs. {product.product_price}</span>
                            <a  class="cart-btn">
                                Add to Cart
                            </a>
                        </div>
                        )
                    )
                }

                    
                   
                </div>
            </section>
        </>
    )
}

export default Products;
