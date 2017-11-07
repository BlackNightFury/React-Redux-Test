import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { configureStore } from './redux/store'

const store = configureStore(window.__INITIAL_STATE__)

ReactDOM.render(<App store={store} />, document.getElementById('root'))
registerServiceWorker()
