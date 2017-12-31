const mongoose = require('mongoose')
const mongooseTimestamp = require('mongoose-timestamp')

const subDocSchema = new mongoose.Schema({
  action: String,
  title: String,
  content: String,
  date: { type: Date, default: Date.now }
}, { collection: 'subDocs' })

const docSchema = new mongoose.Schema({
  action: String,
  title: String,
  items: [subDocSchema],
  content: String,
  date: { type: Date, default: Date.now }
})

docSchema.plugin(mongooseTimestamp)

subDocSchema.plugin(mongooseTimestamp)

module.exports.Doc = exports.Doc = mongoose.model('Doc', docSchema)
module.exports.SubDoc = exports.SubDoc = mongoose.model('SubDoc', subDocSchema)
