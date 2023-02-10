import mongoose from "../connection.js";

const authorSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
})

const Author = mongoose.model("Author", authorSchema)

export default Author;
