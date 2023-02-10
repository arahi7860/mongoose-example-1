import mongoose from "./connection.js";
import Author from "./models/author.js";

// Create a new author "draft"
const author = new Author({
    firstName: 'sam',
    lastName: 'zanca',
})

// Save the changes to the collection.
await author.save()

console.log(`We've just inserted the Author ${author.firstName} ${author.lastName}`);

// Search for all users
const authors = await Author.find({})

// Log the users currently in the database
console.log(authors);
