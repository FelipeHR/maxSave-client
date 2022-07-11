const mongoose = require('mongoose')
const { mongoPass } = require('./config.json')
const mongopath = 'mongodb+srv://Checho:2laSw16x9MUf2rAv@serverlessinstance0.wkk1z.mongodb.net/?retryWrites=true&w=majority'

module.exports = async () => {

    await mongoose.connect(mongopath, {

        useNewUrlParser: true,
        useUnifiedTopology: true,

    })

    return mongoose
}