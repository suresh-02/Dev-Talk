import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const NewPost = () => {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <div className="flex flex-row gap-4 justify-center  ">
      <div>
        <input
          type="text"
          className="min-w-[600px] my-2 p-2 rounded-md border border-black"
          placeholder="Enter the text"
        />
        <ReactQuill
          className="h-[250px]"
          theme="snow"
          value={value}
          onChange={setValue}
        />
      </div>
      {/* memu */}
      <div className="flex flex-col gap-y-4">
        {/* box-1 */}
        <div className="h-max-content w-[400px] border border-black flex gap-y-2 flex-col p-2">
          <h1 className=" font-bold">Publish</h1>
          <span className=" font-bold">
            <b>Status:</b>draft
          </span>
          <span className="font-bold">
            <b>Visiblity:</b>Public
          </span>
          <input type="file" id="upload" style={{ display: "none" }} />
          <label
            className="underline underline-offset-1leading-2"
            htmlFor="upload"
          >
            Upload Image
          </label>
          <div className="flex justify-between">
            <button className="border border-teal-700 p-1  ">
              save as draft
            </button>
            <button className="border bg-teal-400  text-white p-1">
              update
            </button>
          </div>
        </div>
        {/* box-2 */}
        <div className="h-max-content w-[400px] border border-black flex  flex-col p-2">
          <h1 className=" font-bold">Category</h1>
          <div>
            <input type="radio" name="cat" value="science" id="science" />
            <label htmlFor="science">Science</label>
          </div>
          <div>
            <input type="radio" name="cat" value="technology" id="science" />
            <label htmlFor="science">Technology</label>
          </div>
          <div>
            <input type="radio" name="cat" value="cinema" id="science" />
            <label htmlFor="science">Cinema</label>
          </div>
          <div>
            <input type="radio" name="cat" value="design" id="science" />
            <label htmlFor="science">Design</label>
          </div>
          <div>
            <input type="radio" name="cat" value="food" id="science" />
            <label htmlFor="science">Food</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
