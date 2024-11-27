import React from "react";
import Comments from "./Comments";
import GenInfo from "./GenInfo";
import Location from "./Location";
import Photographs from "./Photographs";
import ServicePart from "./ServicePart";

const Landing = () => {
  return (
    <>
      <GenInfo />
      <Location />
      <Photographs />
      <ServicePart />
      <Comments />
    </>
  );
};

export default Landing;
