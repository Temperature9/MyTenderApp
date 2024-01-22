// src/pages/ContractorDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ContractorDashboard.css'; // Create a corresponding CSS file

const ContractorDashboard = () => {
  // Sample data for contractor dashboard
  const contractorBids = [
    { id: 101, tenderId: 1, title: 'Construction Project', bidAmount: 50000, status: 'pending' },
    { id: 102, tenderId: 2, title: 'Renovation Project', bidAmount: 60000, status: 'accepted' },
    // Add more bids as needed
  ];

  return (
    <div className="contractor-dashboard">
      <h2>Contractor Dashboard</h2>

      <section className="bid-section">
        <h3>Your Bids</h3>
        <ul className="bid-list">
          {contractorBids.map((bid) => (
            <li key={bid.id} className="bid-item">
              <Link to={`/contractor/bids/${bid.id}`}>
                <h4>{bid.title}</h4>
                <p>Bid Amount: ${bid.bidAmount}</p>
                <p>Status: {bid.status}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="worker-section">
        <h3>Assigned Workers</h3>
        {/* Display a list of assigned workers */}
        {/* Include functionality to add or remove workers */}
      </section>

      <section className="transportation-section">
        <h3>Transportation Details</h3>
        {/* Display transportation details */}
        {/* Include functionality to update transportation details */}
      </section>

      <section className="notification-section">
        <h3>Notifications</h3>
        {/* Display notifications relevant to the contractor */}
      </section>
    </div>
  );
};

export default ContractorDashboard;
