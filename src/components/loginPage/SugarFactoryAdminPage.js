// SugarFactoryAdminPage.js
import React, { useState } from 'react';
import './SugarFactoryAdminPage.css';
import ContractCreationModal from './ContractCreationModal';

const SugarFactoryAdminPage = () => {
  const [showContractCreationModal, setShowContractCreationModal] = useState(false);
  const [contractCreationDetails, setContractCreationDetails] = useState({
    sugarFactoryName: '',
    contractorName: '',
    startDate: '',
    deadline: '',
    amount: '',
  });

  const handleOpenContractCreationModal = () => {
    setShowContractCreationModal(true);
  };

  const handleCloseContractCreationModal = () => {
    setShowContractCreationModal(false);
  };

  const handleSaveContract = () => {
    // Handle saving contract details
    // ...

    // Close the modal
    handleCloseContractCreationModal();
  };

  return (
    <div className="sugar-factory-admin-container">
      <h2 className="admin-heading">Sugar Factory Admin Page</h2>

      <div className="admin-content">
        {/* Contractors List */}
        <div className="contractors-list admin-list">
          <h3>Contractors List</h3>
          {/* Display existing contractors */}
          <button className="create-button" onClick={handleOpenContractCreationModal}>
            Create Contract
          </button>
        </div>
      </div>

      {/* Contract Creation Modal */}
      {showContractCreationModal && (
        <ContractCreationModal
          contractCreationDetails={contractCreationDetails}
          setContractCreationDetails={setContractCreationDetails}
          onSave={handleSaveContract}
          onClose={handleCloseContractCreationModal}
        />
      )}
    </div>
  );
};

export default SugarFactoryAdminPage;
