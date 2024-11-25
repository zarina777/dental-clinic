import React from "react";
import Container from "../../../components/Container";
import Heading from "../../../components/Section-Heading";
import { BsFileEarmarkTextFill } from "react-icons/bs";
import { MdLocalPhone } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { MdDirections } from "react-icons/md";
import { IoMdTime } from "react-icons/io";

const GenInfo = () => {
  return (
    <div className="w-100 mt-[160px] relative z-100 p-6">
      <Container>
        <Heading>
          <BsFileEarmarkTextFill className="text-4" />
          <span className="text-4">Общая информация</span>
        </Heading>
        <p className="text-3 pb-5 text-gray-800 border-b-[1.5px] border-b-gray-300">
          Консультация, диагностика и лечение. Высококвалифицированные
          специалисты. Быстрая запись на прием. Без длительных очередей.
          Позвоните нам сейчас.
        </p>
        <ul className="flex flex-col  p-5 w-[100%]">
          <li className="flex pb-3 items-center gap-7 w-[100%]">
            <MdLocalPhone className="text-[28px] font-bold text-blue-600" />
            <div className=" w-[100%] border-b border-b-gray-300 py-3">
              <a className=" text-lg text-gray-700" href="tel:998998555270">
                Как с нами связаться
              </a>
            </div>
          </li>
          <li className="flex pb-3 items-center gap-7 w-[100%]">
            <MdMessage className="text-[28px] font-bold text-blue-600" />
            <div className=" w-[100%] border-b border-b-gray-300 py-3">
              <a className=" text-lg text-gray-700" href="tel:998998555270">
                998 99 855 52 70
              </a>
            </div>
          </li>
          <li className="flex pb-3 items-center gap-7 w-[100%]">
            <MdDirections className="text-[28px] font-bold text-blue-600" />
            <div className=" w-[100%] border-b border-b-gray-300 py-3">
              <a className=" text-lg text-gray-700" href="tel:998998555270">
                Маршрут
              </a>
            </div>
          </li>
          <li className="flex pb-3 items-center gap-7 w-[100%]">
            <IoMdTime className="text-[28px] font-bold text-blue-600" />
            <div className=" w-[100%] border-b border-b-gray-300 py-3">
              <a className=" text-lg text-gray-700" href="tel:998998555270">
                Сейчас открыты
              </a>
            </div>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default GenInfo;
