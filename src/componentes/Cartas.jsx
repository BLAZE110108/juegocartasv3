import { useContext, useEffect, useState } from "react";
import CartasContex from "../context/CartasContext";
import Carta from "./Carta";
import Grid from "@mui/material/Grid";
import Analisis from "../Helppers/Analisis";

const Cartas = ({cartas, deckInfo}) => {
  
  // const { deckInfo } = useContext(CartasContex);

  return (
    <>
      
      {Analisis(cartas.cards)}
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
          : `usaurio_id: ${deckInfo.deck_id} No hay cartas disponibles.`}
      </Grid>
      
    </>
  );
};

export default Cartas;
