import React from "react";
import Login from './Login'
import { useState } from "react";

const Forgotpassword = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      {!isLogin && (
        <div className="w-[100vw] h-[100vh] bg-[rgba(255,255,255,0.9)] fixed top-0 left-0 flex items-center justify-center z-50 text-black">
        <div className="w-[25%] bg-white rounded-3xl p-6 flex flex-col gap-5 lg:w-[50%] md:w-[80%] drop-shadow-lg">
          <div>
            <h1 className="text-xl font-bold text-center text-primary">Forgot Password</h1>
            <p className=" text-gray-500 text-center text-xs">
              No worries, we will send you reset instructions
            </p>
          </div>
          <div className="flex flex-col gap-1 text-xs">
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

          <input
            type="submit"
            value="Reset Password"
            className="bg-primary text-white rounded-full p-2 text-xs"
          />

          <p className="text-[10px] text-center text-gray-500">Back to <button className="text-primary" onClick={()=>{setIsLogin(true)}}>login</button></p>
        </div>
      </div>
      )}

      {isLogin && <Login/>}
    </>
  );
};

export default Forgotpassword;
