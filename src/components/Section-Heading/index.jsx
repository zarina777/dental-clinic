import React from "react";

const Heading = ({ children }) => {
  return (
    <div className="flex items-center gap-2 uppercase font-semibold text-gray-600 mb-4 text-5">
      {children}
    </div>
  );
};

export default Heading;
