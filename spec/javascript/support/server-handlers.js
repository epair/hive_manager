import { rest } from 'msw'

const handlers = [
  rest.get('/api/hives', (_, res, ctx) => {
    return res(ctx.json({ hives: [{id: 1, name: 'Home'}]}), ctx.delay(50))
  })
]

export { handlers }
