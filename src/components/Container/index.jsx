import React from "react";

const Container = ({ className, children }) => {
  return (
    <div className={"max-w-[955px] w-[100%] m-auto p-6" + className}>
      {children}
    </div>
  );
};

export default Container;
