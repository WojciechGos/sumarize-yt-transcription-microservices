import React, { FC, useState } from "react"
import Drawer from "@mui/material/Drawer"
import DrawerItemContainer from "./DrawerItem/DrawerItemContainer"

interface IDrawerMenuProps {
  open: boolean
  toggleDrawer: () => void
}

const DrawerMenu: FC<IDrawerMenuProps> = ({ open, toggleDrawer }) => {
  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer} >
        <DrawerItemContainer toggleDrawer={toggleDrawer}/>
      </Drawer>
    </div>
  )
}

export default DrawerMenu
