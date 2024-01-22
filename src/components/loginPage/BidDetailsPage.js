// src/pages/BidDetailsPage.js
import React from 'react';
import './BidDetailsPage.css'; // Create a corresponding CSS file

const BidDetailsPage = ({ match }) => {
  const bidId = parseInt(match.params.id, 10); // Assuming the bid ID is passed as a parameter

  // Fetch or use sample data for the bid
  const bid = {
    id: bidId,
    bidAmount: 50000,
    projectPlan: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    // Add more bid details as needed
  };

  return (
    <div className="bid-details-page">
      <h2>Bid Details</h2>
      <div className="bid-details">
        <p>Bid Amount: ${bid.bidAmount}</p>
        <div className="project-plan">
          <h4>Project Plan:</h4>
          <p>{bid.projectPlan}</p>
        </div>
        {/* Add more bid details as needed */}
      </div>
    </div>
  );
};

export default BidDetailsPage;
