import { connect } from 'react-redux'
import {
  setMenu,
  setBreadcrumb,
  showModal,
  hideModal
} from '../../redux/actions/global'
import App from './App'

const mapStateToProps = state => ({
  menu: state.global.menu,
  breadcrumb: state.global.breadcrumb,
  modalVisible: state.global.modalVisible
})

const mapDispatchToProps = dispatch => ({
  setMenu: (type, data) => dispatch(setMenu(type, data)),
  setBreadcrumb: (type, data) => dispatch(setBreadcrumb(type, data)),
  showModal: () => dispatch(showModal()),
  hideModal: () => dispatch(hideModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
