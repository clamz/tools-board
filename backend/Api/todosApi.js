var Todo = require('../models/Todo')

module.exports = function (server) {

  server.get('/todos', function (req, res, next) {
    Todo.find(null).then((todo) => {
      res.send(todo)
      next()
    })
  })

  server.post('/todos', function (req, res, next) {
    if (!req.body.label) {
      res.send(new Error('Label is mandatory'))
      next()
      return
    }
    var todo = new Todo({
      label: req.body.label,
      checked: req.body.checked || false
    })
    todo.save()
    res.send(todo)

    next()
  })

  server.post('/todos/:id/state', function (req, res, next) {
    if (!req.body.state) {
      res.send(new Error('state param is mandatory'))
      next()
      return
    }
    Todo.findOneAndUpdate({ '_id': req.params.id }, { state: req.body.state }, null, function (err, todo) {
      if (err) {
        res.send(new Error('Error', err))
        return next()
      }
      todo.save()
      res.send(todo)

      next()
    })
  })

  server.post('/todos/:id/uncheck', function (req, res, next) {
    Todo.findOneAndUpdate({ '_id': req.params.id }, { checked: false }, null, function (err, todo) {
      if (err) {
        res.send(new Error('Error', err))
        return next()
      }
      todo.save()
      res.send(todo)

      next()
    })
  })

  server.del('/todos/:id', function (req, res, next) {
    Todo.findByIdAndRemove(req.params.id, function (err, todo) {
      if (err) {
        res.send(new Error('Error', err))
        return next()
      }

      res.send('success')

      next()
    })
  })

  server.get('/todos/:id', function (req, res, next) {

    // const tool = find(tools.tools, t => t.id === req.params.id)
    // res.send(tool)

    // return next()
  })


}
