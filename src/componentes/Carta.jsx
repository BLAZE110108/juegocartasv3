import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions } from "@mui/material";


const Carta = ({ carta }) => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={carta.image}
            alt={carta.code}
          />
        </CardActionArea>
        <CardActions>
          
        </CardActions>
      </Card>
    </>
  );
};

export default Carta;
