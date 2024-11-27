import { useRef, useState, useEffect } from "react";
import { MdVerifiedUser } from "react-icons/md";
import { LiaStarSolid } from "react-icons/lia";
import { ImStarHalf } from "react-icons/im";
import { LuDot } from "react-icons/lu";
import { MdLocalPhone } from "react-icons/md";
import { Button } from "@material-tailwind/react";
import { FaDirections } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { useModalStore } from "../../store/context";
import "./style.css";
import Sticky from "./Sticky";
import ScrollSpyStickyNavbar from "./Srollspy";

const Info = () => {
  const { openModal } = useModalStore();
  const [isTargetVisible, setIsTargetVisible] = useState(true); // Track target visibility
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsTargetVisible(entry.isIntersecting); // Update visibility
      },
      {
        root: null, // Observe viewport
        threshold: 0, // Trigger when any part is visible
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="md:px-2">
        {/* Main info */}
        <div className="relative border-b-0  w-[100%] max-w-[955px] m-auto md:p-6">
          <div
            ref={targetRef}
            className="sm:p-10 p-5 bg-white md:absolute z-50 w-[100%] md:left-0 md:right-0   md:-translate-y-[50%] shadow-gray-300 shadow-md "
          >
            <div className="text-blue-600 flex items-center gap-1 mb-1">
              <MdVerifiedUser />
              <span className="text-sm">Подтверждено</span>
            </div>
            <h1 className="text-[20px] mb-1 md:mb-2 leading-tight sm:leading-normal    font-medium">
              Стоматология 24/7 - лечение, отбеливание, чистка, протезирование и
              удаление зубов безболезненно
            </h1>

            <ul className="flex gap-2 items-center content-center mb-4 flex-wrap md:flex-nowrap">
              <li>Стоматологическая Клиника (Tashkent)</li>
              <li>
                <LuDot />
              </li>
              <li className="text-green-700 font-semibold text-sm">
                Сейчас открыты
              </li>
              <li>
                <LuDot />
              </li>
              <li className="flex gap-2 items-center">
                <span>4.6</span>
                {/* Stars */}
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
              <a href="tel:+998998555270">
                <Button
                  className="bg-blue-600 capitalize text-[14px] text-white  p-3 px-5  rounded-[30px] flex items-center justify-center gap-3 hover:bg-blue-800 border-e-2  "
                  type="button"
                >
                  <MdLocalPhone className="text-lg" />
                  <span className="hidden md:inline-block">
                    Позвонить: +998(99)855 52 70
                  </span>
                  <span className="inline-block md:hidden">Позвонить</span>
                </Button>
              </a>
              <div className="flex items-center gap-2 ">
                <a
                  className="hidden md:inline-block"
                  href="https://www.google.com/maps/dir//41.273057,69.202451/@41.2730099,69.2045354,16.37z?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D"
                >
                  <Button
                    className="bg-transparent text-blue-600 capitalize text-[14px]   p-3 px-5  rounded-[30px] flex items-center justify-center gap-3 font-medium hover:text-blue-800 border-[2px] shadow-none hover:shadow-none hover:bg-[#f5fafd] active:border-blue-900 active:bg-blue-200 "
                    type="button"
                  >
                    <FaDirections className=" text-lg" />
                    <span>Маршрут</span>
                  </Button>
                </a>
                <>
                  <Button
                    className="cursor-pointer bg-transparent text-blue-600 capitalize text-[14px]  p-3 md:px-5   rounded-[30px] flex items-center gap-3 font-medium hover:text-blue-800 border-[2px] shadow-none hover:shadow-none hover:bg-[#f5fafd] active:bg-blue-200 active:border-blue-900"
                    type="button"
                    onClick={openModal}
                  >
                    <MdMessage className=" text-lg" />
                    <span className="hidden md:inline-block">
                      Как с нами связаться
                    </span>
                  </Button>
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollSpyStickyNavbar
        className={!isTargetVisible ? " stickyNavbar " : "hidden"}
      />
      <Sticky className={!isTargetVisible ? "fixed" : "hidden"} />
    </>
  );
};

export default Info;
