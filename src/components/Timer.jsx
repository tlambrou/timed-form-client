import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'


class Timer extends Component {

  state = {
    displayTime: "- - : - - . -",
    isPast: false,
    isWarning: false
  }

  componentWillMount() {
    this._updateTime()
  }

  _updateTime() {
    setInterval(() => { this.setTime() }, 500)
  }

  setDisplayTime(time, isPast) {
    const minutes = Math.floor(time / 60000)
    const seconds = Math.floor(time % 60000 / 1000)
    const neg = isPast ? `-` : ``
    const sZero = seconds < 10 ? `0` : ``
    const mZero = minutes < 10 ? `0` : ``
    const displayTime = `${neg} ${mZero}${minutes} : ${sZero}${seconds}`
    const isWarning = !isPast && (minutes < 5)
    this.setState({ displayTime, isPast , isWarning })
  }

  calculateTime() {
    const timeLimit = 720000
    const now = new Date()
    const { createdAt } = this.props.user
    const startTime = new Date(createdAt)
    const cutoffTime = new Date(startTime.getTime() + timeLimit)
    const timeLeft = Math.abs(now - cutoffTime)
    if (now < cutoffTime) {
      this.setDisplayTime(timeLeft, false)
    } else {
      this.setDisplayTime(timeLeft, true)
    }
  }

  setTime() {
    const { user } = this.props
    if (user) { this.calculateTime() }
  }

  renderButton() {
    const { isPast, isWarning } = this.state
    if (isPast) {
      return (
        <button
          className="btn btn-lg btn-danger pull-right"
          type="submit">
          <h2>{this.state.displayTime}</h2>
        </button>
      )
    } else if (isWarning) {
      return (
        <button
          className="btn btn-lg btn-warning pull-right"
          type="submit">
          <h2>{this.state.displayTime}</h2>
        </button>
      )
    } else {
      return (
        <button
        className="btn btn-lg btn-info pull-right"
        type="submit">
        <h2>{this.state.displayTime}</h2>
      </button>
      )
    }
  }

  render() {
    return (
      <span>
        {this.renderButton()}
      </span>

    );
  }
}

export default withRouter(Timer);
