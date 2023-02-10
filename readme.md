# Mongoose

This is a repository with a working examples of mongoose to create models and using them to interract with mongo.

To run this repo, make sure you've got a mongo instance running on the default port (`27017`).

## File Structure

- `connection.js` is used to establish a connection to the mongodb database.
- `models/`: defines a of out documents as schemas so that we can make changes to our data consistently.
  - `models/author.js`: defines an author document with the properties of `firstName` and `lastName`. Important to node that this file is using the mongoose exported by `connections.js`.
- `index.js`: makes use of the model in `models/author.js` which allows us to run mongosh commands via javascript.

> Note: we're using `"type": "module"` which allows us to use `await` at the top level.

## Resources

- `brew install mongodb-compass` (visual tool)

- [Mongoose Docs](https://mongoosejs.com/docs/index.html)

