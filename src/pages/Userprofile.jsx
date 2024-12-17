import React from 'react'
import { useEffect } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Userprofile = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header/>
      <main className="breadCrumb bc-container">
        <div className="bc-bg"></div>
        <h1 className="bc-heading">User Profile</h1>
        <div className="bc-link">
          <Link to="/">Home</Link>
          {"/"}
          <Link to="/userprofile">User Profile</Link>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default Userprofile