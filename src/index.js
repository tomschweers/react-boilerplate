import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'

// For faster load times
import registerServiceWorker from './registerServiceWorker'

// Main CSS
import './index.css'

// Main app picked up by the index.html file
render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
