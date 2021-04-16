import Congrats from "./Congrats";
import Input from './Input';
import GuessedWords from "./GuessedWords";

function App() {
  // TODO: get props from shared state
  const success = false;
  const secretWord = 'party';
  const guessedWords = [];

  return (
    <div className="container" data-test-id="app-component">
      <h1>Jotto</h1>
      <Congrats success={success} />
      <Input success={success} secretWord={secretWord} />
      <GuessedWords
        guessedWords={guessedWords}
      />
    </div>
  );
}

export default App;
