const http = require('http')
const url = require('url')

const imagesJson = require('./static/task.json')
const config = require('./static/config.json')

const env = process.env.NODE_ENV === 'development' ? 'dev' : 'prod'

const queryKeysConfig = [
  {
    key: 'page',
    formatInt: true,
  },
  {
    key: 'pageSize',
    formatInt: true,
  },
  {
    key: 'keyword',
  },
]

http
  .createServer((request, response) => {
    if (request.method === 'OPTIONS') {
      response.writeHead(204, {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
      })
      response.end()
      return
    }

    if (request.method !== 'GET') {
      response.writeHead(405)
      response.end()
      return
    }

    const { searchParams } = new url.URL(
      request.url,
      'http://' + request.headers.host + '/'
    )

    const defaultParams = {
      page: 1,
      pageSize: 20,
      keyword: '',
    }

    queryKeysConfig.forEach((i) => {
      if (searchParams.get(i.key)) {
        defaultParams[i.key] = i.formatInt
          ? parseInt(searchParams.get(i.key))
          : searchParams.get(i.key)
      }
    })

    // @TODO: should validate params & define error structure

    let data = imagesJson
    const startIndex = (defaultParams.page - 1) * defaultParams.pageSize
    if (defaultParams.keyword) {
      data = data.filter((i) => i.name.indexOf(defaultParams.keyword) > -1)
    }

    const responseJson = data.slice(
      startIndex,
      startIndex + defaultParams.pageSize
    )

    response.writeHead(200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
    })
    response.end(JSON.stringify(responseJson))
  })
  .listen(config[env].port)
