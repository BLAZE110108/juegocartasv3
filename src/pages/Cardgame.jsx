import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import CartasContex, { CartasProvider } from "../context/CartasContext";
import Cartas from "../componentes/Cartas";

const Cardgame = () => {
  const { user1, user2 } = useContext(UserContext);

  const [newCartas, setNewCartas] = useState([]);

  const deck = [
    { userid: 1, name: user1 },
    { userid: 2, name: user2 },
  ];

  return (
    <>
    {/* <div id="restantes">
        <p>Cartas Restantes: {cartas.remaining}</p>
      </div> */}
      {deck.map((usr, index) => (
        <div key={index}>
          {console.log(usr.userid)}
          <div> Jugador {usr.deckid} - {usr.name}</div>
         
            <Cartas />
          
          <br />
        </div>
      ))}
    </>
  );
};

export default Cardgame;
