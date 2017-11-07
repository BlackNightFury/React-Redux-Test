import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import Core from './modules/App'
import './App.css'

class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <BrowserRouter>
          <div className="App">
            <Route component={Core} />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App
