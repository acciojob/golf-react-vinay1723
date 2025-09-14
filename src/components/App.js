import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false,
      ballPosition: { left: "0px" },
      posi: 0, // keep numeric position for easy increment
    };

    this.renderChoice = this.renderBallOrButton.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  buttonClickHandler() {
    // Show the ball and hide the start button
    this.setState({ renderBall: true });
  }

  handleKeyDown(event) {
    if (event.keyCode === 39) {
      // Right Arrow pressed
      this.setState((prevState) => {
        const newPos = prevState.posi + 5;
        return {
          posi: newPos,
          ballPosition: { left: `${newPos}px` },
        };
      });
    }
  }

  renderBallOrButton() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else {
      return (
        <button className="start" onClick={this.buttonClickHandler}>
          Start
        </button>
      );
    }
  }

  // Add keydown event listener once component mounts
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    // Clean up event listener when component unmounts
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    return <div className="playground">{this.renderBallOrButton()}</div>;
  }
}

export default App;
