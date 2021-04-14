import React from "react";
import PropTypes from "prop-types";

const Input = ({ success, secretWord }) => {
  const [currentGuess, setCurrentGuess] = React.useState("");
  return success ? (
    <div data-test-id="input-component" />
  ) : (
    <div data-test-id="input-component">
      <form className="form-inline">
        <input
          data-test-id="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          placeholder="enter guess"
          value={currentGuess}
          onChange={(event) => setCurrentGuess(event.target.value)}
        />
        <button
          data-test-id="submit-button"
          className="btn btn-primary mb-2"
          onClick={(event) => {
            event.preventDefault();
            setCurrentGuess("");
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};

export default Input;
