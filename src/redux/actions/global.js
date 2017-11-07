import Types from './types'

export const setMenu = (menuType, data) => ({
  type: Types.SET_MENU,
  menuType,
  data
})

export const setBreadcrumb = (breadType, data) => {
  return {
    type: Types.SET_BREADCRUMB,
    breadType,
    data
  }
}

export const showModal = () => {
  return {
    type: Types.SHOW_MODAL
  }
}

export const hideModal = () => {
  return {
    type: Types.HIDE_MODAL
  }
}
