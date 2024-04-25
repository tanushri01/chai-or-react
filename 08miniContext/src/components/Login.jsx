import React, { useContext, useState } from "react";
import userContext from "../context/userContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(userContext);

  const submitHandleOnClick = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        placeholder="Username"
        style={inputStyle}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="Password"
        style={inputStyle}
      />
      <button onClick={submitHandleOnClick} style={buttonStyle}>
        Submit
      </button>
    </div>
  );
};

// CSS styles
const containerStyle = {
  textAlign: "center",
  backgroundColor: "#333",
  color: "#fff",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const headingStyle = {
  marginBottom: "20px",
};

const inputStyle = {
  display: "block",
  padding: "10px",
  margin: "10px auto",
  width: "200px",
  borderRadius: "4px",
  border: "none",
  backgroundColor: "#555",
  color: "#fff",
};

const buttonStyle = {
  background: "pink",
  padding: "10px 20px",
  borderRadius: "4px",
  border: "none",
  cursor: "pointer",
};

export default Login;
