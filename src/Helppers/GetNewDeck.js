import axios from "axios";

const GetNewDeck = async () => {
    const url = `https://deckofcardsapi.com/api/deck/new/`;
  const { data } = await axios(url);
  return data;
}

export default GetNewDeck