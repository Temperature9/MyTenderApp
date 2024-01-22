// src/pages/ContractorProfilePage.js
import React, { useState } from 'react';
import './ContractorProfilePage.css'; // Create a corresponding CSS file

const ContractorProfilePage = () => {
  // Sample data for contractor profile
  const [contractorProfile, setContractorProfile] = useState({
    id: 1,
    name: 'Contractor A',
    email: 'contractorA@example.com',
    contactNumber: '123-456-7890',
    address: '123 Main St, Cityville',
    // Add more profile details as needed
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveChanges = () => {
    // Implement logic to save changes to the backend
    // For now, let's update the state with the edited data
    setIsEditing(false);
    // You can send the updated data to the backend here
    console.log('Saving Changes:', contractorProfile);
  };

  const handleInputChange = (field, value) => {
    setContractorProfile({
      ...contractorProfile,
      [field]: value,
    });
  };

  return (
    <div className="contractor-profile-page">
      <h2>Contractor Profile</h2>

      <div className="profile-details">
        <div className="field">
          <label>Name:</label>
          {isEditing ? (
            <input
              type="text"
              value={contractorProfile.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
            />
          ) : (
            <p>{contractorProfile.name}</p>
          )}
        </div>

        <div className="field">
          <label>Email:</label>
          <p>{contractorProfile.email}</p>
        </div>

        <div className="field">
          <label>Contact Number:</label>
          {isEditing ? (
            <input
              type="text"
              value={contractorProfile.contactNumber}
              onChange={(e) => handleInputChange('contactNumber', e.target.value)}
            />
          ) : (
            <p>{contractorProfile.contactNumber}</p>
          )}
        </div>

        <div className="field">
          <label>Address:</label>
          {isEditing ? (
            <input
              type="text"
              value={contractorProfile.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
            />
          ) : (
            <p>{contractorProfile.address}</p>
          )}
        </div>
      </div>

      <div className="profile-actions">
        {isEditing ? (
          <button onClick={handleSaveChanges}>Save Changes</button>
        ) : (
          <button onClick={handleEditToggle}>Edit Profile</button>
        )}
      </div>
    </div>
  );
};

export default ContractorProfilePage;
