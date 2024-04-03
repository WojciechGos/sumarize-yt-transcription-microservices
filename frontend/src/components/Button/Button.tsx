import React, { FC } from "react"

interface IButtonProps {
  children?: JSX.Element
  title?: string
  handler: () => void
}

const Button: FC<IButtonProps> = ({children, title, handler }) => {
  return (
    <button
      type="submit"
      className="group relative max-w-[100px] flex justify-center
                    py-2 px-4 border border-transparent text-sm font-medium
                    rounded-md text-white bg-indigo-800 hover:bg-indigo-600
                   ml-1"
      onClick={() => handler()}
    >
      {title}
      {children}
    </button>
  )
}

export default Button
