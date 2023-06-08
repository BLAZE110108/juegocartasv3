import { useContext, useEffect, useState } from "react";
import CartasContex from "../context/CartasContext";
import Carta from "./Carta";
import Grid from "@mui/material/Grid";

const Cartas = () => {
    const { cartas } = useContext(CartasContex);

  //console.log(cartas);

  // useEffect(() => {
  //   setNewCartas(...newCartas, cartas);
  //   console.log(`Ejecucion del useEffect`);
  // }, []);


  return (
    <>
      
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 2, sm: 2, md: 10 }}
      >
        {cartas.success
          ? cartas.cards.map((carta, index) => (
              <Grid item key={index}>
                <Carta carta={carta} />
              </Grid>
            ))
          : `usaurio_id: ${cartas.deck_id} No hay cartas disponibles.`}
      </Grid>
    </>
  );
};

export default Cartas;
