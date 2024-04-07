import React from "react"
import SummarizeFormContainer from "../../components/SummarizeForm/SummarizeFormContainer"
import NavbarContainer from "../../components/Navbar/NavbarContainer"
import FooterContainer from "../../components/Footer/FooterContainer"

const HomePage = () => {
  return (
    <>
      <NavbarContainer />
      <SummarizeFormContainer />
      <FooterContainer />
    </>
  )
}

export default HomePage
