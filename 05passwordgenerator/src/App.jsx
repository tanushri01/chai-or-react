import { useState, useCallback } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [numChar, setCharAllow] = useState(true);
  const [Password, setPassword] = useState();

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllow) str += "0123456789 ";
    if (numChar) str += "!@#$%^&*()-_=+|[]{};:/?.";

    for (let i = 1; i <= array.length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass = str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllow, numChar, Password]);
  //
  return (
    <>
      {/* <div class="flex items-center justify-center mt-8">
        <div className="bg-white rounded-xl shadow-md p-4 mx-auto">
        <div class="flex items-center border border-gray-300 rounded">
        <input
        className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
        id="userPassword"
        type="password"
        />
        <button
        id="copyButton"
        class="p-2 bg-blue-500 text-white rounded-r focus:outline-none focus:bg-blue-600"
        >
        Copy
        </button>
        </div>
        
        <div className="w-">
        <input
        type="range"
        min="1"
        max="100"
        value="50"
        class="w-full h-6 bg-gray-300 rounded-md appearance-none focus:outline-none cursor-pointer"
        />
        </div>
        </div>
      </div> */}

      <div className="w-full max-w-md mx-auto shadow-md
       rounded-lg px-4 py-3 my-8  text-orange-500 bg-gray-800">
       
       <h1 className="text-4xl text-white text-center my-3">Password Generator</h1>
        <div
          className="className= "
          flex
          shadow
          rounded-lg
          overflow-hidden
          mb-4
        >
          <input type="text" value={Password} className="outline-none w-full py-1 px-3"
          placeholder="password" readOnly />
          <button className="outlined-none bg-blue-700 text-white px-3 py-0.5 shrink-0">Copy</button>
        </div>

        
        <div className="flex text-sm gap-x-2
        ">
          <div className="flex items-center gap-x-1">
            <input type="range" min={6} max={100} value={length} className="curser-pointer" />
            <label >Length : {length}</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
