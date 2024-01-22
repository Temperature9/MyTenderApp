// NotificationModal.js
import React from 'react';
import './NotificationModal.css';

const NotificationModal = ({ message, onClose }) => {
  return (
    <div className="notification-modal-overlay">
      <div className="notification-modal">
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default NotificationModal;
