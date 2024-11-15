import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold mt-3">Find Us On</h2>
      <div className="join join-vertical flex *:bg-base-100">
        <button className="btn join-item justify-start">
          <FaFacebook></FaFacebook> Facebook
        </button>

        <button className="btn join-item justify-start">
          <FaInstagram></FaInstagram> Instagram
        </button>
        <button className="btn justify-start join-item">
          <FaTwitter></FaTwitter> Twitter
        </button>
      </div>
    </div>
  );
};

export default FindUs;
