import React, { useState } from "react"
import Navbar from "./Navbar"

const NavbarContainer = () => {
  const [open, setOpen] = useState<boolean>(false)

  const toggleDrawer = () => {
    setOpen(!open);
  }

  const isLogged = localStorage.getItem("token") !== null;

  const logOut = () => {
    localStorage.removeItem("token");
    window.location.reload();
  }
  return (
    <Navbar toggleDrawer={toggleDrawer} open={open} isLogged={isLogged} logOut={logOut}/>
  )
}

export default NavbarContainer
