import React from 'react'
//import { Link } from 'react-router-dom'
import Sidebar from 'react-sidebar'
import SideBarContent from './SideBarContent'
import MainRouter from './MainRouter'
import SideBarPanel from './SideBarPanel'

//import { library } from '@fortawesome/fontawesome-svg-core'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faBars, faHome } from '@fortawesome/free-solid-svg-icons'

//library.add(faBars, faHome)

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
      docked: true,
      open: true
    }

    this.onSetOpen = this.onSetOpen.bind(this)
  }

  onSetOpen (open) {
    this.setState({ open })
  }

  render () {
    const sidebar = <SideBarContent />

    const contentHeader = (
      <span>
        <span class="Header"></span>
      </span>
    )

    const sidebarProps = {
      sidebar,
      docked: this.state.docked,
      open: this.state.open,
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
