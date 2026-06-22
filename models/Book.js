const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    bookTitle: String,
    author: String,
    price: Number,
    quantity: Number,
    available: Boolean
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;