import React from "react";

const BgButton = ({ name, background, setColor }) => {
  return (
    <button
      className="p-0 text-center w-20 h-10 rounded-3xl border border-none focus:outline-none"
      onClick={() => setColor(background)}
      style={{ backgroundColor: background }}
    >
      {name}
    </button> 
  );
};

export default BgButton;
