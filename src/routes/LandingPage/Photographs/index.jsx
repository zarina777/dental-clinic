// export default Photographs;
import React, { useEffect } from "react";
import Container from "../../../components/Container";
import Heading from "../../../components/Section-Heading";
import { MdInsertPhoto } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Photographs = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="photographs">
      <Container>
        <Heading>
          <MdInsertPhoto className="md:text-[20px]" />
          <span className="text-4">Фотографии</span>
        </Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-3">
          <div data-aos="zoom-in">
            <img
              src="./images/image1.jpg"
              alt=""
              className="w-full h-48 object-cover rounded-sm"
            />
          </div>
          <div data-aos="zoom-in">
            <img
              src="./images/image2.jpg"
              alt=""
              className="w-full h-48 object-cover rounded-sm"
            />
          </div>
          <div data-aos="zoom-in">
            <img
              src="./images/image3.jpg"
              alt=""
              className="w-full h-48 object-cover rounded-sm"
            />
          </div>
          <div data-aos="zoom-in">
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
