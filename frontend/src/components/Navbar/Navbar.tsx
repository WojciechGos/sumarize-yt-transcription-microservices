import React, { FC } from "react";
import Button from "../Button/Button";
import { MenuOutlined } from "@ant-design/icons";
import { FiHelpCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import PATH from "../../path";
import DrawerMenuContainer from "../DrawerMenu/DrawerMenuContainer";

interface INavbarProps {
  toggleDrawer: () => void;
  open: boolean;
  isLogged: boolean;
  logOut: () => void;
}

const Navbar: FC<INavbarProps> = ({ toggleDrawer, open, isLogged, logOut }) => {

  const authSection = (
    <>
      <Link to={PATH.SIGN_IN_PAGE}>
        <Button title="Sign in" handler={() => {}} />
      </Link>
      {/* <Link to={PATH.SIGN_UP_PAGE}>
        <Button title="sign up" handler={() => {}} />
      </Link> */}
    </>
  );

  const logoutSection = (
    <>
      <Button title="Sign out" handler={logOut} />
    </>
  )

  const section = isLogged ? logoutSection : authSection;

  return (
    <>
      <nav className="containter bg-indigo-800 border-zinc-950 border-b p-2 ">
        <div className="flex justify-between">
          <div>
            <Button
              children={<MenuOutlined style={{ fontSize: "20px" }} />}
              handler={toggleDrawer}
            />
          </div>
          <div className="flex">
            <Link to={PATH.HELP_PAGE}>
              <Button
                children={<FiHelpCircle style={{ fontSize: "20px" }} />}
                handler={() => {}}
              />
            </Link>
            {section}
          </div>
        </div>
      </nav>
      <DrawerMenuContainer open={open} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Navbar;
