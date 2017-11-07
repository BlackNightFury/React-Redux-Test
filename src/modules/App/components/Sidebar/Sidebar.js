import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'
import 'antd/dist/antd.css'
import pathToReg from 'path-to-regexp'

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

export default class Sidebar extends Component {
  render() {
    const { menu, location } = this.props
    const renderMenu = menu
      ? menu.items.map((e, index) => (
          <Menu.Item key={e.to}>
            <Link to={e.to}>{e.name}</Link>
          </Menu.Item>
        ))
      : null

    let selectedKeys = [location.pathname]

    if (
      location.pathname.includes(`/projects/${menu.project}/keywords`) === true
    ) {
      selectedKeys.push(`/projects/${menu.project}/keywords`)
    }

    return (
      <div style={{ position: 'fixed', top: '0' }}>
        <Menu
          style={{ width: 240, minHeight: '100vh' }}
          mode="inline"
          multiple={true}
          selectedKeys={selectedKeys}
        >
          <MenuItemGroup key="context" title={menu.project}>
            {renderMenu}
          </MenuItemGroup>
          <MenuItemGroup key="global" title="Global">
            <Menu.Item key="/projects">
              <Link to={'/projects'}>
                <Icon type="laptop" />
                Projects
              </Link>
            </Menu.Item>
            <Menu.Item key="/logout">
              <Link to={'/logout'}>
                <Icon type="logout" />
                Logout
              </Link>
            </Menu.Item>
          </MenuItemGroup>
        </Menu>
      </div>
    )
  }
}

Sidebar.propTypes = {
  menu: PropTypes.object
}
