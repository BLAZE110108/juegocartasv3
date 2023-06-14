import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import { UserProvider } from "./context/UserContext";

import Login from "./pages/Login";
import Cardgame from "./pages/cardgame";

import "./App.css";
import { CartasProvider } from "./context/CartasContext";
import GetNewDeck from "./Helppers/GetNewDeck";
import NoFound from "./componentes/NoFound";

function App() {
  const [deck_id, setDeck_Id] = useState('');

  useEffect(()=>{
    GetNewDeck().then((newDeck)=>{
      setDeck_Id(newDeck.deck_id)
      console.log(newDeck.deck_id)
    });
  },[])
  return (
    <>
      <BrowserRouter>
        <UserProvider>
        <CartasProvider deckid={deck_id}>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/Cardgame" element={<Cardgame deckid={deck_id}/>} />
              <Route path='/*' element={<NoFound/>} />
            </Routes>
            </CartasProvider>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;