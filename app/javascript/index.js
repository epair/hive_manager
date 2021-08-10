import React from 'react'
import { App } from './App'
import configureStore from './app/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";

const store = configureStore()

export default function RootApp() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  )
}

