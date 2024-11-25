import { MdVerifiedUser } from "react-icons/md";
import { LiaStarSolid } from "react-icons/lia";
import { ImStarHalf } from "react-icons/im";
import { LuDot } from "react-icons/lu";
import { MdLocalPhone } from "react-icons/md";
import { Button } from "@material-tailwind/react";
import { FaDirections } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import Container from "../Container";

const Info = () => {
  return (
    <Container className="bg-red relative">
      <div className="p-10 bg-white absolute z-50 w-100 px-9 mx-auto -translate-y-[50%] shadow-gray-400 shadow-md ">
        <div className="text-blue-600 flex items-center gap-1 mb-1">
          <MdVerifiedUser />
          <span className="text-sm">Подтверждено</span>
        </div>
        <h1 className="text-[24px] mb-2 font-medium">
          Стоматология 24/7 - лечение, отбеливание, чистка, протезирование и
          удаление зубов безболезненно
        </h1>
        <ul className="flex gap-2 items-center content-center mb-4">
          <li>Стоматологическая Клиника (Tashkent)</li>
          <li>
            <LuDot />
          </li>
          <li className="text-green-700 font-semibold">Сейчас открыты</li>
          <li>
            <LuDot />
          </li>
          <li className="flex gap-2 items-center">
            <span>4.6</span>
            <ul className="flex gap-1 items-center">
              <li className="text-yellow-800 ">
                <LiaStarSolid className="text-xl" />
              </li>
              <li className="text-yellow-800 ">
                <LiaStarSolid className="text-xl" />
              </li>
              <li className="text-yellow-800 ">
                <LiaStarSolid className="text-xl" />
              </li>
              <li className="text-yellow-800 ">
                <LiaStarSolid className="text-xl" />
              </li>
              <li className="text-yellow-800 ">
                <ImStarHalf className="text-xl" />
              </li>
            </ul>
            <span>(20)</span>
          </li>
        </ul>
        <div className="flex items-center justify-between">
          <a href="tel:998998555270">
            <Button
              className="bg-blue-600 capitalize text-[14px] text-white  p-3 px-5  rounded-[30px] flex items-center justify-center gap-3 hover:bg-blue-800 border-e-2  "
              type="button"
            >
              <MdLocalPhone className="text-lg" />
              <span>Позвонить: +998(99)855 52 70</span>
            </Button>
          </a>
          <div className="flex items-center gap-2 ">
            <a href="tel:998998555270">
              <Button
                className="bg-transparent text-blue-600 capitalize text-[14px]   p-3 px-5  rounded-[30px] flex items-center justify-center gap-3 font-medium hover:text-blue-800 border-[2px] shadow-none hover:shadow-none hover:bg-[#f5fafd] active:border-blue-900"
                type="button"
              >
                <FaDirections className=" text-lg" />
                <span>Маршрут</span>
              </Button>
            </a>
            <a href="tel:998998555270">
              <Button
                className="bg-transparent text-blue-600 capitalize text-[14px]  p-3 px-5  rounded-[30px] flex items-center justify-center gap-3 font-medium hover:text-blue-800 border-[2px] shadow-none hover:shadow-none hover:bg-[#f5fafd] active:border-blue-900"
                type="button"
              >
                <MdMessage className=" text-lg" />
                <span>Как с нами связаться</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Info;
