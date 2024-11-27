import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col gap-4 items-center p-4 pb-10">
      <a
        href="#"
        className="underline decoration-solid text-gray-600 text-sm font-medium"
      >
        Сообщить о нарушении
      </a>
      <p className="text-gray-600 text-sm font-medium text-center">
        Владелец компании оплатил размещение этих данных в Google.
      </p>
    </div>
  );
};

export default Footer;
