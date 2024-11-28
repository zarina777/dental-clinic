import React from "react";

const Container = ({ className, children }) => {
  return (
    <div
      className={
        "max-w-[955px] w-[100%] m-auto py-16 px-5 sm:p-18 md:p-6 mb-2 md:mb-4 border-b border-b-gray-400 " +
        className
      }
    >
      {children}
    </div>
  );
};

export default Container;
