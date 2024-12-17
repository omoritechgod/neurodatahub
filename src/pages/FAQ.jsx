import React from "react";
import Header from "../components/Header";
import Questions from "../components/Questions";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      {/* breadcrumb start */}
      <main className=" breadCrumb bc-container">
        <div className="bc-bg"></div>
        <h1 className=" bc-heading">FAQ's</h1>
        <div className="bc-link">
          <Link to="/">Home</Link>
          {"/"}
          <Link to="/faq">FAQ</Link>
        </div>
      </main>
      {/* breadcrumb end */}
      <Questions />
      <Footer />
    </div>
  );
};

export default FAQ;
