import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  root: {
    fontFamily:
      '"HelveticaNeue-Light", Helvetica, Arial, sans-serif',
    fontWeight: 300
  },
  header: {
    backgroundColor: '#ff6600',
    color: 'white',
    padding: '30px',
    fontSize: '1.5em'
  }
}

const SideBarPanel = props => {
  const rootStyle = props.style
    ? { ...styles.root, ...props.style }
    : styles.root

  return (
    <div style={rootStyle}>
      <div style={styles.header}>{props.title}</div>
      {props.children}
    </div>
  )
}

SideBarPanel.propTypes = {
  style: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.object
}

export default SideBarPanel
