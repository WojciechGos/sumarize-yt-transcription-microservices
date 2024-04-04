import React, { useState } from 'react'
import DrawerItemWrapper from './DrawerItemWrapper'
import { DrawerItemType } from './DrawerItem'


const DrawerItemContainer = () => {
  
  const [items, setItems] = useState<DrawerItemType[]>([
    { title: "Item 1" },
    { title: "Item 2" },
    { title: "Item 3" },
  ])
  
  return (
    <DrawerItemWrapper items={items}/>
  )
}

export default DrawerItemContainer
