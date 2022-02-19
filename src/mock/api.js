const express = require('express')
const fs = require('fs')
const path = require('path')
const cors = require('cors')
const App = express()
const port = 3002

App.all('*', cors({ origin: '*' }), (request, response, next) => {
    fs.readFile(
        path.join(__dirname, './dataArr.json'),
        'utf-8',
        (err, data) => {
            response.locals['data'] = JSON.parse(data)
            next()
        }
    )
})

App.get('/images', (request, response) => {
    const { _page = 1, _limit = 30, _search = '' } = request.query
    console.log(response.locals)
    const list =
        response.locals['data']
            .filter(({ name }) => name.includes(_search))
            .slice((_page - 1) * _limit, _page * _limit) || []
    response.json(list)
})

App.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
})
