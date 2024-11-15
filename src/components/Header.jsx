import React from "react";
import logo from "../assets/logo.png";
import moment from "moment";
const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center py-4 gap-2">
      <div className="logo">
        <img className="w-[300px]" src={logo} alt="logo" />
      </div>
      <p className="text-gray-400">Journalism Without Fear or Favour</p>
      <p>{moment().format("dddd, MMMM Do YYYY")}</p>
    </div>
  );
};

export default Header;
