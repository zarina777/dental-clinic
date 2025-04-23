import React from "react";
import Container from "../../../components/Container";
import Heading from "../../../components/Section-Heading";
import { BsFileEarmarkTextFill } from "react-icons/bs";
import { MdLocalPhone } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { MdDirections } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import { useModalStore } from "../../../store/context";

const GenInfo = () => {
  const [dropdown, openDropdown] = useState(false);
  const { openModal } = useModalStore();
  return (
    <section
      id="general"
      className="w-100 mt-10px sm:mt-10px md:mt-[150px]  relative z-100 "
    >
      <Container>
        <Heading>
          <BsFileEarmarkTextFill className="md:text-[20px]" />
          <span className="text-4">Общая информация</span>
        </Heading>
        <p className="sm:text-3 text-2 pb-5 text-gray-800 border-b-[1.5px] border-b-gray-400">
          Консультация, диагностика и лечение. Высококвалифицированные
          специалисты. Быстрая запись на прием. Без длительных очередей.
          Позвоните нам сейчас.
        </p>
        <ul className="flex flex-col  pt-5 pb-0 w-[100%]">
          <a className=" " href="tel:+998998555270">
            <li className="flex pb-3 items-center gap-7 w-[100%]">
              <MdLocalPhone className="text-[28px] font-bold text-blue-600" />
              <div className="text-lg text-gray-700 w-[100%] border-b border-b-gray-400 py-3">
                998 99 855 52 70
              </div>
            </li>
          </a>
          <>
            <li
              onClick={openModal}
              className="cursor-pointer flex pb-3 items-center gap-7 w-[100%]"
            >
              <MdMessage className="text-[28px] font-bold text-blue-600" />
              <div className=" text-lg text-gray-700 w-[100%] border-b border-b-gray-400 py-3">
                Как с нами связаться
              </div>
            </li>
          </>
          <a href="https://www.google.com/maps/place/41%C2%B018'07.0%22N+69%C2%B018'22.6%22E/@41.301952,69.306275,16z/data=!4m4!3m3!8m2!3d41.301952!4d69.306275?entry=ttu&g_ep=EgoyMDI1MDQyMS4wIKXMDSoASAFQAw%3D%3D">
            <li className="flex pb-3 items-center gap-7 w-[100%]">
              <MdDirections className="text-[28px] font-bold text-blue-600" />
              <p className=" w-[100%] border-b text-lg text-gray-700 border-b-gray-400 py-3">
                Маршрут
              </p>
            </li>
          </a>
          <li
            onClick={() => openDropdown((prev) => !prev)}
            className={`cursor-pointer flex  gap-7 w-[100%] ${
              dropdown == false ? "items-center" : "items-start"
            }`}
          >
            <IoMdTime className="  text-[28px] font-bold text-blue-600" />
            <div className=" w-[100%]  ">
              <p
                className={`py-3  ${
                  dropdown == false ? "flex" : "hidden"
                } text-lg  items-center gap-3 text-gray-700`}
              >
                <span className="">Сейчас открыты</span>{" "}
                <MdOutlineKeyboardArrowDown className="text-xl" />
              </p>
              <ul
                className={`top-[100%] left-0 bg-white ${
                  dropdown == true ? "flex" : "hidden"
                } flex-col gap-[3px] pt-1 pb-4`}
              >
                <li className="flex text-sm sm:text-sm md:text-lg text-gray-700">
                  <span className="sm:w-[150px] w-[100px]">понедельник</span>{" "}
                  <span>24 часа в сутки</span>
                </li>
                <li className="flex text-sm sm:text-sm md:text-lg text-gray-700">
                  <span className="sm:w-[150px] w-[100px]">вторник</span>{" "}
                  <span>24 часа в сутки</span>
                </li>
                <li className="flex text-sm sm:text-sm md:text-lg text-gray-700">
                  <span className="sm:w-[150px] w-[100px]">среда</span>{" "}
                  <span>24 часа в сутки</span>
                </li>
                <li className="flex text-sm sm:text-sm md:text-lg text-gray-700">
                  <span className="sm:w-[150px] w-[100px]">четверг</span>{" "}
                  <span>24 часа в сутки</span>
                </li>
                <li className="flex text-sm sm:text-sm md:text-lg text-gray-700">
                  <span className="sm:w-[150px] w-[100px]">пятница</span>{" "}
                  <span>24 часа в сутки</span>
                </li>
                <li className="flex text-sm sm:text-sm md:text-lg text-gray-700">
                  <span className="sm:w-[150px] w-[100px]">суббота</span>{" "}
                  <span>24 часа в сутки</span>
                </li>
                <li className="flex text-sm sm:text-sm md:text-lg text-gray-700">
                  <span className="sm:w-[150px] w-[100px]">воскресенье</span>{" "}
                  <span>24 часа в сутки</span>
                </li>
                <li className="flex text-sm sm:text-sm md:text-lg text-gray-700">
                  <span className="sm:w-[150px] w-[100px]">понедельник</span>{" "}
                  <span>24 часа в сутки</span>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default GenInfo;
