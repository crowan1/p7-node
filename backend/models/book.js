const mongoose = require('mongoose')

const ratingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    grade: { type: Number, required: true },
});


// Schéma du livre 
const Book = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    title: { type: String, required: true },
    author: { type: String, required: true },
    imageUrl: { type: String, required: true },
    year: { type: Number, required: true },
    genre: { type: String, required: true },
    ratings: {
        type: [ratingSchema],
        default: [],
    },
    averageRating: { type: Number, default: 0 },
});

module.exports = mongoose.model('Book', Book)

