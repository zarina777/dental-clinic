import React from "react";
import Container from "../../../components/Container";
import Heading from "../../../components/Section-Heading";
import { MdInsertPhoto } from "react-icons/md";

const Photographs = () => {
  return (
    <section id="photographs">
      <Container>
        <Heading>
          <MdInsertPhoto className="md:text-[20px]" />
          <span className="text-4">Фотографии</span>
        </Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-3">
          <div>
            <img
              src="./images/image1.jpg"
              alt=""
              className="w-full h-48 object-cover rounded-sm"
            />
          </div>
          <div>
            <img
              src="./images/image2.jpg"
              alt=""
              className="w-full h-48 object-cover rounded-sm"
            />
          </div>
          <div>
            <img
              src="./images/image3.jpg"
              alt=""
              className="w-full h-48 object-cover rounded-sm"
            />
          </div>
          <div>
            <img
              src="./images/image4.jpg"
              alt=""
              className="w-full h-48 object-cover rounded-sm"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Photographs;
