import React from "react";
import PropTypes from 'prop-types';

const Congrats = ({ success }) => {
  return success ? (
    <div data-test-id="component-congrats" className="alert alert-success">
      <span data-test-id="congrats-message">
        Congratulations! You guessed the word!
      </span>
    </div>
  ) : (
    <div data-test-id="component-congrats"></div>
  );
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
