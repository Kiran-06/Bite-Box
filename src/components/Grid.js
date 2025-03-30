import { useEffect, useState } from "react";
//import "./Grid.css";
import pack2 from '../images/pack2.jpg';
import atta from '../images/atta.jpg';
import milk from '../images/Milk.jpg';
import snacks from '../images/snacks.jpg';
import freedel from '../images/freedel.jpg';
import diapers from '../images/Diapers.jpg';

function Grid() {
  const [offers, setOffers] = useState([]);
  const [newOffer, setNewOffer] = useState({ id: null, title: "", code: "", image: "" });
  const [editingId, setEditingId] = useState(null);

  // Load offers from localStorage or set default values
  useEffect(() => {
    const storedOffers = JSON.parse(localStorage.getItem("offers"));
    if (storedOffers) {
      setOffers(storedOffers);
    } else {
      const defaultOffers = [
        { id: 1, title: "20% off on Vegetables", code: "VEG50", image: pack2 },
        { id: 2, title: "Buy 1 Get 1 Free", code: "FASHB1G1", image: atta },
        { id: 3, title: "Flat 30% Off on Dairy", code: "DAIRY30", image: milk },
        { id: 4, title: "50% Off on Snacks", code: "SNACK50", image: snacks },
        { id: 5, title: "Free Delivery Over $50", code: "FREEDEL", image: freedel },
        { id: 6, title: "Up to 40% Off on Diapers", code: "BEV40", image: diapers }
      ];
      setOffers(defaultOffers);
      localStorage.setItem("offers", JSON.stringify(defaultOffers));
    }
  }, []);

  // Handle form changes
  const handleChange = (e) => {
    setNewOffer({ ...newOffer, [e.target.name]: e.target.value });
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setNewOffer({ ...newOffer, image: reader.result });
      reader.readAsDataURL(file);
    }
  };

  // Add or update offer
  const handleAddOrUpdateOffer = () => {
    if (!newOffer.title || !newOffer.code || !newOffer.image) {
      alert("Please fill all fields.");
      return;
    }

    let updatedOffers;
    if (editingId) {
      updatedOffers = offers.map((offer) =>
        offer.id === editingId ? { ...newOffer, id: editingId } : offer
      );
      setEditingId(null);
    } else {
      const newId = offers.length > 0 ? offers[offers.length - 1].id + 1 : 1;
      updatedOffers = [...offers, { ...newOffer, id: newId }];
    }

    setOffers(updatedOffers);
    localStorage.setItem("offers", JSON.stringify(updatedOffers));
    setNewOffer({ id: null, title: "", code: "", image: "" });
  };

  // Edit offer
  const handleEditOffer = (offer) => {
    setEditingId(offer.id);
    setNewOffer({ ...offer });
  };

  // Cancel edit
  const handleCancelEdit = () => {
    setEditingId(null);
    setNewOffer({ id: null, title: "", code: "", image: "" });
  };

  // Delete offer
  const handleDeleteOffer = (id) => {
    const updatedOffers = offers.filter((offer) => offer.id !== id);
    setOffers(updatedOffers);
    localStorage.setItem("offers", JSON.stringify(updatedOffers));
  };

  return (
    <div className="grid-wrapper">
      <h2>Admin: Manage Offers</h2>

      {/* Form for adding/editing offers */}
      <div className="offer-form">
        <input
          type="text"
          name="title"
          value={newOffer.title}
          onChange={handleChange}
          placeholder="Offer Title"
        />
        <input
          type="text"
          name="code"
          value={newOffer.code}
          onChange={handleChange}
          placeholder="Offer Code"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
        <button onClick={handleAddOrUpdateOffer} className="add-btn">
          {editingId ? "Update" : "Add"}
        </button>
        {editingId && (
          <button onClick={handleCancelEdit} className="cancel-btn">
            Cancel
          </button>
        )}
      </div>

      {/* Display offers */}
      <div className="grid-container">
        {offers.map((offer) => (
          <div key={offer.id} className="card">
            <div className="card-image" style={{ backgroundImage: `url(${offer.image})` }} />
            <div className="card-content">
              <h3>{offer.title}</h3>
              <p>Code: <strong>{offer.code}</strong></p>
              <button onClick={() => handleEditOffer(offer)} className="edit-btn">Edit</button>
              <button onClick={() => handleDeleteOffer(offer.id)} className="delete-btn">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grid;
