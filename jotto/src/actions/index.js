import axios from "axios";

// TODO: update to redux action
export const getSecretWord = () =>
  axios.get("http://localhost:3030").then((response) => response.data);
