import React from 'react'
import { render, screen } from '../support/test-utils'
import userEvent from '@testing-library/user-event'

// using App instead of SignInForm in order to test routing upon sign in
import { App } from '../../../app/javascript/App'

test('filling out form and clicking submit signs in the user', async () => {
  render(<App />)

  userEvent.type(screen.getByLabelText('Email'), 'test@gmail.com')
  userEvent.type(screen.getByLabelText('Password'), 'password')

  userEvent.click(screen.getByRole('button', { name: /Sign In/i }))

  expect(await screen.findByText(/Add Hive/i)).toBeInTheDocument()
  expect(await screen.findByText(/Sign Out/i)).toBeInTheDocument()
})
