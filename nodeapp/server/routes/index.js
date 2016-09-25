module.exports = function (app) {
  app.use('/api/region', require('./region'));
}
