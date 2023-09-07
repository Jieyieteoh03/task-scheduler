/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = "task-scheduler2";
const collection = "tasks";

// Create a new database.
use(database);

// Create a new collection.
db.createCollection(collection);
