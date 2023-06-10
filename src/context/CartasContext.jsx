import { createContext } from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const CartasContex = createContext();

const CartasProvider = ({ children }) => {
  //const [cartas, setCartas] = useState([]);

  const [pj1, setPJ1] = useState([]);
  const [pj2, setPJ2] = useState([]);
  const [deckInfo, setDeckInfo] = useState([]);

  useEffect(() => {
    const query = async () => {
      const url = `https://deckofcardsapi.com/api/deck/d5uxxiuq955i/draw/?count=10`;
      const { data } = await axios(url);
      //setCartas(data);
      const tempj1 = [];
      const tempj2 = [];
      setDeckInfo({success: data.success, deck_id: data.deck_id, remaining: data.remaining});
    //   let obj = Object.keys(data.cards).length;
    //   obj = obj/2;
    //   console.log(obj);
      for (let i = 0; i < 10; i++) {
        if(i < 5){
            tempj1.push(data.cards[i]);
        }else{
            tempj2.push(data.cards[i]);
        }
        //console.log(pj1);
      }
    //   for (let i = 5; i < 10; i++) {
    //     tempj2.push(data.cards[i]);
    //     //console.log(pj2);
    //   }
    //   console.log(tempj1);
    //   console.log(tempj2);
      setPJ1(tempj1);
      setPJ2(tempj2);
    };
    query();
  }, []);

  return (
    <CartasContex.Provider value={{ deckInfo, pj1, pj2, setPJ1, setPJ2, setDeckInfo }}>
      {children}
      {/* <input type="button" disabled={isSending} onClick={setIsSending(true)} /> */}
    </CartasContex.Provider>
  );
};

export { CartasProvider };
export default CartasContex;
