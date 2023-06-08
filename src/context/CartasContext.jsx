import { createContext } from "react";
import axios from 'axios'
import { useState, useEffect } from "react";

const CartasContex = createContext();

const CartasProvider = ({children}) =>{
    const [cartas, setCartas] = useState([]);
    const [isSending, setIsSending] = useState(false);
    useEffect(() =>{
        const query = async () =>{
            const url = `https://deckofcardsapi.com/api/deck/d5uxxiuq955i/draw/?count=5`;
            const {data} = await axios(url);
            setCartas(data);
            // if(data.success){
            //     setCartas(data.cards);
            // }else(setCartas(data));
            
        };
        query();
    }, []);

    return(
        <CartasContex.Provider value={{isSending,cartas}}>
            {children}
            {/* <input type="button" disabled={isSending} onClick={setIsSending(true)} /> */}
        </CartasContex.Provider>
        
    );
};

export {CartasProvider};
export default CartasContex;