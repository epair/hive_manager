import React from 'react'
import { render, screen } from '../support/test-utils'
import { HivesPage } from '../../../app/javascript/features/hives/HivesPage'

test('fetches & lists hives', async () => {
  render(<HivesPage />)

  expect(screen.getByText(/Loading\.\.\./i)).toBeInTheDocument()

  expect(await screen.findByText(/Home/i)).toBeInTheDocument()
})
