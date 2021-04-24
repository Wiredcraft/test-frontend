import Application = require('koa')
import * as Koa from 'koa'
import * as Router from 'koa-router'
import {photosService} from './photos/photos'

function registerApi(app: Application) {
  const api = new Router({prefix: '/api'})

  api.get('/photos', (ctx) => {
    const {res, request} = ctx
    const {page, keyword} = request.query
    ctx.body = {
      status: 'success',
      data: photosService.find(parseInt(page as string))
    }
  })

  app.use(api.routes()).use(api.allowedMethods())
}

const app = new Koa()
registerApi(app)

const port = process.env.BACKEND_SERVER_PORT || 8081
app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})
