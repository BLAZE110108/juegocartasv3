import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import { UserProvider } from "./context/UserContext";


import Login from "./pages/Login";
import Cardgame from "./pages/cardgame";




import "./App.css";
import { CartasProvider } from "./context/CartasContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <UserProvider>
        
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/Cardgame" element={<Cardgame />} />
            </Routes>
            
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
