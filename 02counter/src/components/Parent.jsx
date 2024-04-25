import React, { useState } from "react";
import Child from "./child";

const Parent = () => {
  const [childData, setChildData] = useState(null);

  // Callback function to receive data from child component
  // const handleChildData = (data) => {
  //   setChildData(data);
  // };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Data from Child Component: {childData}</p>
      {/* Passing the callback function to ChildComponent */}
      <Child />
    </div>
  );
};

export default Parent;
