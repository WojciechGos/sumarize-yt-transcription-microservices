import React from "react";

import NavbarContainer from "../../components/Navbar/NavbarContainer";
import AuthenticationContainer from "../../components/GoogleButton/GoogleButtonContainer";
import FooterContainer from "../../components/Footer/FooterContainer";

const AuthenticationPage = () => {
  return (
    <>
      <NavbarContainer />
      <AuthenticationContainer/>
      <FooterContainer/>
    </>
  );
};

export default AuthenticationPage;
