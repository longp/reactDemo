var mongoose = require('mongoose')
var Schema = mongoose.schema;

var commentSchema = new Schema({
  author:String,
  text:String
})

var Comment = mongoose.model('Comment', commentSchema);
module.export=Comment;
