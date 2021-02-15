import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import "semantic-ui-css/semantic.min.css";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  conditionalContent() {
    if (this.state.errorMessage) {
      return (
        <div>
          <h1>Error: {this.state.errorMessage}</h1>
        </div>
      );
    } else if (this.state.lat) {
      return (
        <SeasonDisplay
          lat={this.state.lat}
          errorMessage={this.state.errorMessage}
        />
      );
    }

    return <Spinner loadingText="Please allow location services" />;
  }

  render() {
    return <div>{this.conditionalContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
