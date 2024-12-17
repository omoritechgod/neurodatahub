import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import product from "../assets/images/Product+Showcase-1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faTag,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isCart, setIsCart] = useState(true);
  const [isShipping, setIsShipping] = useState(false);
  const [isPayment, setIsPayment] = useState(false);

  // Initialize the cart items with quantity for each product
  const [cartItems, setCartItems] = useState([
    {
      image: product,
      name: "Nike Sport Shoe",
      price: 200,
      quantity: 1, // Add quantity field
    },
    {
      image: product,
      name: "Nike Sport Shoe",
      price: 150,
      quantity: 1, // Add quantity field
    },
    {
      image: product,
      name: "Nike Sport Shoe",
      price: 500,
      quantity: 1, // Add quantity field
    },
  ]);

  // Increase the quantity for a specific item
  const increaseQuantity = (index) => {
    const updatedCart = cartItems.map((item, i) =>
      i === index ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
  };

  // Decrease the quantity for a specific item
  const decreaseQuantity = (index) => {
    const updatedCart = cartItems.map((item, i) =>
      i === index
        ? { ...item, quantity: Math.max(item.quantity - 1, 0) } // Ensure quantity doesn't go below 0
        : item
    );
    setCartItems(updatedCart);
  };

  return (
    <div>
      <Header />
      <div>
        {/***************************** breadcrumb start *****************************/}
        <main className=" breadCrumb bc-container">
          <div className="bc-bg"></div>
          <h1 className=" bc-heading">Cart</h1>
          <div className="bc-link">
            <Link to="/">Home</Link>
            {"/"}
            <Link to="/cart">Cart</Link>
          </div>
        </main>
        {/***************************** breadcrumb *****************************/}

        {/***************************** cart start *****************************/}
        {isCart && (
          <div className="cart-container ">
            <div className="cart-header">
              <div className=" relative">
                <p className=" bg-primary rounded-full p-1 px-2 text-center text-white text-xs font-semibold">
                  1
                </p>
                <p className=" absolute text-xs font-semibold top-8">Cart</p>
              </div>
              <hr className=" outline-none border-none h-[5px] bg-primary-40 w-[45%]" />
              <div className=" relative">
                <p className=" bg-primary-40 rounded-full p-1 px-2 text-center text-black text-xs font-semibold">
                  2
                </p>
                <p className=" absolute text-xs left-[-50%] font-semibold top-8">
                  Shipping
                </p>
              </div>
              <hr className=" outline-none border-none h-[5px] bg-primary-40 w-[45%]" />
              <div className=" relative">
                <p className=" bg-primary-40 rounded-full p-1 px-2 text-center text-black text-xs font-semibold">
                  3
                </p>
                <p className=" absolute text-xs left-[-50%] font-semibold top-8">
                  Payment
                </p>
              </div>
            </div>

            <div className=" grid grid-flow-col grid-cols-6 gap-5 md:grid-flow-row md:grid-cols-1">
              {/* cart start */}
              <section className=" md:py-[2rem] flex flex-col gap-[1rem] md:px-[1rem] md:text-wrap border-[1px] border-[rgba(0,0,0,0.5)] rounded-xl p-4 col-span-4 md:col-span-1">
                {cartItems.map((item, index) => (
                  <div
                    key={index}
                    className=" flex justify-between items-center md:text-xs border-b-[1.5px] border-[rgba(0, 0, 0, 0.25)] pb-2"
                  >
                    <img
                      src={item.image}
                      className=" w-[20%] rounded-sm"
                      alt=""
                    />
                    <div className=" flex gap-4 flex-col w-[75%] py-2">
                      <div className=" flex justify-between items-center">
                        <h1 className=" font-bold text-lg">{item.name}</h1>
                        <FontAwesomeIcon
                          icon={faTrash}
                          className=" text-red-500 text-xs px-4"
                        />
                      </div>
                      <div className=" flex items-center justify-between">
                        <p className="text-center">
                          ${item.price * item.quantity}
                        </p>
                        <div className=" flex gap-4 bg-primary-40 rounded-full p-1.5 px-4 items-center text-xs">
                          <button onClick={() => decreaseQuantity(index)}>
                            -
                          </button>
                          <p>{item.quantity}</p>
                          <button onClick={() => increaseQuantity(index)}>
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div className=" flex gap-2 text-xs">
                  <button className=" bg-primary rounded-full text-white w-[50%] text-center p-3">
                    Update cart
                  </button>
                  <Link
                    to="/products"
                    className=" bg-primary rounded-full text-white w-[50%] text-center p-2.5"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </section>
              {/* cart end */}

              {/* summary start */}
              <section className=" md:py-[2rem] flex flex-col gap-[1rem] md:px-[1rem] md:text-wrap border-[1px] border-[rgba(0,0,0,0.5)] rounded-xl p-4 col-span-2 h-fit text-sm md:col-span-1">
                <h1 className=" text-lg font-bold">Order Summary</h1>
                <div className=" flex flex-col gap-2 text-xs">
                  <section className=" flex items-center justify-between">
                    <h1>Subtotal</h1>
                    <p>$2000</p>
                  </section>
                  <p className=" text-xs text-[rgba(0,0,0,0.5)]">
                    Delivery fee not included yet
                  </p>
                  {/* <section className=" flex items-center justify-between">
                    <h1>Discount(-3%)</h1>
                    <p className=" text-red-500">-$12</p>
                  </section> */}
                  {/* <section className=" flex items-center justify-between">
                    <h1>Delivery fee</h1>
                    <p>$10</p>
                  </section> */}
                  {/* <hr /> */}
                  {/* <section className=" flex items-center justify-between">
                    <h1>Total</h1>
                    <p>$2000</p>
                  </section> */}
                </div>

                {/* <div className="flex items-center justify-between relative text-xs">
                  <input
                    type="text"
                    placeholder="Input coupon code"
                    className="outline-none border border-[rgba(0, 0, 0, 0.85)] p-2 rounded-sm pl-8 w-[72%]"
                  />
                  <input
                    type="submit"
                    value="Apply"
                    className="bg-primary text-white rounded-sm p-2 text-xs w-[27%]"
                  />
                  <FontAwesomeIcon
                    icon={faTag}
                    className="text-xs absolute text-[rgba(0 ,0 ,0 ,0.25)] left-3 bottom-2.5 cursor-pointer"
                  />
                </div> */}

                <button
                  className="text-xs w-full bg-primary rounded-full p-3 text-white flex gap-2 items-center justify-center m-auto"
                  onClick={() => {
                    setIsCart(false);
                    setIsShipping(true);
                  }}
                >
                  Proceed to Checkout
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </section>
              {/* summary start */}
            </div>
          </div>
        )}
        {/***************************** cart end *****************************/}

        {/***************************** shipping start *****************************/}
        {isShipping && (
          <div className="cart-container">
            <div className="cart-header">
              <div className=" relative">
                <p className=" bg-primary rounded-full p-1 px-2 text-center text-white text-xs font-semibold">
                  1
                </p>
                <p className=" absolute text-xs font-semibold top-8">Cart</p>
              </div>
              <hr className=" outline-none border-none h-[5px] bg-primary w-[45%]" />
              <div className=" relative">
                <p className=" bg-primary rounded-full p-1 px-2 text-center text-white text-xs font-semibold">
                  2
                </p>
                <p className=" absolute text-xs left-[-50%] font-semibold top-8">
                  Shipping
                </p>
              </div>
              <hr className=" outline-none border-none h-[5px] bg-primary-40 w-[45%]" />
              <div className=" relative">
                <p className=" bg-primary-40 rounded-full p-1 px-2 text-center text-black text-xs font-semibold">
                  3
                </p>
                <p className=" absolute text-xs left-[-50%] font-semibold top-8">
                  Payment
                </p>
              </div>
            </div>

            <div className=" grid grid-flow-col grid-cols-6 gap-5 md:grid-cols-1 md:grid-flow-row">
              {/* details start */}
              <section className=" md:py-[2rem] flex flex-col gap-[1rem] md:px-[1rem] md:text-wrap border-[1px] border-[rgba(0,0,0,0.5)] rounded-xl p-4 col-span-4 md:col-span-1">
                <h1 className=" text-lg font-bold">Shipping Details</h1>
                <section className=" flex flex-col gap-2">
                  <input
                    type="text"
                    className="outline-none border border-[rgba(0, 0, 0, 0.85)] p-2 rounded-sm text-xs"
                    placeholder="Fullname"
                  />
                  <input
                    type="Email"
                    className="outline-none border border-[rgba(0, 0, 0, 0.85)] p-2 rounded-sm text-xs"
                    placeholder="Email"
                  />
                  <input
                    type="text"
                    className="outline-none border border-[rgba(0, 0, 0, 0.85)] p-2 rounded-sm text-xs"
                    placeholder="Phone number"
                  />
                  <textarea
                    type="text"
                    className="outline-none border border-[rgba(0, 0, 0, 0.85)] p-2 rounded-sm text-xs"
                    placeholder="Input your shipping address"
                    rows="4"
                  />
                </section>
              </section>
              {/* details end */}

              {/* summary start */}
              <section className=" md:py-[2rem] flex flex-col gap-[1rem] md:px-[1rem] md:text-wrap border-[1px] border-[rgba(0,0,0,0.5)] rounded-xl p-4 col-span-2 h-fit text-sm md:col-span-1">
                <h1 className=" text-lg font-bold">Order Summary</h1>
                <div className=" flex flex-col gap-2 text-xs">
                  <section className=" flex items-center justify-between">
                    <h1>Subtotal</h1>
                    <p>$2000</p>
                  </section>
                  <section className=" flex items-center justify-between">
                    <h1>Discount(-3%)</h1>
                    <p className=" text-red-500">-$12</p>
                  </section>
                  <section className=" flex items-center justify-between">
                    <h1>Delivery fee</h1>
                    <p>$10</p>
                  </section>
                  <hr />
                  <section className=" flex items-center justify-between">
                    <h1>Total</h1>
                    <p>$1800</p>
                  </section>
                </div>

                <div className="flex items-center justify-between relative text-xs">
                  <input
                    type="text"
                    placeholder="Input coupon code"
                    className="outline-none border border-[rgba(0, 0, 0, 0.85)] p-2 rounded-sm pl-8 w-[72%]"
                  />
                  <input
                    type="submit"
                    value="Apply"
                    className="bg-primary text-white rounded-sm p-2 text-xs w-[27%]"
                  />
                  <FontAwesomeIcon
                    icon={faTag}
                    className="text-xs absolute text-[rgba(0 ,0 ,0 ,0.25)] left-3 bottom-2.5 cursor-pointer"
                  />
                </div>

                <button
                  className="text-xs w-full bg-primary rounded-full p-3 text-white flex gap-2 items-center justify-center m-auto"
                  onClick={() => {
                    setIsPayment(true);
                    setIsShipping(false);
                  }}
                >
                  Proceed to Payment
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </section>
              {/* summary start */}
            </div>
          </div>
        )}
        {/***************************** shipping end *****************************/}

        {/***************************** payment start *****************************/}
        {isPayment && (
          <div className="cart-container">
            <div className=" cart-header">
              <div className=" relative">
                <p className=" bg-primary rounded-full p-1 px-2 text-center text-white text-xs font-semibold">
                  1
                </p>
                <p className=" absolute text-xs font-semibold top-8">Cart</p>
              </div>
              <hr className=" outline-none border-none h-[5px] bg-primary w-[45%]" />
              <div className=" relative">
                <p className=" bg-primary rounded-full p-1 px-2 text-center text-white text-xs font-semibold">
                  2
                </p>
                <p className=" absolute text-xs left-[-50%] font-semibold top-8">
                  Shipping
                </p>
              </div>
              <hr className=" outline-none border-none h-[5px] bg-primary w-[45%]" />
              <div className=" relative">
                <p className=" bg-primary rounded-full p-1 px-2 text-center text-white text-xs font-semibold">
                  3
                </p>
                <p className=" absolute text-xs left-[-50%] font-semibold top-8">
                  Payment
                </p>
              </div>
            </div>

            <div className=" w-[70%] m-auto flex flex-col gap-4 md:w-[95%]">
              <section className=" bg-primary-40 rounded-md p-4">
                <p>Amount to pay:</p>
                <h1 className=" font-bold text-4xl">$2000</h1>
              </section>
              <p className=" font-bold">Payment method: Bank transfer</p>
              <p>
                You can make a direct transfer of your order and upload proof of payment as this would be used to verify your order.
              </p>
              <section className=" flex flex-col gap-3 border rounded-md border-[rgba(0,0,0,0.25)] p-4 md:text-sm">
                <div className=" flex items-center justify-between">
                  <p>Account Name</p>
                  <p className=" font-semibold uppercase">Offray Declutter</p>
                </div>
                <div className=" flex items-center justify-between">
                  <p>Account Number</p>
                  <p className=" font-semibold">20184314</p>
                </div>
                <div className=" flex items-center justify-between">
                  <p>Bank Name</p>
                  <p className=" font-semibold">Barclays</p>
                </div>
                <div className=" flex items-center justify-between">
                  <p>Sort Code</p>
                  <p className=" font-semibold">200864</p>
                </div>
              </section>
              <div className="bg-primary-40 rounded-md p-4 flex flex-col gap-2">
                <p>
                  Upload your proof of payment below to help complete your
                  order.
                </p>
                <input type="file" name="" id="" />
              </div>

              <div className=" flex gap-4">
                <button
                  className=" bg-primary rounded-md p-3 text-xs text-white w-[50%]"
                  onClick={() => {
                    setIsPayment(false);
                    setIsShipping(true);
                  }}
                >
                  Go back
                </button>
                <button className=" bg-primary rounded-md p-3 text-xs text-white w-[50%]">
                  Complete order
                </button>
              </div>
            </div>
          </div>
        )}
        {/***************************** payment end *****************************/}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
