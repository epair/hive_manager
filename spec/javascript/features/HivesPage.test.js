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

test('filling out form and clicking submit adds a hive to the list', async () => {
  render(<App />, { preloadedState: { currentUser: { isLoggedIn: true }}})

  userEvent.click(await screen.findByText(/Add Hive/i))

  userEvent.type(screen.getByLabelText('Name'), 'Neighbor 1')
  userEvent.click(screen.getByRole('button', { name: /Create Hive/i }))

  expect(await screen.findByText(/Neighbor 1/i)).toBeInTheDocument()
})
