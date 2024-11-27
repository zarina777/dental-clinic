const StickyNavbar = ({ className, activeSection }) => {
  const sections = [
    { id: "general", label: "Общая информация" },
    { id: "location", label: "Местоположение" },
    { id: "photographs", label: "Фотографии" },
    { id: "services", label: "Услуги" },
    { id: "reviews", label: "Отзывы" },
  ];

  const handleClick = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className={`top-16 left-0 w-full z-50 bg-white shadow-md ${className}`}
    >
      <div className="w-full flex justify-center bg-white">
        <nav className="max-w-[955px] px-2 flex bg-white w-full overflow-x-auto border-b transition-all duration-300 ease-in-out scrollbar-hide">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleClick(section.id)}
              className={`w-full px-6 py-3 whitespace-nowrap text-xs sm:text-sm font-medium transition-colors duration-300 ${
                activeSection === section.id
                  ? "text-blue-600 border-b-[3px] md:border-b-4 border-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {section.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default StickyNavbar;
