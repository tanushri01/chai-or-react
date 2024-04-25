import React from 'react'

const Child = () => {
    const [inputData, setInputData] = useState();
    const changeValuehandle = (e) => {
      setInputData(e.target.value), console.log(e.target.value);
    };
    return (
      <div>
        <h1>Child Component</h1>
        <input
          type="text"
          value={inputData}
          placeholder="text here"
          onChange={changeValuehandle}
        />
      </div>
    );
}

export default Child
