import React from "react";
import GoogleButton from "./GoogleButton";
import { jwtDecode } from "jwt-decode";
import axiosInstance from "../../service/axiosConfig";
import PATH from "../../path";

const GoogleButtonContainer = () => {
 
  const redirect = ()=>{
    window.location.href = PATH.CONTINUE_WITH_GOOGLE;
  }

  return <GoogleButton redirect={redirect}/>;
};

export default GoogleButtonContainer;
