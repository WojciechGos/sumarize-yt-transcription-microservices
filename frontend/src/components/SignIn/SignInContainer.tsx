import React from "react";
import SignIn from "./SignIn";
import { useState } from "react";
import axiosInstance from "../../service/axiosConfig";
import { useNavigate } from "react-router-dom";


const SignInContainer = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const signInHandler = async () => {
    try {
      const response = await axiosInstance.post("/api/v1/sign-in", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SignIn
      email={email}
      password={password}
      handleEmailChange={handleEmailChange}
      handlePasswordChange={handlePasswordChange}
      signInHandler={signInHandler}
    />
  );
};

export default SignInContainer;
