import React from 'react'

const WithOutCardBgColor = () => {

      const [color, setColor] = useState("olive");
  return (
    <div
      className=" flex justify-center relative w-screen h-screen duration-200 of "
      style={{ backgroundColor: color }}
    >
      <div className=" fixed flex flex-wrap items-center justify-center bottom-12 px-2 inset-x-0 ">
      <div className="  flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full ">
     
       <button onClick={()=>{setColor("Red") }} className="outlined-none px-4 py-1 rounded-full text-white shadow-lg border-none"  style={{backgroundColor :"red"}}>Red</button>
       <button onClick={()=>{setColor("Green") }}className="outlined-none px-4 py-1 rounded-full text-white shadow-lg"  style={{backgroundColor :"Green"}}>Green</button>
       <button onClick={()=>{setColor("Pink") }} className="outlined-none px-4 py-1 rounded-full text-white shadow-lg"  style={{backgroundColor :"Pink"}}>Pink</button>
       <button onClick={()=>{setColor("Yellow") }} className="outlined-none px-4 py-1 rounded-full text-white shadow-lg"  style={{backgroundColor :"Yellow"}}>Yellow</button>
       <button  onClick={()=>{setColor("olive") }}className="outlined-none px-4 py-1 rounded-full text-white shadow-lg"  style={{backgroundColor :"OLive"}}>OLive</button>
       <button onClick={()=>{setColor("Skyblue") }} className="outlined-none px-4 py-1 rounded-full text-white shadow-lg"  style={{backgroundColor :"Skyblue"}}>Skyblue</button>
     
     
     
       </div>
      </div>
    </div>
  );
  
}

export default WithOutCardBgColor
