import React, {Component} from 'react'

class Clock extends Component {
  constructor (props) {
    super(props)
    this.state = {date: new Date()}
  }

  componentDidMount () {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount () {
    clearInterval(this.timerID)
  }

  tick () {
    this.setState({
      date: new Date()
    })
  }

  render () {
    return (
      <h2 style={{color:'#ff6600'}}>{this.state.date.toLocaleTimeString()}</h2>
    )
  }
}

export default Clock
