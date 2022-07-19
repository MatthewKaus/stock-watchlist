const { Schema } = require('mongoose');

/* 
    This is a subdocument schema, it wont become its own model
    but we'll use it as a the schema for the User's `savedStocks` 
    array in User.js
*/

const stockSchema = new Schema({

})

module.exports = stockSchema;