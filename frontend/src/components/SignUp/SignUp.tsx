import React, { FC, useState } from "react";
import GoogleButtonContainer from "../GoogleButton/GoogleButtonContainer";
import { Link } from "react-router-dom";
import PATH from "../../path";
import Button from "../Button/Button";

interface ISignUpProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  retypePassword: string;
  handleFirstNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLastNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRetypePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
}

const SignUp: FC<ISignUpProps> = ({
  firstName,
  lastName,
  email,
  password,
  retypePassword,
  handleFirstNameChange,
  handleLastNameChange,
  handleEmailChange,
  handlePasswordChange,
  handleRetypePasswordChange,
  handleSubmit,
}) => {
  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-3xl font-bold mb-4">Sign up</h1>

      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={(e)=>e.preventDefault()}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              First name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstname"
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={handleFirstNameChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstname"
            >
              Last name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastname"
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={handleLastNameChange}
            />
          </div>
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
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="retypePassword"
            >
              Retype password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="retypePassword"
              type="password"
              placeholder="Retype password"
              value={retypePassword}
              onChange={handleRetypePasswordChange}
            />
          </div>

          <div className="flex items-center justify-between">
            <Button title="Sign up" handler={handleSubmit} />
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          Already have an account?
          <Link to={PATH.SIGN_IN_PAGE}>
            <div className="text-blue-500 hover:text-blue-700">
              <button
                className="text-blue-500 hover:text-blue-700"
                type="button"
              >
                Sign In
              </button>
            </div>
          </Link>
        </p>
      </div>
      <div className="my-4">
        <GoogleButtonContainer />
      </div>
    </div>
  );
};

export default SignUp;
