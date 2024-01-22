// ContractCreationModal.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './ContractCreationModal.css';
import NotificationModal from './NotificationModal';

const ContractCreationModal = ({
  contractCreationDetails,
  setContractCreationDetails,
  onSave,
  onClose,
}) => {
  const [showNotification, setShowNotification] = useState(false);

  const handleDateChange = (date, fieldName) => {
    setContractCreationDetails((prevDetails) => ({
      ...prevDetails,
      [fieldName]: date,
    }));
  };

  const handleSave = () => {
    onSave();
    console.log('Save button clicked'); // Add this line
  window.alert('Contract has been added');
    setShowNotification(true);
  };

  const closeNotification = () => {
    setShowNotification(false);
    onClose();
  };

  return (
    <div className="contract-creation-modal">
      <div className="modal-content">
        <h2 className="mb-4 text-lg font-bold">Create Contract</h2>
        <div className="input-group">
          <input
            type="text"
            name="sugarFactoryName"
            value={contractCreationDetails.sugarFactoryName}
            onChange={(e) =>
              setContractCreationDetails((prevDetails) => ({
                ...prevDetails,
                sugarFactoryName: e.target.value,
              }))
            }
            placeholder="Sugar Factory Name"
            className="w-full p-2 border rounded-md mb-4"
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            name="contractorName"
            value={contractCreationDetails.contractorName}
            onChange={(e) =>
              setContractCreationDetails((prevDetails) => ({
                ...prevDetails,
                contractorName: e.target.value,
              }))
            }
            placeholder="Contractor Name"
            className="w-full p-2 border rounded-md mb-4"
          />
        </div>
        <div className="input-group">
          <DatePicker
            selected={contractCreationDetails.startDate}
            onChange={(date) => handleDateChange(date, 'startDate')}
            dateFormat="yyyy-MM-dd"
            placeholderText="Starting Date"
            className="w-full p-2 border rounded-md mb-4"
          />
        </div>
        <div className="input-group">
          <DatePicker
            selected={contractCreationDetails.deadline}
            onChange={(date) => handleDateChange(date, 'deadline')}
            dateFormat="yyyy-MM-dd"
            placeholderText="Deadline"
            className="w-full p-2 border rounded-md mb-4"
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            name="amount"
            value={contractCreationDetails.amount}
            onChange={(e) =>
              setContractCreationDetails((prevDetails) => ({
                ...prevDetails,
                amount: e.target.value,
              }))
            }
            placeholder="Amount"
            className="w-full p-2 border rounded-md mb-4"
          />
        </div>
        <div className="button-group">
          <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mr-2">
            Save
          </button>
          <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">
            Cancel
          </button>
        </div>
      </div>

      {showNotification && (
        <NotificationModal message="Contract has been added" onClose={closeNotification} />
      )}
    </div>
  );
};

export default ContractCreationModal;
