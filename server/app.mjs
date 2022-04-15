import http from 'http';
import { URL, fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs/promises';

const dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 *
 * @typedef {{ url: URL, req: http.IncomingMessage, res: http.ServerResponse }} Context
 */

/**
 *
 * @param {http.IncomingMessage} req
 */
function parseRequestUrl(req) {
  const url = `http://${req.headers.host}${req.url}`;
  const urlObj = new URL(url);
  return urlObj;
}

/** @type {[]} */
const json = JSON.parse(await fs.readFile(path.join(dirname, 'data.json'), 'utf-8'));

/**
 *
 * @param {Context} ctx
 * @param {any} data
 */
async function sendJson(ctx, data) {
  const { res } = ctx;
  const jsonString = JSON.stringify(data);
  const length = Buffer.byteLength(jsonString, 'utf-8');

  res.statusCode = 200;
  res.setHeader('content-length', length);
  res.setHeader('content-type', 'application/json');
  res.end(jsonString);
}

/**
 *
 * @param {Context} ctx
 */
async function sendData(ctx) {
  const { url, req, res } = ctx;
  const params = url.searchParams;
  const offset = Number(params.get('offset') ?? 0);
  const limit = Number(params.get('limit') ?? 10);
  const keywords = params.get('keywords');
  let data = json;
  if (keywords) {
    data = json.filter(({ name }) => name.includes(keywords));
  }
  const result = data.slice(offset, offset + limit);
  await sendJson(ctx, result);
}

/**
 *
 * @param {Context} ctx
 */
async function cors(ctx) {
  const { res } = ctx;

  res.setHeader('Access-Control-Allow-Origin', '*');
}

/**
 *
 * @param {Context} ctx
 */
async function router(ctx) {
  const { url, res } = ctx;

  if (url.pathname === '/api/data') {
    sendData(ctx);
    return;
  }


  res.statusCode = 200;
  res.end('ok');
}

/**
 *
 * @param {Context} ctx
 */
async function dispatch(ctx) {
  await cors(ctx);
  await router(ctx);
}

/**
 *
 * @param {http.IncomingMessage} req
 * @param {http.ServerResponse} res
 */
function callback(req, res) {
  const url = parseRequestUrl(req);
  const ctx = {
    url,
    req,
    res,
  };
  dispatch(ctx);
}

function bootstrap() {
  const port = 8100;
  const server = http.createServer(callback);
  server.listen(port);

  console.log(`start server on http://127.0.0.1:${port}`);
}

bootstrap();
