import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import CartasContex, { CartasProvider } from "../context/CartasContext";
import Cartas from "../componentes/Cartas";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Unacarta from "../Helppers/Unacarta";

const Cardgame = () => {
  const { user1, user2 } = useContext(UserContext);

  const { deckInfo, pj2, pj1, setPJ1, setPJ2, setDeckInfo } =
    useContext(CartasContex);

  const deck = [
    { userid: 1, name: user1 },
    { userid: 2, name: user2 },
  ];

  const getOneCard = () => {
    Unacarta().then((newcarta) => {
      // setPJ1(pj1.push(newcarta.cards[0]));
      // setPJ2(pj2.push(newcarta.cards[1]));
      setDeckInfo({
        success: newcarta.success,
        deck_id: newcarta.deck_id,
        remaining: newcarta.remaining,
      });
      setPJ1([...pj1, newcarta.cards[0]]);
      setPJ2([...pj2, newcarta.cards[1]]);
      console.log("EN el getOneCard");
      console.log(pj2);
      console.log(pj1);
    });
  };

  return (
    <>
      <Button variant="outlined" onClick={getOneCard}>
        Carta
      </Button>

      <br />
      <br />
      <div id="restantes">
        <p>Cartas Restantes: {deckInfo.remaining}</p>
      </div>
      <br />
      {deck.map((usr) => (
        <div key={usr.userid}>
          {console.log("En el render return")}
          {console.log(pj2)}
          {console.log(pj1)}

          <div>
            {" "}
            Jugador {usr.userid} - {usr.name}
            <br />
            <br />
          </div>
          <Cartas cartas={usr.userid === 1 ? pj1 : pj2} deckInfo={deckInfo} />
          <br />
        </div>
      ))}
    </>
  );
};

export default Cardgame;
