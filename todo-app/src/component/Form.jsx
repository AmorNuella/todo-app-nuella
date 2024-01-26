import React from "react";

const Form = () => {
  return (
    <form className="w-50  justify-between  items-center max-w-3xl m-auto">
      <div className="m-auto p-3  justify-center">
        <h1 className="font-bold text-xl m-auto"> Task Details</h1>
        <div className="flex mt-6 ">
          <div className="flex-col ">
            <label for="tittle" className="text-xl py-2 my-2">
              Tittle
            </label>
            <br />
            <input
              type="text"
              id="tittle"
              placeholder="tittle of your project"
              className="border border-gray-300 p-3"
            />
          </div>
          <div className=" flex-col mx-6">
            <label for="priority" className="text-xl py-2 my-2">
              Priority
            </label>
            <br />
            <input
              type="text"
              id="priority"
              className="border border-gray-300 p-3"
              placeholder="your priority"
            />
          </div>
        </div>
        <div className=" flex mt-6">
          <div className="p-2">
            <label htmlFor=" select" className="text-xl">
              Select from the options:
            </label>
            <select name="select" id="select">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              <option value="option4">Option 4</option>
              <option value="option5">Option 5</option>
              <option value="option6">Option 6</option>
              <option value="option7">Option 7</option>
              <option value="option8">Option 8</option>
              <option value="option9">Option 9</option>
              <option value="option10">Option10</option>
              <option value="option11">Option 11</option>
            </select>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
