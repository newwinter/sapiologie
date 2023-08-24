import { useState } from "react";
// import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import logo from "../assets/logo.png";

const SideBar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div>
      {showSidebar ? (
        <button
          className="flex text-4xl text-gray-500 items-center cursor-pointer fixed left-10 top-6 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        // <button className=" bg-blue" onClick={() => setShowSidebar(!showSidebar)}>
        //   <MdKeyboardDoubleArrowRight />
        // </button>
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed  z-30 flex items-center cursor-pointer left-10 top-6"
          fill="#2563EB"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}

      <div
        className={`top-0 right-0 w-[30vw] bg-white  p-10 text-gray-500 fixed h-full z-40 ease-in-out duration-300 border-x-2 ${
          showSidebar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-around">
          <img src={logo} alt="logo sapiologie" className="w-6" />
          <h2>Sapiologie</h2>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
