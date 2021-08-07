import React from 'react'
import userEvent from '@testing-library/user-event'
import { render, screen } from '../support/test-utils'
import { HivesPage } from '../../../app/javascript/features/hives/HivesPage'
import { App } from '../../../app/javascript/App'

test('fetches & lists hives', async () => {
  render(<HivesPage />)

  expect(screen.getByText(/Loading\.\.\./i)).toBeInTheDocument()

  expect(await screen.findByText(/Home/i)).toBeInTheDocument()
})


test('clicking hive name fetches & lists inspections', async () => {
  // rendering App in order to test routing
  render(<App />, { preloadedState: { currentUser: { isLoggedIn: true }}})

  userEvent.click(await screen.findByRole('link', { name: /Home/i }))

  expect(await screen.findByText(/2021-08-07/i)).toBeInTheDocument()
})
