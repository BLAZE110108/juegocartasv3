import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { FaTrash } from 'react-icons/fa';

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
          {/* <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            codido: {carta.code}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {carta.code}
          </Typography>
        </CardContent> */}
        </CardActionArea>
        <CardActions>
          
        </CardActions>
      </Card>
    </>
  );
};

export default Carta;
