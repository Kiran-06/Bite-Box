// function Grid() {
//   return (
//     <div className="content-grid">
//       {[...Array(12)].map((_, i) => (
//         <div key={i} className="card">
//           {"SOME TRENDING ADD"}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Grid;

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Deals } from "./pages/Deals";

function Grid() {
  const [offers, setOffers] = useState([]);

  // Simulating an API call to fetch latest offers
  useEffect(() => {
    setTimeout(() => {
      setOffers([
        { id: 1, title: "20% off on Vegetables", code: "Veg50" },
        { id: 2, title: "Buy 1 Get 1 Free", code: "FASHB1G1" },
        { id: 3, title: "Flat 30% Off on Dairy", code: "Dairy30" },
        { id: 4, title: "", code: "" },
        { id: 5, title: "", code: "" },
        { id: 6, title: "", code: "" },
      ]);
    }, 1000); // Simulating a delay
  }, []);

  return (
    <>
      <div className="grid-container">
        {offers.length > 0 ? (
          offers.map((offer) => (
            <div key={offer.id} className="card">
              <h3>{offer.title}</h3>
              <p>Use Code: <strong>{offer.code}</strong></p>
              <Link to="/Deals">
                <button className="claim-btn">Claim Now</button>
              </Link>
            </div>
          ))
        ) : (
          <p>Loading latest offers...</p>
        )}
      </div >
    </>
  );
}

export default Grid;
