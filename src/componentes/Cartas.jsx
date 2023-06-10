import { useContext, useEffect, useState } from "react";
import CartasContex from "../context/CartasContext";
import Carta from "./Carta";
import Grid from "@mui/material/Grid";
import Analisis from "../Helppers/Analisis";
import { CartasProvider } from "../context/CartasContext";


const Cartas = ({cartas, deckInfo}) => {
  
  // const { deckInfo } = useContext(CartasContex);
  // const [terna1, setTerna1] = useState([]);
  // const [terna2, setTerna2] = useState([]);
  // const [cuarta, setCuarta] = useState([]);


  return (
    <>
       
      {Analisis({cartas})}
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 2, sm: 2, md: 10 }}
      >
        {console.log(deckInfo)}
        {console.log(cartas)}
        {deckInfo.success
          ? cartas.map((carta, index) => (
              <Grid item key={index}>
                <Carta carta={carta} />
              </Grid>
            ))
          : `Deck Id: ${deckInfo.deck_id} No hay cartas disponibles.`}
      </Grid>
      
    </>
  );
};

export default Cartas;
