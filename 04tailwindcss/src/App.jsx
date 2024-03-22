import React, { useState } from "react";
import BgButton from "./components/BgButton";
import WithOutCardBgColor from "./components/WithOutCardBgColor";

function App(props) {
  const [color, setColor] = useState("olive");
  return (<>
    <div
      className=" flex justify-center relative w-screen h-screen duration-200 of "
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap items-center justify-center bottom-12 px-2 inset-x-0 ">
      <div className="  flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full ">

        <BgButton name="olive" background="skyblue" setColor={setColor} />
        <BgButton name="red" background="red" setColor={setColor}  />
        <BgButton name="green" background="green" setColor={setColor} />
        <BgButton name="pink" background="pink" setColor={setColor} />
        <BgButton name="yellow" background="yellow"setColor={setColor} />
        <BgButton name="orange" background="orange"setColor={setColor} />
        <BgButton name="orange" background="#DDA0DD"setColor={setColor} />
        <BgButton name="orange" background="#00d4ff"setColor={setColor} />
        <BgButton name="orange" background="#fc466b"setColor={setColor} />
        <BgButton name="orange" background="#EE82EE"setColor={setColor} />

      </div>
    </div>
    </div>
{/* <WithOutCardBgColor /> */}
    </>
  );
}

export default App;







