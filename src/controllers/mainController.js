// const { validationResult } = require('express-validator')
// const getInfoDatabase = require("../utils/getInfoDatabase")


const mainController = {
    home: (req,res)=>{
        res.render('home')
    },
    register: (req,res)=>{
        res.render('register')
    },
    listaDeDesejos: (req,res)=>{
        res.render('listaDeDesejos')
    },
    produtoInterno: (req,res)=>{
        res.render('produtoInterno')
    },
    finalizeCompra: (req,res)=>{
        res.render('finalizeCompra')
    },
    listagemDeProduto: (req,res)=>{
        res.render('listagemDeProduto')
    },
    carrinho: (req,res)=>{
        res.render('carrinho')
    }
}

module.exports = mainController