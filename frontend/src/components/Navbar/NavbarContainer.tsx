import React, { useState } from "react"
import Navbar from "./Navbar"

const NavbarContainer = () => {
  const [open, setOpen] = useState<boolean>(false)

  const toggleDrawer = () => {
    setOpen(!open);
  }



  return (
    <Navbar toggleDrawer={toggleDrawer} open={open}/>
  )
}

export default NavbarContainer
