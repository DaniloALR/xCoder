const mainController = {
    home: (req,res)=>{
        res.render('home')
    },
    login: (req,res)=>{
        res.render('login')
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