import axios from "axios";

const Unacarta = async ({deckid}) => {
  const url = `https://deckofcardsapi.com/api/deck/${deckid}/draw/?count=2`;
  const { data } = await axios(url);
  return data;
};

export default Unacarta;
