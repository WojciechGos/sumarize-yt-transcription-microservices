import React, { FC } from "react"
import Button from "../Button/Button"
import { MenuOutlined } from "@ant-design/icons"
import { FiHelpCircle } from "react-icons/fi"
import { Link } from "react-router-dom"
import PATH from "../../path"
import DrawerMenuContainer from "../DrawerMenu/DrawerMenuContainer"

interface INavbarProps {
  login: () => void
  register: () => void
  toggleDrawer: () => void
  open: boolean
}

const Navbar: FC<INavbarProps> = ({ login, register, toggleDrawer, open }) => {
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
                handler={toggleDrawer}
              />
            </Link>
            <Button title="login" handler={login} />
            <Button title="register" handler={register} />
          </div>
        </div>
      </nav>
      <DrawerMenuContainer open={open} toggleDrawer={toggleDrawer} />
    </>
  )
}

export default Navbar
