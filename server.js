/**
 * server
 * by xiaoT
 */

const Koa = require('koa')
const static = require('koa-static')
const app = new Koa()
const port = process.env.PORT || 8080
app.use(static('./build'))

app.listen(port)

console.log(`server run on port: ${port}`)
