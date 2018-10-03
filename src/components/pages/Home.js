import React, {Component} from 'react'
import Clock from '../subcomponents/Clock'

class Home extends Component {
  render () {
    return (
      <div>
        <h1>Welcome to the React Boilerplate</h1>
        <h2>The time is: <Clock /> and counting! </h2>
        <p>This clock is an example of a reusable component. You can use anywhere you'd like.
        If you would like to learn how to implement the clock component yourself, there is a tutorial
        somewhere in <a href="https://reactjs.org/docs/getting-started.html">here</a>.</p>
      </div>
    )
  }
}

export default Home
