import React from "react";
import { Link } from "react-router-dom";
import "../../src/index.scss";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <div>
      <div className="flex justify-between px-[54px] items-center bg-teal-100 mb-[30px]">
        {/* <h1>Dev-talk</h1> */}
        <img className="h-[70px] w-max-content font-bold" src={logo} />
        <div className="flex gap-4">
          <Link className="link" to="/?art">
            <h3>Art</h3>
          </Link>
          <Link className="link" to="/?art">
            <h3>Science</h3>
          </Link>
          <Link className="link" to="/?art">
            <h3>Technology</h3>
          </Link>
          <Link className="link" to="/?art">
            <h3>Cinema</h3>
          </Link>
          <Link className="link" to="/?art">
            <h3>Design</h3>
          </Link>
          <Link className="link" to="/?art">
            <h3>Food</h3>
          </Link>
          <Link className="link" to="/new">
            <h3>Write</h3>
          </Link>
          <Link className="link" to="/register">
            <h3>Join</h3>
          </Link>
          <Link className="link" to="/login">
            <h3>Logout</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
