const mongoose = require("mongoose");
const Book = require("./models/Book");

mongoose.connect("mongodb://127.0.0.1:27017/schoolDB")
.then(async () => {

    await Book.deleteMany({});

    await Book.insertMany([
        {
            bookTitle: "JavaScript Basics",
            author: "John Doe",
            price: 500,
            quantity: 10,
            available: true
        },
        {
            bookTitle: "MongoDB Guide",
            author: "David Lee",
            price: 700,
            quantity: 5,
            available: true
        },
        {
            bookTitle: "Node.js Mastery",
            author: "Alex Smith",
            price: 650,
            quantity: 8,
            available: true
        },
        {
            bookTitle: "React Complete",
            author: "Sarah Khan",
            price: 800,
            quantity: 4,
            available: true
        },
        {
            bookTitle: "Data Structures",
            author: "Robert King",
            price: 550,
            quantity: 6,
            available: false
        }
    ]);

    const books = await Book.find();

    console.log(books);

    mongoose.connection.close();

})
.catch((err) => {
    console.log(err);
});