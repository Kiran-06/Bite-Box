import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function GridView() {
    const [offers, setOffers] = useState([]);

    // Load offers from localStorage on mount
    useEffect(() => {
        const storedOffers = JSON.parse(localStorage.getItem("offers")) || [];
        setOffers(storedOffers);
    }, []);

    return (
        <div className="grid-wrapper">
            <div className="grid-container">
                {offers.length === 0 ? (
                    <p>No offers available</p>
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

export default GridView;
