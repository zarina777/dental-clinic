const Btn = ({ children }) => {
  return (
    <button className="block text-sm font-semibold text-center text-blue-700 w-[100%] p-4 my-3  hover:bg-[#f2f6ff] hover:text-blue-900 active:bg-blue-50">
      {children}
    </button>
  );
};

export default Btn;
