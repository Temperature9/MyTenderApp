// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to My Tender App</h1>
          <p>Your Gateway to Seamless Tendering</p>
        </div>
      </section>

      <section className="features-section">
        <div className="feature-card">
          <h2>Efficient Tender Management</h2>
          <p>Create, manage, and track tenders effortlessly.</p>
        </div>

        <div className="feature-card">
          <h2>Secure and Transparent</h2>
          <p>Experience secure and transparent transactions for all your tendering activities.</p>
        </div>

        <div className="feature-card">
          <h2>Customized Dashboards</h2>
          <p>Dashboard tailored for contractors, sugar factories, and admin/support.</p>
        </div>
      </section>


<section className="additional-content-section">
  <div className="content-container">
    <h2 className="text-3xl font-bold mb-4">Why Choose My Tender App?</h2>
    <p className="text-lg mb-8">
      My Tender App simplifies the entire tendering process, offering a user-friendly platform
      for efficient collaboration between contractors and sugar factories.
    </p>

    {/* Features list in card format */}
    <ul className="features-list">
      <li className="features-list-item">
        <h3>Effortless Tender Management</h3>
        <p>Manage your tenders with ease and efficiency.</p>
      </li>
      <li className="features-list-item">
        <h3>Secure Transactions</h3>
        <p>Experience secure and transparent tender transactions.</p>
      </li>
      <li className="features-list-item">
        <h3>Customized Dashboards</h3>
        <p>Get tailored dashboards for various user roles.</p>
      </li>
    </ul>
  </div>
</section>



      {/* "Get Started" section */}
       <section
        className="get-started-section relative flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://source.unsplash.com/HYQvV8wWX18")',
          backgroundSize: 'cover',
          filter: 'brightness(80%)', // Adjust the percentage as needed
        }}
      >
        {/* Overlay with black background */}
        <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        {/* Text content */}
        <div className="text-overlay text-white text-center relative z-10">
          <h2 className="text-3xl">Get Started</h2>
          <p className="text-lg">Join us today to simplify your tendering process.</p>

          {/* "Register Now" button with Link */}
          <Link to="/register" className="btn btn-primary">
            Register Now
          </Link>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
