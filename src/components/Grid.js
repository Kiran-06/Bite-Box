import { useEffect, useState } from "react";
import pack2 from '../images/pack2.jpg';
import atta from '../images/atta.jpg';
import Milk from '../images/Milk.jpg';
import snacks from '../images/snacks.jpg';
import freedel from '../images/freedel.jpg';
import Diapers from '../images/Diapers.jpg';

function Grid() {
  const [offers, setOffers] = useState([]);
  const [newOffer, setNewOffer] = useState({ id: null, title: "", code: "", image: "" });
  const [editingId, setEditingId] = useState(null);  // Store ID of the offer being edited

  // ✅ Load offers only if localStorage is empty
  useEffect(() => {
    const storedOffers = JSON.parse(localStorage.getItem("offers"));

    if (storedOffers && storedOffers.length > 0) {
      setOffers(storedOffers);  // Load existing offers
    } else {
      const defaultOffers = [
        { id: 1, title: "20% off on Vegetables", code: "VEG50", image: pack2 },
        { id: 2, title: "Buy 1 Get 1 Free", code: "FASHB1G1", image: atta },
        { id: 3, title: "Flat 30% Off on Dairy", code: "DAIRY30", image: Milk },
        { id: 4, title: "50% Off on Snacks", code: "SNACK50", image: snacks },
        { id: 5, title: "Free Delivery Over $50", code: "FREEDEL", image: freedel },
        { id: 6, title: "Up to 40% Off on Diapers", code: "BEV40", image: Diapers }
      ];

      setOffers(defaultOffers);
      localStorage.setItem("offers", JSON.stringify(defaultOffers));
    }
  }, []);

  // ✅ Sync offers with localStorage on updates
  useEffect(() => {
    localStorage.setItem("offers", JSON.stringify(offers));
  }, [offers]);

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewOffer((prev) => ({ ...prev, [name]: value }));
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewOffer((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  // ✅ Add or update offer
  const handleAddOrUpdateOffer = () => {
    if (!newOffer.title || !newOffer.code || !newOffer.image) {
      alert("Please fill all fields.");
      return;
    }

    if (editingId) {
      // ✅ Update existing offer
      const updatedOffers = offers.map((offer) =>
        offer.id === editingId ? { ...newOffer, id: editingId } : offer
      );
      setOffers(updatedOffers);
      setEditingId(null);
    } else {
      // ✅ Add new offer
      const newId = offers.length > 0 ? offers[offers.length - 1].id + 1 : 1;
      setOffers([...offers, { ...newOffer, id: newId }]);
    }

    // Reset form
    setNewOffer({ id: null, title: "", code: "", image: "" });
  };

  // ✅ Edit offer: Populate the form with existing offer data
  const handleEditOffer = (offer) => {
    setEditingId(offer.id);
    setNewOffer({ ...offer });   // Load the existing offer into the form
  };

  // ✅ Delete offer
  const handleDeleteOffer = (id) => {
    const updatedOffers = offers.filter((offer) => offer.id !== id);
    setOffers(updatedOffers);
  };

  return (
    <div className="grid-wrapper">
      <h2>Admin: Manage Offers</h2>

      {/* Form for adding/editing offers */}
      <div style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
        <input
          type="text"
          name="title"
          value={newOffer.title}
          onChange={handleChange}
          placeholder="Offer Title"
          style={{ padding: "8px", width: "100%" }}
        />
        <input
          type="text"
          name="code"
          value={newOffer.code}
          onChange={handleChange}
          placeholder="Offer Code"
          style={{ padding: "8px", width: "100%" }}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ padding: "8px" }}
        />
        <button onClick={handleAddOrUpdateOffer} style={{ padding: "8px 16px", background: "green", color: "white" }}>
          {editingId ? "Update" : "Add"}
        </button>
      </div>

      {/* Display offers */}
      <div className="grid-container">
        {offers.map((offer) => (
          <div key={offer.id} className="card">
            <div className="card-image" style={{ backgroundImage: `url(${offer.image})` }} />
            <div className="card-content">
              <h3>{offer.title}</h3>
              <p>Code: <strong>{offer.code}</strong></p>

              {/* Admin actions */}
              <button onClick={() => handleEditOffer(offer)}>Edit</button>
              <button onClick={() => handleDeleteOffer(offer.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grid;
