// src/components/PickupSlotModal.jsx
import  { useState } from 'react';
import './PickupSlotModal.css';

function PickupSlotModal({ onClose, onSave, appId }) {
  const [pickupTime, setPickupTime] = useState('');

  const handleSave = () => {
    if (pickupTime) {
      onSave(appId, pickupTime); // Save the pickup time
      onClose(); // Close the modal
    } else {
      alert('Please select a pickup time'); // You can replace this with a nice modal alert later
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className='pickslot'>Assign Pickup Slot</h2>
        <label htmlFor="pickup-time">Pick a time:</label>
        <input
          type="time"
          id="pickup-time"
          value={pickupTime}
          onChange={(e) => setPickupTime(e.target.value)}
          required
        />
        <div className="modal-actions">
          <button onClick={handleSave} className="save-btn">Save</button>
          <button onClick={onClose} className="cancel-btn">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default PickupSlotModal;
