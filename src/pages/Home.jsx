// src/pages/Home.jsx
import React from 'react';
import Header from '../components/Header';
// import HeaderActive from '../components/HeaderActive'
import Carousel from '../components/Carousel';
import Cards from '../components/Cards';
// import HomeProducts from '../components/HomeProducts';
// import Reviews from '../components/Reviews';
// import Questions from '../components/Questions';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import UpdateSection from '../components/UpdateSection';
import About from '../components/About';
import PartnerSection from '../components/PartnerSection';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      {/* <HeaderActive/> */}
      <Carousel />
      <Cards/>
      <UpdateSection />
      <About/>
      <PartnerSection />
      <Footer />
    </div>
  );
};

export default Home;
