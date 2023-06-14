import { createContext } from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const CartasContex = createContext();

const CartasProvider = ({ children, deckid }) => {
  const [pj1, setPJ1] = useState([]);
  const [pj2, setPJ2] = useState([]);
  const [deckInfo, setDeckInfo] = useState([]);
 
  
  useEffect(() => {
    const query = async () => {
      let url = `https://deckofcardsapi.com/api/deck/${deckid}/shuffle/`;
      const { shufle } = await axios(url);
      url = `https://deckofcardsapi.com/api/deck/${deckid}/draw/?count=20`;
      const { data } = await axios(url);
      //setCartas(data);
      const tempj1 = [];
      const tempj2 = [];
      setDeckInfo({success: data.success, deck_id: data.deck_id, remaining: data.remaining});
      for (let i = 0; i < 20; i++) {
        if(i < 10){
            tempj1.push(data.cards[i]);
        }else{
            tempj2.push(data.cards[i]);
        }
      }
      setPJ1(tempj1);
      setPJ2(tempj2);
    };
    deckid !== '' ? query() : null;
  }, [deckid]);

  return (
    <CartasContex.Provider value={{ deckInfo, pj1, pj2, setPJ1, setPJ2, setDeckInfo }}>
      {children}
    </CartasContex.Provider>
  );
};

export { CartasProvider };
export default CartasContex;