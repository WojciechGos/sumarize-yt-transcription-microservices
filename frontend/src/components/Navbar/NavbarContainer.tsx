import React, { useState } from "react"
import Navbar from "./Navbar"

const NavbarContainer = () => {
  const [open, setOpen] = useState<boolean>(false)

  const login = () => {}
  const register = () => {}
  const toggleDrawer = () => {
    setOpen(!open);
  }

  return (
    <Navbar login={login} register={register} toggleDrawer={toggleDrawer} open={open}/>
  )
}

export default NavbarContainer
