import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Carousel from "../../Carousel";

import Info from "../../Info";

const Navbar = () => {
  return (
    <>
      <Carousel />
      <Info />
      <ToastContainer
        className="z-[100] text-sm sm:text-base p-6 sm:p-0"
        position="bottom-right"
        autoClose={5000}
        closeOnClick
        pauseOnHover
      />
    </>
  );
};

export default Navbar;
