import { createReducer } from 'reduxsauce'

import Types from '../actions/types'

const initialState = {
  menu: { type: 'global', items: [] },
  breadcrumb: { type: 'global', items: [] },
  modalVisible: false
}

export const setMenu = (state = initialState, action) => {
  const { menuType, data } = action
  const project = data[1]
  let menu
  switch (menuType) {
    case 'global':
      menu = { type: menuType, items: [] }
      break
    case 'projects':
      menu = { type: menuType, items: [], menu: [] }
      break
    case 'project':
    case 'keywords':
    case 'keyword':
      menu = {
        type: menuType,
        project,
        items: [
          { name: 'Keywords', to: `/projects/${project}/keywords` },
          { name: 'Segments', to: `/projects/${project}/segments` },
          { name: 'Workflows', to: `/projects/${project}/workflows` }
        ]
      }
      break

    default:
      menu = state.menu
  }

  return { ...state, menu }
}

export const setBreadcrumb = (state = initialState, action) => {
  const { breadType, data } = action
  const project = data[1]
  const keyword = data[2]
  let breadcrumb
  switch (breadType) {
    case 'global':
      breadcrumb = { type: breadType, items: [] }
      break
    case 'projects':
      breadcrumb = {
        type: breadType,
        items: [
          {
            name: 'Project',
            to: '/projects'
          }
        ]
      }
      break
    case 'project':
      breadcrumb = {
        type: breadType,
        items: [
          {
            name: 'Project',
            to: '/projects'
          },
          {
            name: project
          }
        ]
      }
      break
    case 'keywords':
      breadcrumb = {
        type: breadType,
        items: [
          {
            name: 'Project',
            to: '/projects'
          },
          {
            name: project,
            to: `/projects/${project}`
          },
          {
            name: 'Keywords'
          }
        ]
      }
      break
    case 'keyword':
      breadcrumb = {
        type: breadType,
        items: [
          {
            name: 'Project',
            to: '/projects'
          },
          {
            name: project,
            to: `/projects/${project}`
          },
          {
            name: 'Keywords',
            to: `/projects/${project}/keywords`
          },
          {
            name: keyword,
            to: `/projects/${project}/keywords/${keyword} `
          }
        ]
      }
      break

    default:
      breadcrumb = state.breadcrumb
  }

  return { ...state, breadcrumb }
}

export const showModal = (state = initialState, action) => ({
  ...state,
  modalVisible: true
})

export const hideModal = (state = initialState, action) => ({
  ...state,
  modalVisible: false
})

export const handlers = {
  [Types.SET_MENU]: setMenu,
  [Types.SET_BREADCRUMB]: setBreadcrumb,
  [Types.SHOW_MODAL]: showModal,
  [Types.HIDE_MODAL]: hideModal
}

export default createReducer(initialState, handlers)
