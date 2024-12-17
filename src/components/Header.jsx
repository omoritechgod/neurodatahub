// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LogoWhite from "../assets/images/logos/neurolight.png";
import "../assets/css/Header.css";
import User from "../assets/images/user.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faClose,
  faSearch,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import Login from "./Login";
import Signup from "./Signup";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const [servicesOpen, setServicesOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);
  const [communityOpen, setCommunityOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`navbar ${isScrolled ? "scrolled" : "header"}`}>
      {/* Desktop Navigation */}
      <div className="flex items-center justify-between md:hidden">
        <Link to="/" className="header-logo">
          <img src={LogoWhite} alt="" />
        </Link>
        <nav className={`desktopNav ${isScrolled ? "scrolledLink" : "header-nav"} md:hidden`}>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <div className="dropdown">
            <button className="dropdown-button">Services</button>
            <div className="dropdown-content">
              <Link to="/data-repositories">Data Repositories</Link>
              <Link to="/learning-resources">Learning Resources</Link>
              <Link to="/research-collaborations">Research Collaborations</Link>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropdown-button">Events</button>
            <div className="dropdown-content">
              <Link to="/upcoming-events">Upcoming Events</Link>
              <Link to="/past-events">Past Events</Link>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropdown-button">Community</button>
            <div className="dropdown-content">
              <Link to="/community">Community Resources</Link>
              <Link to="/networkExperts">Network Of Experts</Link>
            </div>
          </div>
          <Link to="/contact">Contact</Link>
          {/* <Link to="/shop">Shop</Link> */}
        </nav>

        <nav className="flex items-center gap-[20px] md:hidden">
          <button>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div className="items-center gap-4 hidden md:flex justify-between">
        <Link to="/" className="hidden md:flex w-[30%]">
          <img src={LogoWhite} alt="" />
        </Link>
        <FontAwesomeIcon
          icon={navOpen ? faClose : faBars}
          className={` ${isScrolled ? "scrolledLink" : "header-nav"} z-20`}
          onClick={() => {
            setNavOpen(!navOpen);
          }}
        />
      </div>

      <div className={`absolute w-[100vw] h-[100vh] top-0 left-0 bg-[rgba(7,51,98,0.5)] ${navOpen ? "flex" : "hidden"}`}></div>

      {/* Mobile Drop-Down Menu */}
      <nav
        className="mobileNav header-nav absolute top-0 left-0 flex flex-col gap-8 text-lg bg-[#073362] p-[2.5rem] w-[75%] h-[100vh] overflow-y-scroll"
        style={{ display: `${navOpen ? "flex" : "none"}` }}
      >
        <Link to="/" className="hidden md:flex w-[75%]">
          <img src={LogoWhite} alt="" />
        </Link>
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <div className="dropdown-mobile">
          <button onClick={() => setServicesOpen(!servicesOpen)}>
            Services <FontAwesomeIcon icon={faChevronDown} className={`chevron ${servicesOpen ? 'rotate' : ''}`} />
          </button>
          {servicesOpen && (
            <div className="dropdown-mobile-content">
              <Link to="/data-repositories">Data Repositories</Link>
              <Link to="/learning-resources">Learning Resources</Link>
              <Link to="/research-collaborations">Research Collaborations</Link>
            </div>
          )}
        </div>
        <div className="dropdown-mobile">
          <button onClick={() => setEventsOpen(!eventsOpen)}>
            Events <FontAwesomeIcon icon={faChevronDown} className={`chevron ${eventsOpen ? 'rotate' : ''}`} />
          </button>
          {eventsOpen && (
            <div className="dropdown-mobile-content">
              <Link to="/upcoming-events">Upcoming Events</Link>
              <Link to="/past-events">Past Events</Link>
            </div>
          )}
        </div>
        <div className="dropdown-mobile">
          <button onClick={() => setCommunityOpen(!communityOpen)}>
            Community <FontAwesomeIcon icon={faChevronDown} className={`chevron ${communityOpen ? 'rotate' : ''}`} />
          </button>
          {communityOpen && (
            <div className="dropdown-mobile-content">
              <Link to="/community">Community Resources</Link>
            </div>
          )}
        </div>
        <Link to="/products">Contact</Link>
        {/* <Link to="/products">Shop</Link> */}
      </nav>
    </header>
  );
};

export default Header;
