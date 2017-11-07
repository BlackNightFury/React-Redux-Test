import React, { Component } from 'react'
import { Breadcrumb, Button, Modal, Input } from 'antd'
import { Link } from 'react-router-dom'

export default class Breadcrumbs extends Component {
  render() {
    const { breadProps } = this.props
    const { breadcrumb, modalVisible, showModal, hideModal } = breadProps
    const renderItems = breadcrumb.items.map((e, index) => (
      <Breadcrumb.Item key={index}>
        {e.to ? <Link to={e.to}>{e.name}</Link> : e.name}
      </Breadcrumb.Item>
    ))
    return (
      <div style={{ padding: '10px 20px' }}>
        <div>
          {renderItems}
          <div style={{ float: 'right' }}>
            {breadcrumb.type === 'project' && (
              <div>
                {'2'} Projects
                <Button onClick={showModal} style={{ marginLeft: '10px' }}>
                  New Project
                </Button>
              </div>
            )}
            {breadcrumb.type === 'keywords' && (
              <div>
                <Button onClick={showModal} style={{ marginLeft: '10px' }}>
                  New Keyword
                </Button>
              </div>
            )}
          </div>
        </div>
        <Modal
          title="Add"
          visible={modalVisible}
          okText="Add"
          cancelText="Cancel"
          onOk={() => {
            alert('Add')
            hideModal()
          }}
          onCancel={hideModal}
        >
          Please input the name.
          <br />
          <Input />
        </Modal>
      </div>
    )
  }
}
