
import { useParams } from 'react-router-dom';
import { useProductContext } from '../contexts/ProductContext';
import { useEffect, useState } from 'react';

function ProductDescription() {
    const { productId } = useParams();
    const [product, setProduct] = useState();
    const { products } = useProductContext();

    useEffect(() => {
        if (products.length > 0 && productId) {
            const foundProduct = products.find(
                prd => prd.id === Number(productId)
            );

            if (foundProduct) {
                setProduct(foundProduct);
            } else {
                setProduct(null);
            }
        }
    }, [productId, products]);



    return (
        <>

            <div class="product-container">
                <div class="product-image">
                    <span class="badge">Organic Certified</span>
                    <img src={product?.image} alt={product?.product_name} class="main-image" />
                    <div class="thumbnail-container">
                        <img src={product?.image} alt={product?.product_name} class="thumbnail" />

                    </div>
                </div>

                <div class="product-details">
                    <h1 class="product-title">{product?.product_name}</h1>
                    <p class="price">Rs: {product?.product_price}</p>
                    <p class="description">
                        Pure, raw, and unfiltered organic wildflower honey harvested from sustainable beekeeping practices.
                        This golden nectar contains natural antioxidants and enzymes, perfect for sweetening beverages,
                        baking, or direct consumption.
                    </p>

                    <div class="nutrition-facts">
                        <h3>Nutrition Facts (per 1 tbsp)</h3>
                        <ul class="features">
                            <li>Calories: 60</li>
                            <li>Total Carbohydrates: 17g</li>
                            <li>Sugars: 16g</li>
                            <li>Calcium: 1% DV</li>
                            <li>Iron: 1% DV</li>
                        </ul>
                    </div>

                    <ul class="features">
                        <li>100% Organic Certified (USDA)</li>
                        <li>Raw & Unfiltered</li>
                        <li>No Additives or Preservatives</li>
                        <li>Rich in Antioxidants</li>
                        <li>Perfect for Tea, Baking & Cooking</li>
                    </ul>

                    <div class="quantity-selector">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" min="1" max="20" value="1" />
                    </div>

                    <p class="packaging">Packaged in reusable glass jar (500g net weight)</p>

                    <div class="button-group">
                        <button class="btn btn-buy-now">🛒 Buy Now</button>
                        <button class="btn btn-add-to-cart">📦 Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDescription;