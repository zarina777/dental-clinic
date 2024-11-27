import React from "react";
import Heading from "../../../../../components/Section-Heading";
import { MdStars } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { LiaStarSolid } from "react-icons/lia";
import { ImStarHalf } from "react-icons/im";
const Rate = () => {
  return (
    <div className="mb-[30px]">
      <Heading>
        <MdStars className="md:text-[20px]" />
        <span className="text-4">Отзывы в Google</span>
      </Heading>
      {/* Rate Part */}
      <div className="flex items-center sm:flex-row flex-col">
        {/* Rates */}
        <ul className="w-[100%]">
          <li className="flex items-center gap-2">
            <span className="font-[500] text-gray-700">5</span>
            <FaStar className="text-gray-500" />
            <div className="bg-yellow-700 w-[80%] sm:w-[60%] h-5 rounded-[3px]"></div>
          </li>
          <li className="flex items-center gap-2">
            <span className="font-[500] text-gray-700">4</span>
            <FaStar className="text-gray-500" />
            <div className="bg-yellow-700 w-[20%] h-[20px] rounded-[3px]"></div>
          </li>
          <li className="flex items-center gap-2">
            <span className="font-[500] text-gray-700">3</span>
            <FaStar className="text-gray-500" />
            <div className="bg-yellow-700 w-[0%] h-[20px] rounded-[3px]"></div>
          </li>
          <li className="flex items-center gap-2">
            <span className="font-[500] text-gray-700">2</span>
            <FaStar className="text-gray-500" />
            <div className="bg-yellow-700 w-[10%] h-[20px] rounded-[3px]"></div>
          </li>
          <li className="flex items-center gap-2">
            <span className="font-[500] text-gray-700">1</span>
            <FaStar className="text-gray-500" />
            <div className="bg-yellow-700 w-[0%] h-[20px] rounded-[3px]"></div>
          </li>
        </ul>
        {/* General Conclusion */}
        <div className="flex flex-col items-center gap-y-2 ">
          <span className="text-[60px] leading-none">4,7</span>
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
          <p className="text-gray-600 font-bold">20 отзывов</p>
        </div>
      </div>
    </div>
  );
};

export default Rate;
