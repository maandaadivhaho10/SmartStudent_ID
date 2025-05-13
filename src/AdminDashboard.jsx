// src/AdminDashboard.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import './AdminDashboard.css';
import PickupSlotModal from './PickupSlotModal'; // Import the PickupSlotModal

function AdminDashboard() {
  const [selectedApp, setSelectedApp] = useState(null);
  const [pickupSlot, setPickupSlot] = useState({}); // To store pickup slot for each applicant
  const [isModalOpen, setIsModalOpen] = useState(false); // To control the Pickup Slot Modal
  const [appIdForSlot, setAppIdForSlot] = useState(null); // Track which application the slot is for

  const [applications, setApplications] = useState([
    {
      id: 1,
      name: 'Alice Mokoena',
      studentNumber: '20210123',
      email: 'alice@student.com',
      idPhoto: 'https://i.pravatar.cc/150?img=3',
      proofOfRegistration: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      oldStudentCard: 'https://i.pravatar.cc/150?img=7',
      status: 'pending'
    },
    {
      id: 2,
      name: 'Brian Nkuna',
      studentNumber: '20210245',
      email: 'brian@student.com',
      idPhoto: 'https://randomuser.me/api/portraits/men/11.jpg',
      proofOfRegistration: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      oldStudentCard: 'https://randomuser.me/api/portraits/men/12.jpg',
      status: 'pending'
    }
  ]);

  const updateStatus = (id, newStatus) => {
    setApplications(prev =>
      prev.map(app => (app.id === id ? { ...app, status: newStatus } : app))
    );
    setSelectedApp(null); // close modal if open
  };

  const assignPickupSlot = (appId) => {
    setAppIdForSlot(appId); // Set the application ID for which the slot is being assigned
    setIsModalOpen(true); // Open the modal to assign pickup slot
  };

  const savePickupSlot = (appId, slot) => {
    setPickupSlot((prev) => ({
      ...prev,
      [appId]: slot
    }));
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };
  const navigate = useNavigate();

const handleLogout = () => {
  // Clear auth data
 
  // Redirect to login page
  navigate('/'); // adjust path if different
};

  return (
    <div className='outerbox'>

    <div className="admin-dashboard">
      <div className="dashboard-header">
      <button className="logout-btn"  onClick={handleLogout}>
        <FiLogOut className="logout-icon" />
        Logout
      </button>
    </div>
      <h1>Admin Dashboard</h1>
      <h3>Pending Student Card Applications</h3>

      {applications.filter(app => app.status === 'pending').length === 0 ? (
        <p>No pending applications.</p>
      ) : (
        <table className="app-table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Student Number</th>
      <th>Status</th>
      <th>Actions</th>
      <th>PickUp Slot</th>
    </tr>
  </thead>
  <tbody>
    {applications.map(app => (
      <tr key={app.id}>
        <td>{app.name}</td>
        <td>{app.studentNumber}</td>
        <td>{app.status}</td>
        <td>
          {app.status === 'pending' && (
            <>
              <button onClick={() => updateStatus(app.id, 'approved')} className="approve-btn">
                Approve
              </button>
              <button onClick={() => updateStatus(app.id, 'rejected')} className="reject-btn">
                Reject
              </button>
              <button onClick={() => setSelectedApp(app)} className="view-btn">
                View
              </button>
              <button onClick={() => assignPickupSlot(app.id)} className="pickup-btn">
                Assign Pickup Slot
              </button>
            </>
          )}
        </td>
        <td>
           <button className="pickup-slot-btn">
  {pickupSlot[app.id] ? `${pickupSlot[app.id]}` : 'Assign Pickup Slot'}
</button>
    
        </td>
      </tr>
    ))}
  </tbody>
</table>
      )}

      {/* View Modal */}
      {selectedApp && (
        <div className="modal">
          <div className="modal-content">
            <h2>Application Details</h2>
            <p><strong>Name:</strong> {selectedApp.name}</p>
            <p><strong>Student Number:</strong> {selectedApp.studentNumber}</p>
            <p><strong>Email:</strong> {selectedApp.email}</p>
            <p><strong>ID Photo:</strong><br />
              <img src={selectedApp.idPhoto} alt="ID" width="100" />
            </p>
            <p><strong>Old Student Card:</strong><br />
              <img src={selectedApp.oldStudentCard} alt="Old Card" width="100" />
            </p>
            <p>
              <strong>Proof of Registration:</strong><br />
              <a href={selectedApp.proofOfRegistration} target="_blank" rel="noreferrer">
                View PDF
              </a>
            </p>
            <button onClick={() => setSelectedApp(null)} className="close-btn">Close</button>
          </div>
        </div>
      )}

      {/* Pickup Slot Modal */}
      {isModalOpen && (
        <PickupSlotModal
          onClose={closeModal}
          onSave={savePickupSlot}
          appId={appIdForSlot}
        />
      )}
    </div>
    </div>
  );
}

export default AdminDashboard;
