import React from "react";
import "semantic-ui-css/semantic.min.css";

const Spinner = () => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">Loading...</div>
    </div>
  );
};

export default Spinner;
