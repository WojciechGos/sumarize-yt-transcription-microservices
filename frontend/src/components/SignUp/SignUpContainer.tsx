import React from "react";
import SignUp from "./SignUp";
import { useState } from "react";
import axiosInstance from "../../service/axiosConfig";

const SignUpContainer = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [retypePassword, setRetypePassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRetypePasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRetypePassword(e.target.value);
  };

  const handleSubmit = async () => {
    if (password !== retypePassword) {
      setError(true);
      return;
    }

    const response = await axiosInstance.post("/api/v1/sign-up", {
      firstName,
      lastName,
      email,
      password,
    });
    
    localStorage.setItem("token", response.data);
  };

  return (
    <SignUp
      firstName={firstName}
      lastName={lastName}
      handleLastNameChange={handleLastNameChange}
      email={email}
      password={password}
      retypePassword={retypePassword}
      handleFirstNameChange={handleFirstNameChange}
      handleEmailChange={handleEmailChange}
      handlePasswordChange={handlePasswordChange}
      handleRetypePasswordChange={handleRetypePasswordChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default SignUpContainer;
