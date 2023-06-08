import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import CartasContex, { CartasProvider } from "../context/CartasContext";
import Cartas from "../componentes/Cartas";
import { Button, CardActionArea, CardActions } from "@mui/material";
const Cardgame = () => {
  const { user1, user2 } = useContext(UserContext);

  const deck = [
    { userid: 1, name: user1 },
    { userid: 2, name: user2 },
  ];

  return (
    <>
      <Button variant="outlined" >
          Carta
          </Button>
      <br />
      <br />
      <br />
      {deck.map((usr) => (
        <div key={usr.userid}>
          {console.log(usr.userid)}
          <div> Jugador {usr.userid} - {usr.name}</div>
          <CartasProvider>
            <Cartas />
          </CartasProvider>
          <br />
        </div>
      ))}
    </>
  );
};

export default Cardgame;
