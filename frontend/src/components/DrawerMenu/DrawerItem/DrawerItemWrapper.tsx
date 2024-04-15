import React, { FC } from "react"
import DrawerItem from "./DrawerItem"
import AddItem from "./AddItem"
import { DrawerItemType } from "./DrawerItem"

interface IDrawerItemWrapperProps {
  items: DrawerItemType[]
}

const DrawerItemWrapper: FC<IDrawerItemWrapperProps> = ({ items }) => {
  return (
    <div style={{ width: 400 }} 
      className="overflow-hidden flex flex-col items-center "
    >
      <AddItem />
      <div className="w-full">
        {items.map((item) => (
          <DrawerItem item={item} />
        ))}
      </div>
    </div>
  )
}

export default DrawerItemWrapper
