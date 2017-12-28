const mongoose = require('mongoose')
const mongooseTimestamp = require('mongoose-timestamp')

const todoSchema = new mongoose.Schema({
  label: String,
  state: { type: String, default: 'todo' },
  date: { type: Date, default: Date.now }
}, { collection: 'todos' })

todoSchema.plugin(mongooseTimestamp)

module.exports = exports = mongoose.model('Todo', todoSchema)
