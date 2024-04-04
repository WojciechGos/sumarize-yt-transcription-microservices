import React from "react"
import SummarizeFormContainer from "../../components/SummarizeForm/SummarizeFormContainer"
import NavbarContainer from "../../components/Navbar/NavbarContainer"
import Footer from "../../components/Footer/Footer"

const HomePage = () => {
  return (
    <>
      <NavbarContainer />
      <SummarizeFormContainer />
      <Footer />
    </>
  )
}

export default HomePage
