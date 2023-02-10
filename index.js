// import mongoose from "./connection.js";
import Author from "./models/author.js";

await Author.deleteMany({})

const tim = await Author.find({ firstName: 'tim' }).exec()

if (tim.length === 0) {
    // Create a new author "draft"
    const author = new Author({
        firstName: 'tim',
        lastName: 'strom',
    })
    
    // Save the changes to the collection.
    await author.save()
    console.log(`We've just inserted the Author ${author.firstName} ${author.lastName}`);
}


// // Search for all users
const authors = await Author.find({})

// Log the users currently in the database
console.log(authors);
