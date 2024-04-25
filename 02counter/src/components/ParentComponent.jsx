import ChildComponent from "./ChildComponent";

import React, { useState } from "react";

const ParentComponent = () => {
  const [childData, setChildData] = useState(null);
  const[parentData, setParentData] = useState("");

  const handleChildData = (data) => {
    setChildData(data);
    console.log(data);
  };
  return (
    <><div>
      <h1>Parent Component</h1>
      <h2>Received data from child : {childData} </h2>
      <ChildComponent
        sendDataToParent={handleChildData}
        parentProp={parentData} />
    </div><input
        type="text"
        placeholder="type here"
        value={parentData}  style={{ padding: "10px 20px" }}
        onChange={(e) => {
          setParentData(e.target.value);
        } } /></>
  );
};

export default ParentComponent;
