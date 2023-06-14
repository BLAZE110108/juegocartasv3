import { useEffect, useState } from "react";
import Carta from "./Carta";
import Analisis from "../Helppers/Analisis";

import Grid from "@mui/material/Grid";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CartasContex from "../context/CartasContext";

const Cartas = ({ cartas, deckInfo, runAnalisis, setRunAnalisis, userid }) => {
  const [playerStatus, setPlayerStatus] = useState([]);
  const { setPJ1, setPJ2 } = React.useContext(CartasContex);
  useEffect(() => {
    Analisis({ cartas }).then((data) => {
      setPlayerStatus(data);
      if (runAnalisis) {
        let idx = cartas.findIndex((p) => p.value == data[3].value);
        if (idx >= 0) {
          //check if item found
          const deleted = cartas.splice(idx, 1);
          console.log(deleted[0].code);
          userid === 1 ? setPJ1(cartas) : setPJ2(cartas);
        }
      }
    });
  }, [runAnalisis]);

  return (
    <>
      {setRunAnalisis(false)}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 200 }} size="small">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell align="center">Cartas</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {playerStatus.map((element) => (
              <TableRow
                key={element.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {element.name.startsWith("conjunto") ? (
                  <TableCell component="th" scope="row">
                    {element.name}
                  </TableCell>
                ) : null}

                {element.name.startsWith("conjunto") ? (
                  <TableCell> {element.value.map((v) => `${v} `)} </TableCell>
                ) : element.name === "Deleteable" ? (
                  <TableCell>{`Carta Eliminada ${element.value}`}</TableCell>
                ) : (
                  <TableCell>{`Puntage: ${element.value}`}</TableCell>
                )}

                {element.name.startsWith("Winner") ? (
                  <TableCell component="th" scope="row">
                    {element.value === 10
                      ? "GANADOR"
                      : deckInfo.remaining === 0
                      ? element.value === 9
                        ? "CASI GANAS, MEJOR SUERTE PARA LA PROXIMA"
                        : ""
                      : ""}
                  </TableCell>
                ) : null}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 2, sm: 2, md: 10 }}
      >
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
