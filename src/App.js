import React from 'react'
import { Pages } from './components/home/pages/Pages'
import "./style/main.scss"
import { Provider } from 'react-redux'
import store from './controller/store'
 
const App = () => {
  return (
    <>
    <Provider store={store}>
    <Pages />
    </Provider>
  

    </>
  )
}

export default App

