// CheckStatusPage.jsx
import { useState } from 'react';
import './CheckStatusPage.css';
import { BadgeCheck, Loader2, XCircle } from 'lucide-react';

export default function CheckStatusPage() {
  const [studentId, setStudentId] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleCheckStatus = async () => {
    setLoading(true);
    setStatus(null);

    setTimeout(() => {
      setLoading(false);
      if (!studentId) {
        setStatus('error');
      } else if (parseInt(studentId.slice(-1)) % 2 === 0) {
        setStatus('ready');
      } else {
        setStatus('not_ready');
      }
    }, 1000);
  };

  return (
    <div className="check-status-container">
      <div className="card">
        <h2>Check SmartID Status</h2>
        <input
          type="text"
          placeholder="Enter Student ID"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          className="input"
        />
        <button onClick={handleCheckStatus} disabled={loading} className="button">
          {loading ? <Loader2 className="spin" /> : 'Check Status'}
        </button>

        {status === 'ready' && (
          <div className="status ready">
            <BadgeCheck className="icon" /> Your SmartID card is ready!
          </div>
        )}

        {status === 'not_ready' && (
          <div className="status not-ready">
            <XCircle className="icon" /> SmartID card is not ready yet.
          </div>
        )}

        {status === 'error' && (
          <div className="status error">Please enter a valid Student ID.</div>
        )}
      </div>
    </div>
  );
}
