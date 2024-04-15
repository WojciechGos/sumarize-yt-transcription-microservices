import React, { FC } from "react";
import GoogleButtonContainer from "../GoogleButton/GoogleButtonContainer";
import { Link } from "react-router-dom";
import PATH from "../../path";
import Button from "../Button/Button";

interface ISignInProps{
  email: string
  password:string
  handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  signInHandler: ()=>void
}

const SignIn : FC<ISignInProps> = ({
  email,
  password,
  handleEmailChange,
  handlePasswordChange,
  signInHandler
}) => {
  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-3xl font-bold mb-4">Sign in</h1>

      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={(e)=> e.preventDefault()}>
          
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            
          </div>

          <div className="flex items-center justify-between">
            <Button
              title="Sign in"
              handler={signInHandler}
            />
          </div>
        </form>
        {/* <div className="text-center text-gray-500 text-xs">
          Don't have an account?
          <Link to={PATH.SIGN_UP_PAGE}>
            <div className="text-blue-500 hover:text-blue-700">
              <button
                className="text-blue-500 hover:text-blue-700"
                type="button"
              >
                Sign Up
              </button>
            </div>
          </Link>
        </div> */}
      </div>
      {/* <div className="my-4">
        <GoogleButtonContainer/>
      </div> */}
    </div>
  );
};

export default SignIn;
