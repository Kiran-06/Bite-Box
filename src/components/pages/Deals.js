import React, { useEffect, useState } from "react";
import { useCart } from "../contexts/CartContext";
import { FaShoppingCart } from "react-icons/fa";

// Correct the import paths to match the exact file names on disk
import pack2 from "../../images/pack2.jpg";
import atta from "../../images/atta.jpg";
import Milk from "../../images/Milk.jpg";  // Corrected the casing
import snacks from "../../images/snacks.jpg";
import freedel from "../../images/freedel.jpg";
import Diapers from "../../images/Diapers.jpg";  // Corrected the casing

const Deals = () => {
  const { addToCart } = useCart();
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    const mockDeals = [
      { id: 1, name: "Pack2", image: pack2, price: 100, discount: "10%" },
      { id: 2, name: "Atta", image: atta, price: 80, discount: "5%" },
      { id: 3, name: "Milk", image: Milk, price: 50, discount: "15%" },
      { id: 4, name: "Snacks", image: snacks, price: 120, discount: "8%" },
      { id: 5, name: "Free Delivery", image: freedel, price: 0, discount: "100%" },
      { id: 6, name: "Diapers", image: Diapers, price: 200, discount: "10%" }
    ];

    setDeals(mockDeals);
  }, []);

  const handleAddToCart = (deal) => {
    addToCart({ id: deal.id, product_name: deal.name, product_price: deal.price, quantity: 1 });
    alert(`${deal.name} added to cart!`);
  };

  return (
    <div className="deals-container">
      <h1>🔥 Today's Hot Deals 🔥</h1>
      <div className="deals-grid">
        {deals.map((deal) => (
          <div key={deal.id} className="deal-card">
            <img src={deal.image} alt={deal.name} className="deal-image" />
            <h3>{deal.name}</h3>
            <p>Price: ${deal.price}</p>
            <p className="discount">Discount: {deal.discount}</p>
            <button className="add-to-cart-btn" onClick={() => handleAddToCart(deal)}>
              <FaShoppingCart /> Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deals;
