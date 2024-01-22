// src/pages/ProjectDetailsPage.js
import React, { useState } from 'react';
import './ProjectDetailsPage.css'; // Create a corresponding CSS file

const ProjectDetailsPage = ({ match }) => {
  const projectId = parseInt(match.params.id, 10); // Assuming the project ID is passed as a parameter

  // Sample data for project details
  const [projectDetails, setProjectDetails] = useState({
    id: projectId,
    title: 'Construction Project',
    bidAmount: 50000,
    status: 'pending',
    assignedWorkers: [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
    ],
    transportationDetails: 'Truck for materials transport',
    // Add more project details as needed
  });

  return (
    <div className="project-details-page">
      <h2>Project Details</h2>

      <div className="project-details">
        <h3>{projectDetails.title}</h3>
        <p>Bid Amount: ${projectDetails.bidAmount}</p>
        <p>Status: {projectDetails.status}</p>
      </div>

      <div className="assigned-workers">
        <h3>Assigned Workers</h3>
        <ul>
          {projectDetails.assignedWorkers.map((worker) => (
            <li key={worker.id}>{worker.name}</li>
          ))}
        </ul>
      </div>

      <div className="transportation-details">
        <h3>Transportation Details</h3>
        <p>{projectDetails.transportationDetails}</p>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
