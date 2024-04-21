import React, { useEffect, useState, FC } from "react";
import DrawerItemWrapper from "./DrawerItemWrapper";
import { DrawerItemType } from "./DrawerItem";
import axiosInstance from "../../../service/axiosConfig";
import { History } from "../../../interfaces/History";

interface IDrawerItemContainerProps {
  toggleDrawer: () => void;
}

const DrawerItemContainer: FC<IDrawerItemContainerProps> = ({toggleDrawer}) => {
  const [items, setItems] = useState<DrawerItemType[]>([]);

  const getHistories = async () => {
    try {
      const response = await axiosInstance.get("/api/v1/histories");
      const data: History[] = response.data;
      const items: DrawerItemType[] = [];
      data.forEach((history) => {
        items.push({ id: history.id, title: history.date });
      });
      setItems(items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHistories();
  }, []);

  return <DrawerItemWrapper items={items} toggleDrawer={toggleDrawer} />;
};

export default DrawerItemContainer;
