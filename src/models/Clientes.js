const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    email: {type: String, required: true},
    telefone: {type: String, required: true},
    endereco: {type: String, required: true},
    created_at:{ type: Date, required: true, default: Date.now }
});

mongoose.model('Clientes', clienteSchema);