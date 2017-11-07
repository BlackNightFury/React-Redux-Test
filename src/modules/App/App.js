import React, { Component } from 'react'

import { Switch, Route } from 'react-router-dom'
import pathToReg from 'path-to-regexp'
import { Row, Col } from 'antd'

import Sidebar from './components/Sidebar'
import Breadcrumbs from './components/Breadcrumbs'

export default class App extends Component {
  componentDidMount() {
    this.setGlobalData(this.props.location.pathname)
  }
  componentWillReceiveProps(nextProps) {
    const { location } = nextProps
    if (location !== this.props.location) {
      this.setGlobalData(location.pathname)
    }
  }

  setGlobalData = path => {
    let result = pathToReg('/').exec(path)
    if (result) {
      this.props.setMenu('global', result)
      this.props.setBreadcrumb('global', result)
      return
    }

    result = pathToReg('/projects').exec(path)
    if (result) {
      this.props.setMenu('projects', result)
      this.props.setBreadcrumb('global', result)
      return
    }

    result = pathToReg('/projects/:project').exec(path)
    if (result) {
      this.props.setMenu('project', result)
      this.props.setBreadcrumb('project', result)
      return
    }

    result = pathToReg('/projects/:project/keywords').exec(path)
    if (result) {
      this.props.setMenu('keywords', result)
      this.props.setBreadcrumb('keywords', result)
      return
    }

    result = pathToReg('/projects/:project/keywords/:keyword').exec(path)
    if (result) {
      this.props.setMenu('keyword', result)
      this.props.setBreadcrumb('keyword', result)
      return
    }
  }

  render() {
    const { setMenu, menu, location, ...breadProps } = this.props
    return (
      <Row>
        <Col>
          <div style={{ marginLeft: '240px' }}>
            <Breadcrumbs breadProps={breadProps} />
          </div>
          <Sidebar menu={menu} location={location} />
        </Col>
      </Row>
    )
  }
}
