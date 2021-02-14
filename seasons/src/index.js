import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import "semantic-ui-css/semantic.min.css";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    return (
      <SeasonDisplay
        lat={this.state.lat}
        errorMessage={this.state.errorMessage}
      />
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
