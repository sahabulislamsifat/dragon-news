import React from "react";
import SocialLogin from "./SocialLogin";
import FindUs from "./FindUs";

const RightNavbar = () => {
  return (
    <div className="space-x-4">
      <SocialLogin></SocialLogin>
      <FindUs></FindUs>
    </div>
  );
};

export default RightNavbar;
