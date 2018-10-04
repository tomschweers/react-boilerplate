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

const mql = window.matchMedia(`(min-width: 800px)`)

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: false
    }

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this)
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this)
  }

  componentWillMount () {
    mql.addListener(this.mediaQueryChanged)
  }

  componentWillUnmount () {
    mql.removeListener(this.mediaQueryChanged)
  }

  onSetSidebarOpen (open) {
    this.setState({ sidebarOpen: open })
  }

  mediaQueryChanged () {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false })
  }

  render () {
    const sidebarContent = <SideBarContent />

    const contentHeader = (
      <span>
        <span class="Header"></span>
      </span>
    )

    return (
      <Sidebar
        sidebar={sidebarContent}
        open={this.state.sidebarOpen}
        docked={this.state.sidebarDocked}
        onSetOpen={this.onSetSidebarOpen}
      >
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
