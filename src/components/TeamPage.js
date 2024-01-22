// src/components/TeamPage.js
// TeamPage.js
import React from 'react';
import './TeamPage.css';

const teamMembers = [
  {
    id: 1,
    name: 'Prof.B.D.Thorat',
    role: 'Guide',
    photo: 'https://placekitten.com/150/150', // Placeholder image
  },
  {
    id: 2,
    name: 'Shravan ',
    role: 'CTO',
    photo: 'https://placekitten.com/151/151', // Placeholder image
  },
  {
    id: 3,
    name: 'amey',
    role: 'Lead Developer',
    photo: 'https://placekitten.com/152/152', // Placeholder image
  },
  {
    id: 4,
    name: 'Devyani',
    role: 'Designer',
    photo: 'https://placekitten.com/153/153', // Placeholder image
  },
  {
    id: 5,
    name: 'Renuka',
    role: 'Marketing Manager',
    photo: 'https://placekitten.com/154/154', // Placeholder image
  },
];

const TeamPage = () => {
  return (
    <div className="team-container">
      <h2>Our Team</h2>
      <div className="team-members">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-member">
            <img src={member.photo} alt={member.name} />
            <div className="member-details">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
