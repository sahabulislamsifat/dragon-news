import React from "react";
import { Link } from "react-router-dom";
import useIcon from "../assets/user.png";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-2 my-5">
      <div></div>
      <div className="space-x-5">
        <Link>Home</Link>
        <Link>Career</Link>
        <Link>About</Link>
      </div>
      <div className="flex gap-2 items-center">
        <div>
          <img src={useIcon} alt="" />
        </div>
        <button className="btn btn-neutral rounded-none ">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
