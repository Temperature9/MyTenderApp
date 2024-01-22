// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/loginPage/HomePage';
import AboutUsPage from './components/AboutUsPage';
import TeamPage from './components/TeamPage';
import LoginPage from './components/loginPage/LoginPage';
import RegistrationPage from './components/loginPage/RegistrationPage';
import TenderListPage from './components/loginPage/TenderListPage';
import ContractorForm from './components/loginPage/ContractorForm';
import ContractorProfilePage from './components/loginPage/ContractorProfilePage';
import AdminDashboard from './components/loginPage/AdminDashboard';
import NotificationPage from './components/loginPage/NotificationPage';
import ProjectDetailsPage from './components/loginPage/ProjectDetailsPage';
import BidSubmissionPage from './components/loginPage/BidSubmissionPage';
import SugarFactoryAdminPage from './components/loginPage/SugarFactoryAdminPage';
import './styles.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutUsPage} />
        <Route path="/team" component={TeamPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegistrationPage} />
        <Route path="/contractor-form" component={ContractorForm} />
        <Route path="/tenders" component={TenderListPage} />
        <Route path="/contractor-profile" component={ContractorProfilePage} />
        <Route path="/contractor-dashboard" component={AdminDashboard} />
        <Route path="/notification" component={NotificationPage} />
        <Route path="/sugar-factory-admin" component={SugarFactoryAdminPage} />
        <Route path="/contractor-project-id" component={ProjectDetailsPage} />
        <Route path="/contractor-bid-id" component={BidSubmissionPage} />

       
        </Switch>
      </div>
    </Router>
  );
};

export default App;
