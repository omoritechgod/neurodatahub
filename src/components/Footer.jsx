// src/components/Footer.jsx
import React from 'react';
import Logo from '../assets/images/logos/neurolight.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocation, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../assets/css/Footer.css';


const Footer = () => {
  return (
    <footer className="footer bg-primary flex flex-col gap-[2rem] px-[5rem] py-[2rem] lg:px-[3rem] text-white md:px-[2rem]">
      <div className=' flex justify-between md:flex-col md:gap-[1rem]'>
        {/* logo image */}
        <div className=' w-[13%] sm:w-[60%]'>
          <img src={Logo} alt="" className='w-full' />
          {/* <p className=' uppercase text-sm'>Shopping with a touch of whimpsy</p> */}
        </div>
        {/* links */}
        <div className=' flex flex-col gap-[1rem] sm:w-full lg:w-[10%]'>
          {/* <p className=' font-bold text-lg'>Links</p> */}
          <Link to='/' className=' text-sm white'>Home</Link>
          <Link to='/about' className=' text-sm white'>About</Link>
          <Link to='/services' className=' text-sm white'>Services</Link>
          <Link to='/products' className=' text-sm white'>events</Link>
        </div>

        <div className=' flex flex-col gap-[1rem] sm:w-full lg:w-[10%]'>
          {/* <p className=' font-bold text-lg'>Links</p> */}
          <Link to='/faq' className=' text-sm white'>FAQ's</Link>
          <Link to='/game' className=' text-sm white'>Community</Link>
          <Link to='/contact' className=' text-sm white'>Contact us</Link>
          {/* <Link to='/services' className=' text-sm white'>Services</Link>
          <Link to='/products' className=' text-sm white'>Shop</Link> */}
        </div>
        {/* socials */}
        <div className=' w-[25%] flex flex-col gap-[1rem] sm:w-full lg:w-[40%]'>
          <p className=' flex gap-1 items-center text-sm'>
            <FontAwesomeIcon className=' text-xs' icon={faPhone} />
            +234 803 702 7190
          </p>
          <p className=' flex gap-1 items-center text-sm'>
            <FontAwesomeIcon className=' text-xs' icon={faEnvelope} />
            info@neurodatahub.com
          </p>
          <p className=' flex gap-1 items-center text-sm'>
            <FontAwesomeIcon  className=' text-xs'icon={faLocation} />
            No 50 London, United Kingdom
          </p>
        </div>
      </div>

      <hr className=' h-[2px] bg-white outline-none border-none w-full' />

      <div className=' flex justify-between items-center'>
        <p className=' text-sm sm:text-xs'>&copy; {new Date().getFullYear()} neurodatahub All rights reserved.powered by nexatrux.com</p>
        <div className=' flex gap-3 sm:gap-1'>
          <a href="https://www.instagram.com/offraydeclutter/" target='blank'>
            <FontAwesomeIcon className=' text-sm sm:text-xs rounded-full p-2 bg-white text-primary' icon={faInstagram} />
          </a>
          <a href="https://x.com/DeclutterSistah" target='blank'>
            <FontAwesomeIcon className=' text-sm sm:text-xs rounded-full p-2 bg-white text-primary' icon={faTwitter} />
          </a>
          <a href="https://wa.me/447882972643" target='blank'>
            <FontAwesomeIcon className=' text-sm sm:text-xs rounded-full p-2 bg-white text-primary' icon={faWhatsapp} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
