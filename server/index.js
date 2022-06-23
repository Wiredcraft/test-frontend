const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const fs = require('fs-extra');
const path = require('path');
const cors = require('@koa/cors');
const wait = require('./utils/wait');

router.get('/images',async (ctx) => {
  const { query: { limit, offset, search = '' } } = ctx;
  // mock request loading
  await wait(100);
  const imageResource = JSON.parse(fs.readFileSync(path.resolve(__dirname, './resource/data.json'), 'utf-8'));
  const filterdResource = imageResource.filter(image => image.name.includes(search));
  const len = filterdResource.length;
  const list = filterdResource.splice(offset, limit);
  const hasMore = len > ((parseInt(offset || 0) + parseInt(limit || 0)));
  ctx.set('Access-Allow-From-Origin', 'http://localhost:8080')
  ctx.body = {
    list,
    hasMore,
  };
});

app.use(cors());

app.use(router.routes());

app.listen(3000, () => {
  console.log('starting at port 3000');
});
