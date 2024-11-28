import React from "react";
import Container from "../../../components/Container";
import Heading from "../../../components/Section-Heading";
import { FaListCheck } from "react-icons/fa6";

const ServicePart = () => {
  return (
    <section id="services">
      <Container>
        <Heading>
          <FaListCheck className="md:text-[20px]" />
          <span className="text-4">Услуги</span>
        </Heading>
        <ul className="grid sm:grid-cols-2 gap-x-7 gap-y-2 mb-3 ">
          <li className="text-blue-gray-800 w-50 font-[400] text-[15px] sm:text-[16px] md:p-4 p-2 border-b border-gray-400">
            Чистка зубов
          </li>
          <li className="text-blue-gray-800 w-50 font-[400] text-[15px] sm:text-[16px] md:p-4 p-2 border-b border-gray-400">
            Имплантация зубов
          </li>
          <li className="text-blue-gray-800 w-50 font-[400] text-[15px] sm:text-[16px] md:p-4 p-2 border-b border-gray-400">
            Протезирование зубов
          </li>
          <li className="text-blue-gray-800 w-50 font-[400] text-[15px] sm:text-[16px] md:p-4 p-2 border-b border-gray-400">
            Удаление зубов любой сложности
          </li>
          <li className="text-blue-gray-800 w-50 font-[400] text-[15px] sm:text-[16px] md:p-4 p-2 border-b border-gray-400">
            Отбеливание зубов (zoom)
          </li>
          <li className="text-blue-gray-800 w-50 font-[400] text-[15px] sm:text-[16px] md:p-4 p-2 border-b border-gray-400">
            Элайнеры
          </li>
          <li className="text-blue-gray-800 w-50 font-[400] text-[15px] sm:text-[16px] md:p-4 p-2 border-b border-gray-400">
            Съемные и несъмные протезы
          </li>
          <li className="text-blue-gray-800 w-50 font-[400] text-[15px] sm:text-[16px] md:p-4 p-2 border-b border-gray-400">
            Брекеты
          </li>
          <li className="text-blue-gray-800 w-50 font-[400] text-[15px] sm:text-[16px] md:p-4 p-2 border-b border-gray-400 sm:border-0">
            Художественная реставрация
          </li>
          <li className="text-blue-gray-800 w-50 font-[400] text-[15px] sm:text-[16px] md:p-4 p-2 ">
            Лечение зубов любой сложности
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default ServicePart;
