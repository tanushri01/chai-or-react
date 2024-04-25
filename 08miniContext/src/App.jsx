import { useState } from "react";
import "./App.css";
import Profile from "./components/Profile";
import Login from "./components/Login";
import userContext from "./context/userContext";

function App() {
  const [user, setUser] = useState(null);

  return (
    <userContext.Provider value={{ user, setUser }}>
      <Login />
      <Profile />
    </userContext.Provider>
  ); 
}

export default App;
