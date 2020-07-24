/**
 * mock api
 * Mon Apr 27 20:24:37 2020
 * by xiaoT
 */

const gallery = require('./galleryData.js')

const proxy = {
  'GET /api/gallery': gallery
}

module.exports = proxy