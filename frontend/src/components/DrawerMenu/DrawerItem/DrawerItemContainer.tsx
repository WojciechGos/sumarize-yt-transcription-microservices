import React, { useEffect, useState } from 'react'
import DrawerItemWrapper from './DrawerItemWrapper'
import { DrawerItemType } from './DrawerItem'
import axiosInstance from '../../../service/axiosConfig'


const DrawerItemContainer = () => {
  const [items, setItems] = useState<DrawerItemType[]>([
    { title: "Item 1 mm mmmmmmmmm mmmmmmm mmmmmm mmmmmmmmm" },
    { title: "Item 2" },
    { title: "Item 3" },
  ])
  
  useEffect(() => {
    axiosInstance.get('/api/v1/histories').then((response) => {
      const data = response.data
      console.log(data)
      // setItems(data)
    })
  },[])


  return (
    <DrawerItemWrapper items={items}/>
  )
}

export default DrawerItemContainer
