import React, { useState, useRef, useEffect } from "react";
import { HiDotsVertical } from "react-icons/hi";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown Toggle */}
      <button
        onClick={toggleDropdown}
        className={`p-1 sm:p-2 rounded-full hover:bg-gray-100 focus:outline-none ${
          isOpen ? "bg-gray-100" : ""
        }`}
        aria-expanded={isOpen}
      >
        <HiDotsVertical className="text-gray-700" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-30 rounded-lg overflow-hidden divide-gray-100 bg-white shadow-sm border dark:bg-gray-700">
          <ul>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-1 text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
              >
                Пожаловаться
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
