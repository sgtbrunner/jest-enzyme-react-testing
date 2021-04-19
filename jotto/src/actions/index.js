import axios from "axios";

export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
};

export function correctGuess() {
  return { type: actionTypes.CORRECT_GUESS };
}

// TODO: update to redux action
export const getSecretWord = () =>
  axios.get("http://localhost:3030").then((response) => response.data);
