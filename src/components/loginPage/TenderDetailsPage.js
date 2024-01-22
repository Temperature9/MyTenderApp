// src/pages/TenderDetailsPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './TenderDetailsPage.css'; // Create a corresponding CSS file

const TenderDetailsPage = ({ match }) => {
  // Assume tenders data is available or fetched from an API
  const tenders = [
    // Sample tender data
    { id: 1, title: 'Construction Project', description: 'Build a new facility', deadline: '2023-08-31' },
    { id: 2, title: 'Renovation Project', description: 'Renovate existing infrastructure', deadline: '2023-09-15' },
    // Add more tenders as needed
  ];

  // Find the tender with the matching ID
  const tenderId = parseInt(match.params.id, 10);
  const tender = tenders.find(t => t.id === tenderId);

  if (!tender) {
    return <p>Tender not found</p>;
  }

  return (
    <div className="tender-details-page">
      <h2>Tender Details</h2>
      <div className="tender-details">
        <h3>{tender.title}</h3>
        <p>{tender.description}</p>
        <p>Deadline: {tender.deadline}</p>
        {/* Add more details as needed */}
      </div>
money
      <Link to={`/bid-submission/${tender.id}`} className="btn btn-primary">
        Submit a Bid
      </Link>
    </div>
  );
};

export default TenderDetailsPage;
