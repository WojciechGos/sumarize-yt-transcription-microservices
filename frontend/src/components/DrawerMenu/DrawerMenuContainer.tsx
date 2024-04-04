import React, { FC } from "react"
import DrawerMenu from "./DrawerMenu"

interface IDrawerMenuContainerProps {
  open: boolean
  toggleDrawer: ()=> void
}

const DrawerMenuContainer: FC<IDrawerMenuContainerProps> = ({
  open,
  toggleDrawer,
}) => {
  return <DrawerMenu open={open} toggleDrawer={toggleDrawer} />
}

export default DrawerMenuContainer
