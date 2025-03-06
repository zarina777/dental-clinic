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
  const images = [
    { id: 1, src: "./images/image1.jpg" },
    // { id: 2, src: "./images/image2.jpg" },
    // { id: 3, src: "./images/image3.jpg" },
    { id: 4, src: "./images/image4.jpg" },
    { id: 5, src: "./images/image5.png" },
    { id: 6, src: "./images/image6.jpg" },
    { id: 7, src: "./images/image7.jpg" },
    { id: 8, src: "./images/image8.jpeg" },
    { id: 9, src: "./images/image9.jpg" },
    { id: 10, src: "./images/location.jpg" },
  ];
  return (
    <section id="photographs">
      <Container>
        <Heading>
          <MdInsertPhoto className="md:text-[20px]" />
          <span className="text-4">Фотографии</span>
        </Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-3">
          {images.map((image) => (
            <div key={image.id} data-aos="zoom-in">
              <img src={image.src} alt="" className="w-full h-48 object-cover rounded-sm" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Photographs;
