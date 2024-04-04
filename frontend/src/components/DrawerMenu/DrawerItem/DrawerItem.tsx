import React, { FC } from "react"
import Button from "../../Button/Button"

export type DrawerItemType = {
  title: string
}

interface IDrawerItemProps {
  item: DrawerItemType
}

const DrawerItem: FC<IDrawerItemProps> = ({ item }) => {
  return (
    <div>
      <Button title={item.title} handler={()=>{}} />
      {/* <p>{item.title}</p> */}
    </div>
  )
}

export default DrawerItem
