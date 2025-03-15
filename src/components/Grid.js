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


import { useEffect, useState } from "react";

function Grid() {
  const [offers, setOffers] = useState([]);

  // Simulating an API call to fetch latest offers
  useEffect(() => {
    setTimeout(() => {
      setOffers([
        { id: 1, title: "50% Off on Electronics", code: "ELEC50" },
        { id: 2, title: "Buy 1 Get 1 Free - Fashion", code: "FASHB1G1" },
        { id: 3, title: "Flat 30% Off on Groceries", code: "GROC30" },
        { id: 4, title: "Travel Deals - 20% Off", code: "TRAVEL20" },
        { id: 5, title: "Exclusive Mobile Discounts", code: "MOBILE15" },
        { id: 6, title: "Weekend Special - 40% Off", code: "WEEKEND40" },
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
              <button className="claim-btn">Claim Now</button>
            </div>
          ))
        ) : (
          <p>Loading latest offers...</p>
        )}
      </div>
    </>
  );
}

export default Grid;
