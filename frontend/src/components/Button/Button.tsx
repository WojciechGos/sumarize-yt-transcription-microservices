import classNames from "classnames";
import React, { FC } from "react";

export enum ButtonType {
  DEFAULT,
  WHITE,
  LEFT_WHITE,
}

interface IButtonProps {
  children?: JSX.Element;
  title?: string;
  buttonType?: ButtonType;
  handler: () => void;
}

const Button: FC<IButtonProps> = ({ children, title, handler, buttonType=ButtonType.DEFAULT }) => {
  const btnClass = classNames(
    "group relative  w-full",
    "py-2 px-4 text-sm flex",
    "font-medium rounded-md  ml-1",
    {
      "justify-center text-white  border border-transparent bg-indigo-800 hover:bg-indigo-600": ButtonType.DEFAULT == buttonType,
      "justify-center text-dark hover:bg-neutral-100 ": ButtonType.WHITE == buttonType,
      "justify-left text-dark bg-neutral-50 hover:bg-neutral-100 overflow-hidden whitespace-nowrap truncate ": ButtonType.LEFT_WHITE == buttonType,
    }
  );

  return (
    <button type="submit" className={btnClass} onClick={() => handler()}>
      {title}
      {children}
    </button>
  );
};

export default Button;
