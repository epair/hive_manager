import '@testing-library/jest-dom'
import { server } from './server.js'

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
