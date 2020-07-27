/**
 * server
 * by xiaoT
 */

const Koa = require('koa')
const static = require('koa-static')
const Router = require('koa-router')
const app = new Koa()
const port = process.env.PORT || 8080
const router = new Router()

// mock data
const gallery = require('./__mocks__/galleryData.js')

// static middleware
app.use(static('./build'))
// route config
router.get('/api/gallery', (ctx) => {
  ctx.body = gallery
})
app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(port)

console.log(`server run on port: ${port}`)
