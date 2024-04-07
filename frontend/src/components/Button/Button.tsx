import classNames from "classnames";
import React, { FC } from "react";

export enum EButtonType {
  DEFAULT,
  WHITE,
  LEFT_WHITE,
}

interface IButtonProps {
  children?: JSX.Element;
  title?: string;
  buttonType?: EButtonType;
  handler: () => void;
}

const Button: FC<IButtonProps> = ({ children, title, handler, buttonType=EButtonType.DEFAULT }) => {
  const btnClass = classNames(
    "group relative  w-full",
    "py-2 px-4 text-sm flex",
    "font-medium rounded-md  ml-1",
    {
      "justify-center text-white border border-transparent bg-indigo-800 hover:bg-indigo-600": EButtonType.DEFAULT === buttonType,
      "justify-center text-dark hover:bg-neutral-100 ": EButtonType.WHITE === buttonType,
      "justify-left text-dark bg-neutral-50 hover:bg-neutral-100 overflow-hidden whitespace-nowrap truncate ": EButtonType.LEFT_WHITE === buttonType,
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
