import React, { useState } from "react";

const ChildComponent = ({ sendDataToParent, parentProp }) => {
  const [inputData, setInputData] = useState("");
  console.log(parentProp);
  const sendDataToParentOnClick = () => {
    console.log(inputData);
    sendDataToParent(inputData);
  };

  const handleOnChange = (e) => {
    setInputData(e.target.value);
  };

  return (
    <>
      <div>
        <h3>Child component</h3>
        <h4>Child component data come from parent : {parentProp}</h4>

        <input
          value={inputData}
          onChange={handleOnChange}
          type="text"
          placeholder="type here"
          style={{ padding: "10px 20px" }}
        />
      </div>
      <button
        onClick={sendDataToParentOnClick}
        style={{ background: "pink", margin: "20px" }}
      >
        Click Me
      </button>
    </>
  );
};

export default ChildComponent;
