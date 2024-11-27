import React from "react";
import Landing from "../../routes/LandingPage";
import Modal from "../Modal";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <Footer />
      {/* Modal form */}
      <Modal />
    </>
  );
};

export default Layout;
