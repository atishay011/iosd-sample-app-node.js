
const mongoose = require("mongoose")

const CommentsSchema = mongoose.Schema({
  message: String,
   replies: [String]
})

module.exports = mongoose.model('Comment', CommentsSchema);