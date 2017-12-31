var { Doc, SubDoc } = require('../models/Doc')

module.exports = function (server) {
  server.get('/docs', function (req, res, next) {
    Doc.find(null).then(doc => {
      res.send(doc)
      next()
    })
  })

  server.get('/docs/insertMock', function (req, res, next) {

    const subDoc = new SubDoc({
      title: 'Test2 child',
      action: '',
      content: '# test2 childffsdfdfsdfsdfsdd'
    })
    const subDocs = [subDoc]
    const doc = new Doc({
      title: 'Test2',
      action: '',
      items: subDocs,
      content: '# test'
    })

    doc.save()
    res.send(doc)
    next()
  })
}
