// src/pages/BidSubmissionPage.js
import React, { useState } from 'react';
import './BidSubmissionPage.css'; // Create a corresponding CSS file

const BidSubmissionPage = ({ match }) => {
  const tenderId = parseInt(match.params.id, 10); // Assuming the tender ID is passed as a parameter

  // Sample data for bid submission
  const [bidDetails, setBidDetails] = useState({
    tenderId: tenderId,
    bidAmount: 0,
    additionalInformation: '',
  });

  const handleBidSubmission = () => {
    // Implement bid submission logic, e.g., send bidDetails to the backend
    // You may use fetch or any other method to communicate with your server
    console.log('Submitting Bid:', bidDetails);
    // Add logic for updating the UI or displaying a success message
  };

  return (
    <div className="bid-submission-page">
      <h2>Bid Submission</h2>

      <div className="bid-form">
        <label>Bid Amount:</label>
        <input
          type="number"
          value={bidDetails.bidAmount}
          onChange={(e) => setBidDetails({ ...bidDetails, bidAmount: e.target.value })}
        />

        <label>Additional Information:</label>
        <textarea
          value={bidDetails.additionalInformation}
          onChange={(e) => setBidDetails({ ...bidDetails, additionalInformation: e.target.value })}
        />

        <button onClick={handleBidSubmission}>Submit Bid</button>
      </div>
    </div>
  );
};

export default BidSubmissionPage;
