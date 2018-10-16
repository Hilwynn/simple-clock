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

  setColorScheme = () => {
    const hour = this.state.date.getHours()
    if (hour > 6 && hour < 20) {
      return "#fff"
    } else {
      return "#000"
    }
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
    const getColor = {
      backgroundColor: {
        backgroundColor: `${this.setColorScheme()}`
      },
      color: {
        color: `${this.setColorScheme()}`
      }
    }

    return (
      <div>
        <div className="wrapper" style={getColor.backgroundColor}>
          <div className="container">
            <div className="clock-container">
              <p className="clock-face">{this.state.date.toLocaleTimeString()}</p>
            </div>
            <div className="button-container">
              <button
                onClick={this.handleStopTimeClick}
                style={getColor.color}>
                Stop
              </button>
              <button
                onClick={this.handleStartTimeClick}
                style={getColor.color}>
                Start
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

ReactDOM.render(
  <Clock />,
  document.getElementById("root")
)
