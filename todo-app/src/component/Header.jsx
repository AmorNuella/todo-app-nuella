import React from "react";
import "../component/Header.css";

const Header = () => {
  return (
    <div className=" h-32 items-center content-center   bg-cover w-screen background-img">
      <div className="text-white  text-center text-6xl py-6 font-extrabold m-auto">
        Todo App
      </div>
    </div>
  );
};

export default Header;
