// src/components/TenderListPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './TenderListPage.css'; // Create a corresponding CSS file

const TenderListPage = ({ tenders }) => {
  return (
    <div className="tender-list-page">
      <h2>Active Tenders</h2>

      {tenders.length === 0 ? (
        <p>No active tenders at the moment.</p>
      ) : (
        <ul className="tender-list">
          {tenders.map((tender) => (
            <li key={tender.id} className="tender-item">
              <Link to={`/tenders/${tender.id}`}>
                <h3>{tender.title}</h3>
                <p>{tender.description}</p>
                <p>Deadline: {tender.deadline}</p>
                <p>Bids Received: {tender.bids.length}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}

      <Link to="/bid-submission" className="btn btn-primary">
        Submit a Bid
      </Link>
    </div>
  );
};

export default TenderListPage;
