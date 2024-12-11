import Image from "next/image";
import { twMerge } from "tailwind-merge";

const Button = ({
  txt = "Click Me",
  link,
  classname,
  onClick
}) => {
  return (
    <>
      <a
        href={link}
        className={twMerge(`rounded-3xl text-center min-w-[100px] ${classname}`)}
        onClick={() => onClick?.()}
      >{txt}</a>
    </>
  );
};

export default Button;