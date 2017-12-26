const mongoose = require('mongoose')
const mongooseTimestamp = require('mongoose-timestamp')

const toolSchema = new mongoose.Schema({
  label: String,
  icon: String,
  date: { type: Date, default: Date.now }
}, { collection: 'tools' })

toolSchema.plugin(mongooseTimestamp)

module.exports = exports = mongoose.model('Tool', toolSchema)
