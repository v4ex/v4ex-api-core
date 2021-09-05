require('dotenv').config()

const mongoose = require('mongoose')

mongoose.connect(process.env.CORE_MONGO_URI)

module.exports = mongoose
