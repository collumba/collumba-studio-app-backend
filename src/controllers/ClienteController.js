const mongoose = require('mongoose');

const Cliente = mongoose.model('Clientes');

module.exports = {
    async index(req, res){
        const resul = await Cliente.find();
        return res.json(resul);
    },
    async store(req, res){
        const resul = await Cliente.create(req.body);
        return res.json(resul);
    },
    async show(req, res){
        const resul = await Cliente.findById(req.params.id);
        return res.json(resul);
    },
    async update(req, res){
        const resul = await Cliente.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(resul);
    },
    async destroy(req, res){
        const resul = await Cliente.findByIdAndRemove(req.params.id);
        return res.json(resul);
    }
}