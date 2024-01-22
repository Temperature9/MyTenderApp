// src/pages/NotificationsPage.js
import React, { useState } from 'react';
import './NotificationPage.css'; // Create a corresponding CSS file

const NotificationsPage = () => {
  // Sample data for notifications
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'New bid accepted for Construction Project' },
    { id: 2, message: 'Reminder: Project deadline approaching' },
    // Add more notifications as needed
  ]);

  return (
    <div className="notifications-page">
      <h2>Notifications</h2>

      <ul className="notifications-list">
        {notifications.map((notification) => (
          <li key={notification.id} className="notification-item">
            <p>{notification.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationsPage;
