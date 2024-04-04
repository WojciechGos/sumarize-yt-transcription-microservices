import React, { FC } from "react"
import DrawerItem from "./DrawerItem"
import AddItem from "./AddItem"
import { DrawerItemType } from "./DrawerItem"

interface IDrawerItemWrapperProps {
  items: DrawerItemType[]
}

const DrawerItemWrapper: FC<IDrawerItemWrapperProps> = ({ items }) => {
  return (
    <div style={{ width: 300 }}>
      <AddItem />
      <div>
        {items.map((item) => (
          <DrawerItem item={item} />
        ))}
      </div>
    </div>
  )
}

export default DrawerItemWrapper
