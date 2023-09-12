import React from "react";
import test from "../assets/test.jpg";

import { BiEdit } from "react-icons/bi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Menu from "./Menu";

const Single = () => {
  return (
    <div>
      <div className="parent">
        <div className="flex flex-row  gap-12 justify-center px-[200px] mt-0">
          <div className="basis-10/12 gap-y-4">
            <img
              src={test}
              className="w-[800px] object-cover h-[400px] rounded-md"
            />

            {/* profile pic and options */}

            <div className="flex  items-center py-[20px] gap-4">
              <img src={test} className="h-[50px] w-[50px] rounded-full" />
              <BiEdit size={20} />
              <RiDeleteBin5Fill size={20} />
            </div>
            {/* post content */}
            <div>
              <h1 className="text-4xl font-bold">
                Lorem ipsum da funda m da punfd\analla perusa irukanu
              </h1>
              <p className="py-[20px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                suscipit eveniet architecto animi dolorum excepturi sunt, totam
                dolore ipsum laboriosam quaerat, at ipsa dolor autem iure, rerum
                reprehenderit consectetur a.
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Impedit hic delectus alias cupiditate placeat perferendis
                veritatis vitae ab unde ratione, soluta quas doloribus explicabo
                voluptate maxime rerum blanditiis doloremque consequatur.
                <br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Inventore laboriosam maxime adipisci sint, optio quisquam saepe
                consequatur nisi eveniet voluptates, distinctio obcaecati enim
                perspiciatis atque a vero eum id nulla! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Deserunt, tempora iste
                reiciendis perferendis quasi unde autem commodi quia dolorem
                enim, suscipit quaerat, optio exercitationem illum. Dolore,
                incidunt! Quasi, adipisci culpa? Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Impedit hic delectus alias
                cupiditate placeat perferendis veritatis vitae ab unde ratione,
                soluta quas doloribus explicabo voluptate maxime rerum
                blanditiis doloremque consequatur.
                <br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Inventore laboriosam maxime adipisci sint, optio quisquam saepe
                consequatur nisi eveniet voluptates, distinctio obcaecati enim
                perspiciatis atque a vero eum id nulla! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Deserunt, tempora iste
                reiciendis perferendis quasi unde autem commodi quia dolorem
                enim, suscipit quaerat, optio exercitationem illum. Dolore,
                incidunt! Quasi, adipisci culpa? Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Impedit hic delectus alias
                cupiditate placeat perferendis veritatis vitae ab unde ratione,
                soluta quas doloribus explicabo voluptate maxime rerum
                blanditiis doloremque consequatur.
                <br />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Inventore laboriosam maxime adipisci sint, optio quisquam saepe
                consequatur nisi eveniet voluptates, distinctio obcaecati enim
                perspiciatis atque a vero eum id nulla! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Deserunt, tempora iste
                reiciendis perferendis quasi unde autem commodi quia dolorem
                enim, suscipit quaerat, optio exercitationem illum. Dolore,
                incidunt! Quasi, adipisci culpa?
              </p>
            </div>
          </div>

          <div className="basis-1/5 mt-0">
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
