import React from "react";
import product1 from '../assets/images/Products/IMG-20240913-WA0048.jpg'
import product2 from '../assets/images/Products/IMG-20240913-WA0049.jpg'
import product3 from '../assets/images/Products/IMG-20240913-WA0051.jpg'
import product4 from '../assets/images/Products/IMG-20240913-WA0052.jpg'
import product5 from '../assets/images/Products/IMG-20240913-WA0053.jpg'
import product6 from '../assets/images/Products/IMG-20240913-WA0054.jpg'
import product7 from '../assets/images/Products/IMG-20240913-WA0055.jpg'
import product8 from '../assets/images/Products/IMG-20240913-WA0056.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import { useState, useEffect } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";

const HomeProducts = () => {
  const products = [
    {
      id: 1,
      image: product1,
      name: "Nike Sports Shoe",
      price: "$200",
    },
    {
      id: 2,
      image: product2,
      name: "Nike Sports Shoe",
      price: "$200",
    },
    {
      id: 3,
      image: product3,
      name: "Nike Sports Shoe",
      price: "$200",
    },
    {
      id: 4,
      image: product4,
      name: "Nike Sports Shoe",
      price: "$200",
    },
    {
      id: 5,
      image: product5,
      name: "Nike Sports Shoe",
      price: "$200",
    },
    {
      id: 6,
      image: product6,
      name: "Nike Sports Shoe",
      price: "$200",
    },
    {
      id: 7,
      image: product7,
      name: "Nike Sports Shoe",
      price: "$200",
    },
    {
      id: 8,
      image: product8,
      name: "Nike Sports Shoe",
      price: "$200",
    },
  ]

  // const [data, setData] = useState([])

  // useEffect(()=>{
  //   axios
  //   .get('https://dummyapi.online/api/products')
  //   .then(product => {
  //     setData(product.data)
  //   })
  //   .catch(error => {
  //     console.error(error)
  //   })
  // })

  return (
    <div className=" relative bg-[rgba(7,51,98)] px-[5rem] py-[2rem] flex flex-col gap-3 md:px-[3rem]">
      {/* <h1 className=" text-center font-bold text-white text-3xl uppercase underline">Products</h1> */}
      <div className="products grid grid-flow-col auto-cols-[225px] md:auto-cols-[200px] overflow-scroll gap-[1.2rem] no-scrollbar">
        {products.map((product) => (
          <Link className=" bg-white rounded-lg overflow-hidden flex flex-col gap-[0.75rem] p-2" to={`/product/${product.id}`} key={product.id}>
            <div className="rounded-md overflow-hidden flex items-center justify-center h-[30vh]">
              <img src={product.image} alt="" className="w-full" />
            </div>
            <div className=" flex justify-between items-center">
              <p className=" font-bold">{product.name}</p>
              <p className=" font-light text-sm text-grey">{product.price}</p>
            </div>
            <button className=" bg-[rgba(7,51,98)] rounded-lg text-xs font-bold text-white p-3"> Add to Cart</button>
          </Link>
        ))}
      </div>

      {/* left arrow */}
      <button className=" absolute top-[50%] left-[1.5rem] bg-white rounded-full p-3 h-[2.5rem] flex items-center justify-center w-[2.5rem] md:h-[2rem] md:w-[2rem] md:left-[0.5rem]">
        <FontAwesomeIcon icon={faArrowLeft} className=" text-black text-[0.75rem]" />
      </button>

      {/* right arrow */}
      <button className=" absolute top-[50%] right-[1.5rem] bg-white rounded-full p-3 h-[2.5rem] flex items-center justify-center w-[2.5rem] md:h-[2rem] md:w-[2rem] md:right-[0.5rem]">
        <FontAwesomeIcon icon={faArrowRight} className=" text-black text-[0.75rem]" />
      </button>
    </div>
  );
};

export default HomeProducts;
