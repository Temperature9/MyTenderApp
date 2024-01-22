// src/pages/ContractorBidDetailsPage.js
import React, { useState } from 'react';
import './ContractorBidDetailsPage.css'; // Create a corresponding CSS file

const ContractorBidDetailsPage = ({ match }) => {
  const bidId = parseInt(match.params.id, 10); // Assuming the bid ID is passed as a parameter

  // Sample data for bid details, assigned workers, and transportation details
  const bidDetails = {
    id: bidId,
    title: 'Construction Project',
    bidAmount: 50000,
    status: 'pending',
  };

  const [assignedWorkers, setAssignedWorkers] = useState([]);
  const [transportationDetails, setTransportationDetails] = useState('');

  const handleAddWorker = (workerName) => {
    setAssignedWorkers((prevWorkers) => [...prevWorkers, workerName]);
  };

  const handleSaveTransportationDetails = (details) => {
    setTransportationDetails(details);
  };

  return (
    <div className="contractor-bid-details-page">
      <h2>Bid Details and Management</h2>
      <div className="bid-details">
        <h3>{bidDetails.title}</h3>
        <p>Bid Amount: ${bidDetails.bidAmount}</p>
        <p>Status: {bidDetails.status}</p>
      </div>

      <div className="worker-management">
        <h3>Assigned Workers</h3>
        <ul>
          {assignedWorkers.map((worker, index) => (
            <li key={index}>{worker}</li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Worker Name"
          onChange={(e) => setWorkerName(e.target.value)}
        />
        <button onClick={() => handleAddWorker(workerName)}>Add Worker</button>
      </div>

      <div className="transportation-management">
        <h3>Transportation Details</h3>
        <textarea
          value={transportationDetails}
          onChange={(e) => setTransportationDetails(e.target.value)}
        />
        <button onClick={() => handleSaveTransportationDetails(transportationDetails)}>
          Save Transportation Details
        </button>
      </div>
    </div>
  );
};

export default ContractorBidDetailsPage;
