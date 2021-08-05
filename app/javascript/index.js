import React from 'react'
import { App } from './App'
import store from './app/store'
import { Provider } from 'react-redux'

export default function RootApp() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  )
}

