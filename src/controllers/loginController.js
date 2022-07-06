const { validationResult } = require('express-validator')
const getInfoDatabase = require("../utils/getInfoDatabase")

const loginController = {
    login: (req,res)=>{
        res.render('login')
    },
    loginUser: (req,res)=>{
        const { email, senha, salvarInfo } = req.body
        let errors = validationResult(req)
        
        
        if(errors.isEmpty()){
            
        } else {
            return res.render('login', {errors: errors.mapped()})
        }
        
        const users = getInfoDatabase('users');

        const usersExist = users.find(usuario => {
            return usuario.email === email && usuario.senha == senha
        });
        
        if(!usersExist) {
            return res.redirect('/login')
        } else {
            return res.redirect('/')
        }
    },
}

module.exports = loginController