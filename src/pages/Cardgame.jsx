import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import CartasContex, { CartasProvider } from "../context/CartasContext";
import Cartas from "../componentes/Cartas";
import Unacarta from "../Helppers/Unacarta";
import { useNavigate } from "react-router-dom";

import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const Cardgame = ({ deckid }) => {
  const navigate = useNavigate();
  const { user1, user2 } = useContext(UserContext);

  const { deckInfo, pj2, pj1, setPJ1, setPJ2, setDeckInfo } =
    useContext(CartasContex);

  const [runAnalisis, setRunAnalisis] = useState(false);

  const deck = [
    { userid: 1, name: user1 },
    { userid: 2, name: user2 },
  ];

  const getOneCard = () => {
    Unacarta({ deckid }).then((newcarta) => {
      setDeckInfo({
        success: newcarta.success,
        deck_id: newcarta.deck_id,
        remaining: newcarta.remaining,
      });
      console.log("Cartas restantes");
      console.log(newcarta.remaining);
      if (newcarta.remaining !== 0) {
        setPJ1([...pj1, newcarta.cards[0]]);
        setPJ2([...pj2, newcarta.cards[1]]);
        setRunAnalisis(true);
      }
    });
  };

  const returnToLogin = () => {
    navigate("/");
  };

  return (
    <>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button onClick={getOneCard}>Nueva Carta</Button>
        {deckInfo.remaining === 0 ? (
          <Button onClick={returnToLogin}>Jugamos de nuevo?</Button>
        ) : null}
      </ButtonGroup>

      <br />
      <br />
      <div id="restantes">
        <h4>
          Cartas Restantes: <strong>{deckInfo.remaining}</strong>{" "}
        </h4>
        <h4>
          Deck ID: <strong>{deckInfo.deck_id}</strong>{" "}
        </h4>
      </div>
      <br />
      {deck.map((usr) => (
        <div key={usr.userid}>
          <div>
            {" "}
            Jugador {usr.userid} - {usr.name}
            <br />
            <br />
          </div>
          <Cartas
            cartas={usr.userid === 1 ? pj1 : pj2}
            deckInfo={deckInfo}
            setRunAnalisis={setRunAnalisis}
            runAnalisis={runAnalisis}
            userid={usr.userid}
          />
          <br />
        </div>
      ))}
    </>
  );
};

export default Cardgame;
