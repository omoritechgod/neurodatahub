import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faClose, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Login from "./Login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(false); // Control whether to show Login
  const [closeSignup, setCloseSignup] = useState(false)

  return (
    <>
      {/* Signup Form */}
      {!isLogin && (
        <div className={`w-[100vw] h-[100vh] bg-[rgba(255,255,255,0.9)] fixed top-0 left-0 ${closeSignup ? "hidden" : "flex"} items-center justify-center z-50 text-black`}>
          <div className="w-[25%] bg-white rounded-3xl p-6 px-10 flex flex-col gap-2 lg:w-[50%] md:w-[80%] drop-shadow-lg">
            <div className="flex justify-between items-center mb-3">
              <h1 className="text-xl font-bold text-primary">Create account</h1>
              <FontAwesomeIcon
                icon={faClose}
                className="text-xs text-white bg-primary rounded-full p-1 px-1.5 cursor-pointer"
                onClick={() => setCloseSignup(true)} // Close button
              />
            </div>
            <div className="text-xs flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-xs">
                  Name/Username:
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name/username"
                  className="outline-none border border-[rgba(0, 0, 0, 0.85)] p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-xs">
                  Email:
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="outline-none border border-[rgba(0, 0, 0, 0.85)] p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col gap-1 relative">
                <label htmlFor="password" className="text-xs">
                  Password
                </label>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="outline-none border border-[rgba(0, 0, 0, 0.85)] p-2 rounded-md pr-8"
                />
                <FontAwesomeIcon
                  icon={showPassword ? faEye : faEyeSlash}
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-xs absolute text-[rgba(0 ,0 ,0 ,0.85)] right-2 bottom-3 cursor-pointer"
                />
              </div>
            </div>

            <div className="text-[10px] flex items-center gap-1">
              <input type="checkbox" name="" id="" className=" w-[5%]"/>
              <label htmlFor="">I agree with Terms and Privacy</label>
            </div>

            <input
              type="submit"
              value="Sign up"
              className="bg-primary text-white rounded-full p-2 text-xs"
            />

            <div className="flex items-center justify-between">
              <hr className="outline-none border-none h-[0.65px] bg-black w-[45%]" />
              <p className="text-center text-xs">or</p>
              <hr className="outline-none border-none h-[0.65px] bg-black w-[45%]" />
            </div>

            <div className="flex items-center justify-center gap-2 bg-white rounded-full p-2 drop-shadow-md text-xs cursor-pointer">
              <FontAwesomeIcon icon={faGoogle} />
              <span>Sign up with Google</span>
            </div>

            <p className="text-[10px] text-center">
              Already have an account?{" "}
              <button
                onClick={() => setIsLogin(true)} // Switch to Login form
                className="text-primary"
              >
                Login
              </button>
            </p>
          </div>
        </div>
      )}

      {/* Login Form */}
      {isLogin && <Login />}
    </>
  );
};

export default Signup;
