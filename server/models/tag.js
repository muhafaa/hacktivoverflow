const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tagSchema = new Schema({})

module.exports = mongoose.model('Products', tagSchema)
