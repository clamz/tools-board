
var restify = require('restify')
var socketIo = require('socket.io')
var mongoose = require('mongoose')

var toolsApi = require('./Api/toolsApi')
var todosApi = require('./Api/todosApi')
var docsApi = require('./Api/docsApi')

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

const server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
})

server.use(restify.plugins.acceptParser(server.acceptable))
server.use(restify.plugins.queryParser())
server.use(restify.plugins.bodyParser())

toolsApi(server)
todosApi(server)
docsApi(server)

const io = socketIo.listen(server.server)

io.on('connection', function(socket) {
  console.log('fdsfds')
  // Send a hello message with the user's id
  socket.emit('message', 'Hey cdszds')
  socket.on('add', function(message) {
    console.log('message:' + message)
    io.emit('add message', message)
  })
})

server.listen(8081, function () {
  console.log('%s listening at %s', server.name, server.url)
})
