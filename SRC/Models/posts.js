const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  title: String,
  description: String,
  text: String
})

module.exports = mongoose.model('Post', postSchema)
