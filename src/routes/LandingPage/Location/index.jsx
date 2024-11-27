import Heading from "../../../components/Section-Heading";
import { FaLocationDot } from "react-icons/fa6";
import { MdLocalPhone } from "react-icons/md";
import { FaDirections } from "react-icons/fa";
import Container from "../../../components/Container";
import { Button } from "@material-tailwind/react";
const Location = () => {
  return (
    <section id="location">
      <Container>
        <Heading>
          <FaLocationDot className="md:text-[20px]" />
          <span className="text-4">Местоположение</span>
        </Heading>
        <div className="flex md:flex-row flex-col w-[100%] md:h-[400px] gap-5 md:gap-1 mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m8!1m3!1d5997.295045602291!2d69.2045354!3d41.2730099!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d41.273057!2d69.202451!5e0!3m2!1sru!2s!4v1732605125810!5m2!1sru!2s"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="flex w-[100%] h-[50%] md:w-[50%] md:h-[100%]  aspect-video md:aspect-auto"
          ></iframe>
          <video
            controls
            src="./location.mp4"
            className="flex w-[100%] h-[50%] md:w-[50%] md:h-[100%]  border border-blue-gray-100 aspect-video md:aspect-auto"
          />
        </div>
        <div className="flex flex-col gap-4">
          <p>Юнусобод тумани, 700002, Tashkent, Toshkent, Узбекистан</p>
          <div className="flex sm:gap-4 gap-2">
            <a href="tel:998998555270">
              <Button
                className="bg-transparent text-blue-600 capitalize text-[14px] border-gray-300   p-3 px-5  rounded-[5px] flex items-center justify-center gap-3 font-medium hover:text-blue-900 border-[2px] shadow-none hover:shadow-none hover:bg-[#f5fafd] active:border-blue-900"
                type="button"
              >
                <MdLocalPhone className="text-lg" />
                <span className="hidden md:inline-block">
                  Позвонить: +998(99)855 52 70
                </span>
                <span className="inline-block md:hidden">Позвонить</span>
              </Button>
            </a>
            <a href="https://www.google.com/maps/dir//41.273057,69.202451/@41.2730099,69.2045354,16.37z?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D">
              <Button
                className="bg-transparent text-blue-600 capitalize text-[14px]   p-3 px-5  rounded-[5px] flex items-center justify-center gap-3 font-medium hover:text-blue-900 border-[2px] border-gray-300 shadow-none hover:shadow-none hover:bg-[#f5fafd] active:border-blue-900"
                type="button"
              >
                <FaDirections className=" text-lg" />
                <span>Маршрут</span>
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Location;
