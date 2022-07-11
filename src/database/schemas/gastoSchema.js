const mongoose = require('mongoose')
const { TurboModuleRegistry } = require('react-native')

const gastoSchema = mongoose.Schema({

    monto: Int32Array,
    fecha: String,
    categoria: String,
    descripcion: String

})

module.exports = mongoose.model('gasto', gastoSchema)