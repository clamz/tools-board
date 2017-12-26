
var restify = require('restify')

var toolsApi = require('./Api/toolsApi')

var mongoose = require('mongoose')

const opts = {
  promiseLibrary: global.Promise,
  config: {
    autoIndex: true
  },
  useMongoClient: true
}

mongoose.Promise = opts.promiseLibrary

mongoose.connect('mongodb://192.168.33.10/toolsBoard', opts)
  .then(() => {
    console.log('connect to mongo is successful')
  }, () => {
    console.log('failed to mongo is successful')
  })

var toolsSchema = new mongoose.Schema({
  label: String,
  doc: String,
  date: { type: Date, default: Date.now }
})

var toolsModel = mongoose.model('tools', toolsSchema)

toolsModel.find(null, (err, tools) => {
  if (err) { throw err }
  console.log(tools)
})

const server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
})

server.use(restify.plugins.acceptParser(server.acceptable))
server.use(restify.plugins.queryParser())
server.use(restify.plugins.bodyParser())

toolsApi(server)

server.get('/echo/:name', function (req, res, next) {
  res.send(req.params)
  return next()
})

server.listen(8081, function () {
  console.log('%s listening at %s', server.name, server.url)
})
