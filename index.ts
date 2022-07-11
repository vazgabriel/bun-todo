import routes from './routes'

const port = process.env.PORT ? Number(process.env.PORT) : 3000

Bun.serve({
  fetch(req) {
    const { pathname } = new URL(req.url)
    console.log(`[${req.method}] ${pathname}`)
    return routes(req, pathname)
  },
  port,
})
