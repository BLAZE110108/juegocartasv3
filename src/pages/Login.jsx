import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { user1, user2, setUser1, setUser2 } = useContext(UserContext);

  const [IsOkUser, setIsOkUser] = useState(false);

  const navigate = useNavigate();

  const handleChange1 = (event) => {
    setUser1(event.target.value);
  };
  const handleChange2 = (event) => {
    setUser2(event.target.value);
  };

  const startGameClick = (event) => {
    event.preventDefault();
    if (user1.trim().length !== 0 && user2.trim().length !== 0) {
      setIsOkUser(true);
      console.log("OK - No empty");
      navigate("/Cardgame");
    } else {
      console.log("input value is empty");
    }
  };

  return (
    <div>
        <h3>Usaurio 1: {user1}</h3>
        <h3>Usaurio 2: {user2}</h3>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="usr1"
          label="Usuario 1"
          variant="outlined"
          onChange={handleChange1}
        />
        <TextField
          id="usr2"
          label="Usuario 2"
          variant="outlined"
          onChange={handleChange2}
        />
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="success" onClick={startGameClick} >
            Iniciar
          </Button>
        </Stack>
      </Box>
    </div>
  );
};

export default Login;
