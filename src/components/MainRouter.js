import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'

// This is the main routing for the application
class MainRouter extends React.Component {
  render () {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
      </main>
    )
  }
}

export default MainRouter
