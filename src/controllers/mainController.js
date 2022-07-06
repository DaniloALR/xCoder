const user = require('../users/users');
const { validationResult } = require('express-validator')



const mainController = {
    home: (req,res)=>{
        res.render('home')
    },
    login: (req,res)=>{
        res.render('login')
    },
    loginUser: (req,res)=>{
        const { email, senha } = req.body
        let errors = validationResult(req)
        
        
        if(errors.isEmpty()){
            
        } else {
            return res.render('login', console.log({errors: errors.mapped()}))
        }
        
        const usersExist = user.find(usuario => {
            return usuario.email === email && usuario.senha == senha
        });
        
        if(!usersExist) {
            return res.redirect('/login')
        } else {
            return res.redirect('/')
        }
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