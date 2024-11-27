import { useEffect, useState } from "react";
import StickyNavbar from "./StickyNavbar";

const ScrollSpyStickyNavbar = ({ className }) => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const sections = [
      "general",
      "location",
      "photographs",
      "services",
      "reviews",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setActiveSection(entry.target.id), 100); // Adds a smooth transition delay
          }
        });
      },
      {
        threshold: 0.3,
      }
    );
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <StickyNavbar activeSection={activeSection} className={className} />
    </>
  );
};

export default ScrollSpyStickyNavbar;
