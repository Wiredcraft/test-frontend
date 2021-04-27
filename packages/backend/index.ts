import Application = require('koa')
import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as cors from '@koa/cors'
import {photosService} from './photos/photos'

function registerApi(app: Application) {
  const api = new Router({prefix: '/api'})

  /**
   * Get photo list in pagination
   *
   * @query page - page index, from 1
   * @query keyword - search photos witch the name match to `keyword`
   */
  api.get('/photos', (ctx) => {
    const {request} = ctx
    const {page, keyword} = request.query
    ctx.body = {
      status: 'success',
      data: photosService.find(parseInt(page as string), keyword as string)
    }
  })

  app.use(api.routes()).use(api.allowedMethods())
}

const app = new Koa()
app.use(cors())
registerApi(app)

const port = process.env.BACKEND_SERVER_PORT || 8081
app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})
