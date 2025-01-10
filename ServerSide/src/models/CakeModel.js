const mongoose = require('mongoose')

const Schema = mongoose.Schema

const cakeModel = Schema({
        precio: {type: Number, required: true},
        nombre: {type: String, required: true},
        tamano: {type: Number, required: true},
        descripcion: {type: String, required: true},
        rinde: {type: Number, required: true},
        categoria: {type: String, required: true}, //Preguntar a lu qué cosas querría acá (tortas, budines, postres, salados, etc )
        imagenes: [{ url: String, public_id: String }], 
        createdAt: {type: Date, default: Date.now} 

})

module.exports = mongoose.model('cakes', cakeModel)