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
        <div className="flex md:flex-row flex-col w-[100%] h-800px  md:h-[400px] gap-5 md:gap-1 mb-3">
          <iframe
            src="https://maps.app.goo.gl/ZHv2ZtbHLGW9GuU38"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="flex w-[100%] h-[40%] md:w-[50%] md:h-[100%]  aspect-video md:aspect-auto"
          ></iframe>
          
        </div>
        <div className="flex flex-col gap-4">
          <p>Tashkent, Узбекистан</p>
          <div className="flex sm:gap-4 gap-2">
            <a href="tel:998998555270">
              <Button
                className="bg-transparent text-blue-600 capitalize text-[14px] border-gray-300   p-3 px-5  rounded-[5px] flex items-center justify-center gap-3 font-medium hover:text-blue-900 border-[2px] shadow-none hover:shadow-none hover:bg-[#f5fafd] active:border-blue-900"
                type="button"
              >
                <MdLocalPhone className="text-lg" />
                <span className="hidden md:inline-block">Позвонить: +998(99)855 52 70</span>
                <span className="inline-block md:hidden">Позвонить</span>
              </Button>
            </a>
            <a href="https://www.google.com/maps/place/41%C2%B018'07.0%22N+69%C2%B018'22.6%22E/@41.301952,69.306275,16z/data=!4m4!3m3!8m2!3d41.301952!4d69.306275?entry=ttu&g_ep=EgoyMDI1MDQyMS4wIKXMDSoASAFQAw%3D%3D">
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
