// src/PickupPage.jsx
import { useState } from 'react';
import './PickupPage.css';

function PickupPage() {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [confirmedSlot, setConfirmedSlot] = useState(null);

  const timeSlots = [
    '9:00 AM - 9:30 AM',
    '9:30 AM - 10:00 AM',
    '10:00 AM - 10:30 AM',
    '11:00 AM - 11:30 AM',
    '1:00 PM - 1:30 PM',
    '2:00 PM - 2:30 PM',
  ];

  const handleConfirm = () => {
    if (selectedSlot) {
      setConfirmedSlot(selectedSlot);
    }
  };

  return (
    <div className="pickup-container">
      <h1>Student Card Pickup Scheduling</h1>

      <div className="slot-list">
        {timeSlots.map((slot, index) => (
          <button
            key={index}
            className={`slot-button ${selectedSlot === slot ? 'selected' : ''}`}
            onClick={() => setSelectedSlot(slot)}
          >
            {slot}
          </button>
        ))}
      </div>

      <button className="confirm-button" onClick={handleConfirm}>
        Confirm Slot
      </button>

      {confirmedSlot && (
        <div className="confirmation">
          <h3>You have scheduled:</h3>
          <p>{confirmedSlot}</p>
        </div>
      )}
    </div>
  );
}

export default PickupPage;
