import { rest } from 'msw'

const handlers = [
  rest.get('/api/hives', (_, res, ctx) => {
    return res(ctx.json({ hives: [{id: 1, name: 'Home'}]}), ctx.delay(50))
  }),
  rest.post('/api/hives', (req, res, ctx) => {
    return res(ctx.json({ hive: {id: 2, name: req.body.hive.name}}), ctx.delay(50))
  }),
  rest.post('/api/login', (req, res, ctx) => {
    return res(ctx.json({ user: {id: 1, email: req.body.user.email, token: 'secretToken'}}), ctx.delay(50))
  }),
  rest.get('/api/inspections', (_, res, ctx) => {
    return res(ctx.json({ inspections: [{id: 1, hive_id: 1, date: '2021-08-07', brood: []}]}), ctx.delay(50))
  }),
]

export { handlers }
