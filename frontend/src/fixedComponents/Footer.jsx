import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className=" bg-teal-100 p-2 ">
      <div className="flex justify-between px-[54px] items-center">
        <h1 className="text-2xl">Dev-talk</h1>
        {/* <img className="h-[70px] w-max-content font-bold" src={logo} /> */}
        <div className="flex gap-4">Made with ♥️ by Suresh Hariharan</div>
      </div>
    </div>
  );
};

export default Footer;
