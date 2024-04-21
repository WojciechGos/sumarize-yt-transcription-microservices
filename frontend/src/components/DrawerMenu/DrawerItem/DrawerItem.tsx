import React, { FC } from "react";
import Button from "../../Button/Button";
import { EButtonType } from "../../Button/Button";
import { Link } from "react-router-dom";
import PATH from "../../../path";

export type DrawerItemType = {
  id: number;
  title: string;
};

interface IDrawerItemProps {
  item: DrawerItemType;
  toggleDrawer: () => void;
}

const DrawerItem: FC<IDrawerItemProps> = ({ item, toggleDrawer }) => {
  return (
    <div className="mt-3 mb-3">
      <Link to={`${PATH.SUMMARIZE_PAGE}/${item.id}`}>
        <Button
          title={item.title}
          buttonType={EButtonType.LEFT_WHITE}
          handler={toggleDrawer}
        />
        {/* <p>{item.title}</p> */}
      </Link>
    </div>
  );
};

export default DrawerItem;
