const express = require ("express")
const app = express()
var create = require('./banco.js')

app.listen(8081, function(){
    console.log("Servidor rodando na porta 8081")
})

app.get("/", function(req,res){
    res.end("Seja bem vindo ao Node JS")
})

app.get("/cadastrar/:nome/:endereco/:bairro/:cep/:cidade/:estado/:observacao", function(req,res){
    res.end("Cadastrado com Sucesso :)")
    create(req.params.nome, req.params.endereco, req.params.bairro, req.params.cep, req.params.cidade, req.params.estado, req.params.observacao)
})