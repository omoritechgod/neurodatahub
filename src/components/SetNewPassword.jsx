import React from "react";
import Login from "./Login";
import { useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SetNewPassword = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      {!isLogin && (
        <div className="w-[100vw] h-[100vh] bg-[rgba(255,255,255,0.9)] fixed top-0 left-0 flex items-center justify-center z-50 text-black">
          <div className="w-[25%] bg-white rounded-3xl p-6 flex flex-col gap-5 lg:w-[50%] md:w-[80%] drop-shadow-lg">
            <div>
              <h1 className="text-xl font-bold text-center text-primary">
                Set New Password
              </h1>
              <p className=" text-gray-500 text-center text-xs">
                Your new password must be different from your previous password
              </p>
            </div>

            <div className="text-xs flex flex-col gap-2">
              <div className="flex flex-col gap-1 relative">
                <label htmlFor="password" className="text-xs">
                  New Password
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

              <div className="flex flex-col gap-1 relative">
                <label htmlFor="password" className="text-xs">
                  Confirm Password
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

            <input
              type="submit"
              value="Reset Password"
              className="bg-primary text-white rounded-full p-2 text-xs"
            />

            <p className="text-[10px] text-center text-gray-500">
              Back to{" "}
              <button
                onClick={() => {
                  setIsLogin(true);
                }}
                className="text-primary"
              >
                login
              </button>
            </p>
          </div>
        </div>
      )}

      {isLogin && <Login />}
    </>
  );
};

export default SetNewPassword;
