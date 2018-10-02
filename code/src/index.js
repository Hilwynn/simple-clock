import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

class Clock extends React.Component {
  state = {
    date: new Date()
  }

  startClock = () => {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  tick = () => {
    this.setState({
      date: new Date()
    })
  }

  componentDidMount() {
    this.startClock()
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  handleStopTimeClick = () => {
    clearInterval(this.timerID)
  }

  handleStartTimeClick = () => {
    this.startClock()
  }

  render() {
    return (
      <div>
        <p class="clock-face">{this.state.date.toLocaleTimeString()}.</p>
        <button onClick={this.handleStopTimeClick}>Stop</button>
        <button onClick={this.handleStartTimeClick}>Start</button>
      </div>
    )
  }

}

ReactDOM.render(
  <Clock />,
  document.getElementById("root")
)
