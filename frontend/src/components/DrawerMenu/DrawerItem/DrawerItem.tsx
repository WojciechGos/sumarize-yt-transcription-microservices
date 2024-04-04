import React, { FC } from "react";
import Button from "../../Button/Button";
import { ButtonType } from "../../Button/Button";
import { Link } from "react-router-dom";
import PATH from "../../../path";

export type DrawerItemType = {
  title: string;
};

interface IDrawerItemProps {
  item: DrawerItemType;
}

const DrawerItem: FC<IDrawerItemProps> = ({ item }) => {
  return (
    <div className="mt-3 mb-3">
      <Link to={PATH.SUMMARIZE_PAGE}>
        <Button
          title={item.title}
          buttonType={ButtonType.LEFT_WHITE}
          handler={() => {}}
        />
        {/* <p>{item.title}</p> */}
      </Link>
    </div>
  );
};

export default DrawerItem;
