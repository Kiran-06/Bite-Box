import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import pack2 from '../images/pack2.jpg';
import atta from '../images/atta.jpg';
import Milk from '../images/Milk.jpg';
import snacks from '../images/snacks.jpg';
import freedel from '../images/freedel.jpg';
import Diapers from '../images/Diapers.jpg';

function Grid() {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulating an API call with async/await
  useEffect(() => {
    const fetchOffers = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated API delay
      setOffers([
        { id: 1, title: "20% off on Vegetables", code: "VEG50", image: pack2 },
        { id: 2, title: "Buy 1 Get 1 Free", code: "FASHB1G1", image: atta },
        { id: 3, title: "Flat 30% Off on Dairy", code: "DAIRY30", image: Milk },
        { id: 4, title: "50% Off on Snacks", code: "SNACK50", image: snacks },
        { id: 5, title: "Free Delivery Over $50", code: "FREEDEL", image: freedel },
        { id: 6, title: "Up to 40% Off on Diapers", code: "BEV40", image: Diapers },
      ]);
      setLoading(false);
    };

    fetchOffers();
  }, []);

  return (
    <div className="grid-wrapper">
      <div className="grid-container">
        {loading ? (
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading latest offers...</p>
          </div>
        ) : (
          offers.map((offer) => (
            <div key={offer.id} className="card">
              <div
                className="card-image"
                style={{ backgroundImage: `url(${offer.image})` }}
              />
              <div className="card-content">
                <h3>{offer.title}</h3>
                <p>Use Code: <strong>{offer.code}</strong></p>
                <Link to="/Deals">
                  <button className="claim-btn">Claim Now</button>
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Grid;
