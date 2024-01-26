import React from "react";
import Plus from "../assets/plus_.png";
import { useState } from "react";
import Form from "./Form";

const Task = () => {
  const [isFormVisible, setisFormVible] = useState(false);
  const handleButtonClick = () => {
    setisFormVible(!isFormVisible);
  };
  return (
    <div className="justify-between max-w-3xl mt-7 my-3  m-auto content center">
      <div className="flex justify-between p-5">
        <h1 className="font-bold text-4xl text-black">Task</h1>

        <button
          type="button"
          onClick={handleButtonClick}
          className="bg-green-500 flex  w-32 h-8 items-center p-2"
        >
          <img src={Plus} alt="icon" className="h-5  w-5" />
          Add Text
        </button>
        {isFormVisible && <Form />}
      </div>
    </div>
  );
};

export default Task;
