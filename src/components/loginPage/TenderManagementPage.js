// src/pages/TenderManagementPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './TenderManagementPage.css'; // Create a corresponding CSS file

const TenderManagementPage = () => {
  // Fetch or use sample data for tender management
  const allTenders = [
    { id: 1, title: 'Construction Project', description: 'Build a new facility', deadline: '2023-08-31', status: 'pending' },
    { id: 2, title: 'Renovation Project', description: 'Renovate existing infrastructure', deadline: '2023-09-15', status: 'accepted' },
    // Add more tenders as needed
  ];

  return (
    <div className="tender-management-page">
      <h2>Tender Management</h2>
      <ul className="tender-list">
        {allTenders.map((tender) => (
          <li key={tender.id} className="tender-item">
            <Link to={`/admin/tenders/${tender.id}`}>
              <h4>{tender.title}</h4>
              <p>{tender.description}</p>
              <p>Deadline: {tender.deadline}</p>
              <p>Status: {tender.status}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TenderManagementPage;
