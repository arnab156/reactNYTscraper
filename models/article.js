const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  summary: { type: String, required: true },
  dateOfArticle: { type: String, required: true },
  URL: { type: String, required: true },
  dateAdded: { type: Date, default: Date.now } ,
   note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
