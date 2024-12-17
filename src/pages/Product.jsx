// src/pages/Products.jsx
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import ProductsList from "../Products"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import axios from 'axios';

const Products = () => {
  const [isActive1, SetIsActive1] = useState(false);
  const [isActive2, SetIsActive2] = useState(false);
  const [isActive3, SetIsActive3] = useState(false);
  const [isActive4, SetIsActive4] = useState(false);
  const [productList, setProductList] = useState([])

  // const products = [
  //   {
  //     id: 1,
  //     image: product1,
  //     name: "Nike Sports Shoe",
  //     price: "$200",
  //   },
  //   {
  //     id: 2,
  //     image: product2,
  //     name: "Nike Sports Shoe",
  //     price: "$200",
  //   },
  //   {
  //     id: 3,
  //     image: product3,
  //     name: "Nike Sports Shoe",
  //     price: "$200",
  //   },
  //   {
  //     id: 4,
  //     image: product4,
  //     name: "Nike Sports Shoe",
  //     price: "$200",
  //   },
  //   {
  //     id: 5,
  //     image: product5,
  //     name: "Nike Sports Shoe",
  //     price: "$200",
  //   },
  //   {
  //     id: 6,
  //     image: product6,
  //     name: "Nike Sports Shoe",
  //     price: "$200",
  //   },
  //   {
  //     id: 7,
  //     image: product7,
  //     name: "Nike Sports Shoe",
  //     price: "$200",
  //   },
  //   {
  //     id: 8,
  //     image: product8,
  //     name: "Nike Sports Shoe",
  //     price: "$200",
  //   },
  // ];

  // const [data, setData] = useState([])

  // useEffect(()=>{
  //   axios
  //   .get('https://fakestoreapi.com/products')
  //   .then(product => {
  //     setData(product.data)
  //   })
  //   .catch(error => {
  //     console.error(error)
  //   })
  // })

  useEffect(() => {
    // Simulate a network request
    setTimeout(() => {
      setProductList(ProductsList); // Set the product list to the fetched data
    }, 1000);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const product = productList.map((product) => (
    <div
      className="relative bg-white rounded-lg overflow-hidden flex flex-col gap-[2rem] p-2 drop-shadow-lg"
      key={product.id}
    >
      <Link
        to={`/product/${product.id}`}
        className=" flex flex-col gap-[1rem]"
      >
        <div className=" w-full rounded-md overflow-hidden flex items-center justify-center h-[35vh] lg:h-[20vh] md:h-[35vh] ">
          <img src={product.image} className=" w-full" alt="" />
        </div>
        <div className=" flex justify-between flex-col">
          <p className=" font-bold">{product.name}</p>
          <p className=" font-light text-sm text-grey">{product.price}</p>
        </div>
      </Link>
      <button className=" bg-[rgba(7,51,98,0.9)] rounded-lg text-xs font-bold text-white p-3">
        {" "}
        Add to Cart
      </button>
      <div className=" absolute text-[10px] bg-white rounded-md px-4 p-2 top-5 left-5 font-bold drop-shadow-lg">{product.catergory}</div>
    </div>
  ));

  return (
    <div className=" w-full over">
      <Header />
      <main className=" breadCrumb bc-container">
        <div className="bc-bg"></div>
        <h1 className=" bc-heading">Shop</h1>
        <div className="bc-link">
          <Link to="/">
            {/* <FontAwesomeIcon icon={faHome} /> */}
            Home
          </Link>
          {"/"}
          <Link to="/products">Products</Link>
        </div>
      </main>

      <div className=" flex justify-between gap-[1rem] w-[80%] m-auto py-[5rem] lg:py-[3rem] lg:gap-2 md:flex-col md:text-center lg:w-[90%] lg:ga">
        {/* categories */}
        <div className=" w-[25%] lg:w-[30%] md:w-full border border-[rgba(0,0,0,0.25)] rounded-lg h-fit flex flex-col gap-1 items-start justify-start px-[1.5rem] py-[2rem]">
          <div className="flex bg-none border border-[rgba(0,0,0,0.5)] items-center p-3 gap-1 justify-between w-full">
            <input
              type="text"
              className=" bg-transparent text-sm border-none outline-none w-[90%]"
              placeholder="Search products..."
            />
            <FontAwesomeIcon
              icon={faSearch}
              className=" text-xs text-[rgba(0,0,0,0.5)]"
            />
          </div>
          <h1 className=" font-bold text-md">Categories</h1>
          <button className=" text-sm">Household</button>
          <button className=" text-sm">Foodstuffs</button>
        </div>

        <div className=" flex flex-col gap-3 w-[75%] lg:w-[70%] md:w-full border border-[rgba(0,0,0,0.25)] rounded-lg h-fit items-start justify-start px-[1rem] py-[1rem]">
          <div className="grid grid-cols-3 gap-5 lg:grid-cols-2 md:grid-cols-1">
            {product}
          </div>

          <div className=" flex justify-center items-center gap-[0.75rem] p-3">
            <p>{"<"}</p>
            <p
              className={`h-[25px] w-[25px] rounded-md bg-transparent ${
                isActive1 ? "border" : "border-0"
              } border-black flex items-center justify-center cursor-pointer`}
              onClick={() => {
                SetIsActive1(!isActive1);
              }}
            >
              1
            </p>
            <p
              className={`h-[25px] w-[25px] rounded-md bg-transparent ${
                isActive2 ? "border" : "border-0"
              } border-black flex items-center justify-center cursor-pointer`}
              onClick={() => {
                SetIsActive2(!isActive2);
              }}
            >
              2
            </p>
            <p
              className={`h-[25px] w-[25px] rounded-md bg-transparent ${
                isActive3 ? "border" : "border-0"
              } border-black flex items-center justify-center cursor-pointer`}
              onClick={() => {
                SetIsActive3(!isActive3);
              }}
            >
              3
            </p>
            <p>...</p>
            <p
              className={`h-[25px] w-[25px] rounded-md bg-transparent ${
                isActive4 ? "border" : "border-0"
              } border-black flex items-center justify-center cursor-pointer`}
              onClick={() => {
                SetIsActive4(!isActive4);
              }}
            >
              20
            </p>
            <p>{">"}</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
