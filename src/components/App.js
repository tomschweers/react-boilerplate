import React, {Component} from 'react'
import Sidebar from 'react-sidebar'
import SideBarContent from './SideBarContent'
import MainRouter from './MainRouter'
import SideBarPanel from './SideBarPanel'

// Font Awesome icons
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars, faHome } from '@fortawesome/free-solid-svg-icons'
// library.add(faBars, faHome)

const styles = {
  contentHeaderMenuLink: {
    textDecoration: 'none',
    color: 'white',
    padding: 8
  },
  content: {
    padding: '16px'
  }
}

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      docked: false,
      open: false,
      transitions: true,
      touch: true,
      shadow: true,
      pullRight: false,
      touchHandleWidth: 20,
      dragToggleDistance: 30
    }

    this.renderPropCheckbox = this.renderPropCheckbox.bind(this)
    this.renderPropNumber = this.renderPropNumber.bind(this)
    this.onSetOpen = this.onSetOpen.bind(this)
    this.menuButtonClick = this.menuButtonClick.bind(this)
  }

  onSetOpen (open) {
    this.setState({ open })
  }

  menuButtonClick (ev) {
    ev.preventDefault()
    this.onSetOpen(!this.state.open)
  }

  renderPropCheckbox (prop) {
    const toggleMethod = ev => {
      const newState = {}
      newState[prop] = ev.target.checked
      this.setState(newState)
    };

    return (
      <p key={prop}>
        <label htmlFor={prop}>
          <input
            type="checkbox"
            onChange={toggleMethod}
            checked={this.state[prop]}
            id={prop}
          />
          {prop}
        </label>
      </p>
    )
  }

  renderPropNumber (prop) {
    const setMethod = ev => {
      const newState = {}
      newState[prop] = parseInt(ev.target.value, 10)
      this.setState(newState)
    };

    return (
      <p key={prop}>
        {prop}{' '}
        <input type="number" onChange={setMethod} value={this.state[prop]} />
      </p>
    )
  }

  render () {
    const sidebar = <SideBarContent />

    const contentHeader = (
      <span>
        {!this.state.docked && (
          <a
            onClick={this.menuButtonClick}
            href="#"
            style={styles.contentHeaderMenuLink}
          >
            =
          </a>
        )}
        <span> My Application</span>
      </span>
    )

    const sidebarProps = {
      sidebar,
      docked: this.state.docked,
      sidebarClassName: 'custom-sidebar-class',
      contentId: 'custom-sidebar-content-id',
      open: this.state.open,
      touch: this.state.touch,
      shadow: this.state.shadow,
      pullRight: this.state.pullRight,
      touchHandleWidth: this.state.touchHandleWidth,
      dragToggleDistance: this.state.dragToggleDistance,
      transitions: this.state.transitions,
      onSetOpen: this.onSetOpen
    }

    return (
      <Sidebar {...sidebarProps}>
        <SideBarPanel title={contentHeader}>
          <div style={styles.content}>
            <MainRouter />
          </div>
        </SideBarPanel>
      </Sidebar>
    )
  }
}

export default App
