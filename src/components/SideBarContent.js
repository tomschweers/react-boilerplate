import React from 'react'
import PropTypes from 'prop-types'
import SideBarPanel from './SideBarPanel'
import { Link } from 'react-router-dom'

const styles = {
  sidebar: {
    width: 256,
    height: '100%'
  },
  sidebarLink: {
    display: 'block',
    padding: '16px 0px',
    color: '#757575',
    textDecoration: 'none'
  },
  divider: {
    margin: '8px 0',
    height: 1,
    backgroundColor: '#757575'
  },
  content: {
    padding: '16px',
    height: '100%',
    backgroundColor: 'white'
  }
}

// Links for the sidebar, routing is in Router.js
const SideBarContent = props => {
  const style = props.style
    ? { ...styles.sidebar, ...props.style }
    : styles.sidebar

  return (
    <SideBarPanel style={style}>
      <div style={styles.content}>
        <Link to='/'style={styles.sidebarLink}>Home</Link>
        <div style={styles.divider} />
        <Link to='/page1'style={styles.sidebarLink}>Page 1</Link>
        <Link to='/page2'style={styles.sidebarLink}>Page 2</Link>
        <Link to='/page3'style={styles.sidebarLink}>Page 3</Link>
      </div>
    </SideBarPanel>
  )
}

SideBarContent.propTypes = {
  style: PropTypes.object
}

export default SideBarContent
