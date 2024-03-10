import React from "react"
import Button from "./Button"

const Navbar = () => {

  const login = () => {

  }

  const register = () => {

  }

  return (
    <nav className="bg-indigo-700 border-zinc-950 border-b p-4 ">
      <div className="flex justify-between  w-[80%]">

        <div>

        </div>
        <div className="flex">
          <Button title='login' handler={login} />
          <Button title='register' handler={register} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
