var Tool = require('../models/Tool')

module.exports = function (server) {

  server.get('/tools', function (req, res, next) {
    Tool.find(null).then((tools) => {
      res.send(tools)
      next()
    })
  })

  server.post('/tools', function (req, res, next) {
    var tool = new Tool({
      label: 'Doc2',
      icon: 'build'
    })
    tool.save()
    res.send(tool)

    next()
  })

  server.get('/tools/:id', function (req, res, next) {

    // const tool = find(tools.tools, t => t.id === req.params.id)
    // res.send(tool)

    // return next()
  })


}
