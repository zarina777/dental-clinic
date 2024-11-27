import { Button } from "@material-tailwind/react";
import { MdLocalPhone } from "react-icons/md";
import React from "react";

const Sticky = ({ className }) => {
  return (
    <div
      className={`${className} z-50 px-6 top-0  h-16 flex items-center justify-between  bg-white shadow  md:shadow-md left-0 w-[100%]`}
    >
      <p className="text-lg md:inline-block hidden">
        Стоматология 24 часа - лечение и удаление зубов любой сложности
      </p>
      <p className="text-sm md:hidden inline-block">
        Стоматология 24 часа - лечение и удаление...
      </p>
      <a href="tel:998998555270">
        <Button
          className="bg-blue-600 capitalize text-[14px] text-white  p-3 px-5  rounded-[30px] flex items-center justify-center gap-3 hover:bg-blue-800 border-e-2  "
          type="button"
        >
          <MdLocalPhone className="text-lg" />
          <span className="hidden lg:inline-block md:text-sm text-xs ">
            Позвонить: +998(99)855 52 70
          </span>
          <span className="inline-block lg:hidden text-xs">Позвонить</span>
        </Button>
      </a>
    </div>
  );
};

export default Sticky;
