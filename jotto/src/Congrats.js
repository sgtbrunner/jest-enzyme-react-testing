import React from "react";

const Congrats = ({ success }) => {
  return success ? (
    <div data-test-id="component-congrats">
      <span data-test-id="congrats-message">
        Congratulations! You guessed the word!
      </span>
    </div>
  ) : (
    <div data-test-id="component-congrats"></div>
  );
};
export default Congrats;
