import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-bold  mb-3">Login With</h2>
      <div className="*:w-full space-y-4">
        <button className="btn bg-base-300 rounded-none">
          <FaGoogle></FaGoogle> Google
        </button>
        <button className="btn bg-base-300 rounded-none">
          <FaGithub></FaGithub> GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
