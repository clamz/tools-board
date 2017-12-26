const mongoose = require('mongoose')
const mongooseTimestamp = require('mongoose-timestamp')

const todoSchema = new mongoose.Schema({
  label: String,
  checked: { type: Boolean, default: false },
  date: { type: Date, default: Date.now }
}, { collection: 'todos' })

todoSchema.plugin(mongooseTimestamp)

module.exports = exports = mongoose.model('Todo', todoSchema)
