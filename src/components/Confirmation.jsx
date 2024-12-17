import React from "react";
import Login from './Login'
import { useState } from "react";

const Confirmation = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      {!isLogin && (
        <div className="w-[100vw] h-[100vh] bg-[rgba(255,255,255,0.9)] fixed top-0 left-0 flex items-center justify-center z-50">
        <div className="w-[25%] bg-white rounded-3xl p-6 flex flex-col gap-5 lg:w-[50%] md:w-[80%] drop-shadow-lg">
          <div>
            <h1 className="text-xl font-bold text-center text-primary">Password Reset Successful</h1>
            <p className=" text-gray-500 text-center text-xs">
              Your password has been successfully reset, continue to login
            </p>
          </div>

          <input
            type="submit"
            value="Continue"
            className="bg-primary text-white rounded-full p-2 text-xs"
          />

          <p className="text-[10px] text-center text-gray-500">Back to <button className="text-primary" onClick={()=>{setIsLogin(true)}}>login</button></p>
        </div>
      </div>
      )}

      {isLogin && <Login/>}
    </>
  );
}

export default Confirmation