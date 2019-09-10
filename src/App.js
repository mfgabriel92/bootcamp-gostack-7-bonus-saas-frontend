import React from 'react'
import { Provider } from 'react-redux'
import Routes from './routes'
import Styles from './styles'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Routes />
      <Styles />
    </Provider>
  )
}

export default App
