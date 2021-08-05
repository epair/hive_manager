import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from "react-router-dom";

import hivesReducer from '../../../app/javascript/features/hives/hivesSlice'
import currentUserReducer from '../../../app/javascript/features/user/currentUserSlice'

function render(
  ui,
  {
    preloadedState,
    store = configureStore({ reducer: { currentUser: currentUserReducer, hives: hivesReducer }, preloadedState }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <Router>
          {children}
        </Router>
      </Provider>
    )
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }
