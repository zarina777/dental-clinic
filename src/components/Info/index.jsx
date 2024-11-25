import { MdVerifiedUser } from "react-icons/md";
import { LiaStarSolid } from "react-icons/lia";
import { ImStarHalf } from "react-icons/im";
import { LuDot } from "react-icons/lu";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Button } from "@material-tailwind/react";

const Info = () => {
  return (
    <div className="w-100 px-10">
      <div className="p-10 bg-white relative z-50 max-w-[900px] px-9 mx-auto -translate-y-[50%] shadow-gray-400 shadow-md ">
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
        <div>
          <a href="tel:998998555270">
            <Button
              className="bg-blue-600 capitalize text-[16px] text-white  p-4 px-5  rounded-[30px] flex items-center justify-center gap-3 hover:bg-blue-800 "
              type="button"
            >
              <BsFillTelephoneFill />
              <span>Позвонить: +998(99)855 52 70</span>
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Info;
