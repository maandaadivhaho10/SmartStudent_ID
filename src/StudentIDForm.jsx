// StudentIDForm.jsx
import React, { useState } from 'react';
import './StudentIDForm.css';

function StudentIDForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    studentNumber: '',
    email: '',
    idPhoto: null,
    proofOfRegistration: null,
    oldStudentCard: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Application submitted successfully!');
  };

  return (
    <div className="form-container">
      <h2>Student ID Application</h2>
      <form onSubmit={handleSubmit} className="student-form">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="studentNumber"
          placeholder="Student Number"
          value={formData.studentNumber}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label>
          Upload ID Photo:
          <input
            type="file"
            name="idPhoto"
            accept="image/*"
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Upload Proof of Registration:
          <input
            type="file"
            name="proofOfRegistration"
            accept=".pdf,image/*"
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Upload Last Year's Student Card:
          <input
            type="file"
            name="oldStudentCard"
            accept="image/*"
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}

export default StudentIDForm;  // Ensure this is at the bottom
