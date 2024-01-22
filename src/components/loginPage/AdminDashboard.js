// src/pages/AdminDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css'; // Create a corresponding CSS file

const AdminDashboard = () => {
  // Fetch or use sample data for admin dashboard
  const pendingTenders = [
    { id: 1, title: 'Construction Project', description: 'Build a new facility', deadline: '2023-08-31' },
    { id: 2, title: 'Renovation Project', description: 'Renovate existing infrastructure', deadline: '2023-09-15' },
    // Add more pending tenders as needed
  ];

  const acceptedBids = [
    { id: 101, tenderId: 1, contractor: 'ABC Contractors', bidAmount: 50000 },
    { id: 102, tenderId: 2, contractor: 'XYZ Builders', bidAmount: 60000 },
    // Add more accepted bids as needed
  ];

  return (
    <div className="admin-dashboard">
    <section className="section bg-blue-200">
      <h3 className="text-xl font-semibold mb-4 text-blue-800">Pending Tenders</h3>
      {pendingTenders.length === 0 ? (
        <p>No pending tenders at the moment.</p>
      ) : (
        <ul className="tender-list">
          {pendingTenders.map((tender) => (
            <li key={tender.id} className="tender-item">
              <Link to={`/admin/tenders/${tender.id}`} className="text-blue-500">
                <h4 className="text-lg font-semibold mb-2">{tender.title}</h4>
                <p>{tender.description}</p>
                <p className="text-gray-600">Deadline: {tender.deadline}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>

    <section className="section bg-green-200">
      <h3 className="text-xl font-semibold mb-4 text-green-800">Accepted Bids</h3>
      {acceptedBids.length === 0 ? (
        <p>No accepted bids at the moment.</p>
      ) : (
        <ul className="bid-list">
          {acceptedBids.map((bid) => (
            <li key={bid.id} className="bid-item">
              <Link to={`/admin/bids/${bid.id}`} className="text-green-500">
                <p className="text-lg font-semibold mb-2">Contractor: {bid.contractor}</p>
                <p className="text-gray-600">Bid Amount: ${bid.bidAmount}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
    </div>
  );
};

export default AdminDashboard;
