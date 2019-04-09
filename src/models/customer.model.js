let mongoose = require('mongoose')

const server = 'cluster0-shard-00-00-gkksz.mongodb.net:27017'
const database = 'test'
const user = 'sandli'
const password = 'mongodb'
mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`)

let CustomerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        require: true,
        unique: true
    }
})

module.exports = mongoose.model('Customer', CustomerSchema)