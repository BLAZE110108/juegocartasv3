import axios from "axios";

const Unacarta = async () => {
  console.log("Esta en Add One");
  const url = `https://deckofcardsapi.com/api/deck/d5uxxiuq955i/draw/?count=2`;
  const { data } = await axios(url);
  return data;
};

export default Unacarta;
