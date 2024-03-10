import React, { FC } from 'react'

interface IButtonProps {
  title: string,
  handler: () => void,
}

const Button: FC<IButtonProps> = ({ title, handler }) => {
  return (
    <div className=' text-neutral-200 ml-5'
      onClick={() => handler()}>
      {title}
    </div>
  )
}

export default Button
