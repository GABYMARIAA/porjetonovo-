const express = require ('express')
const exphbs = require('express-handlebars')
const hbs = exphbs.create({
    partialsDir:['views/partials']
})
 

const app = express()
app.use(express.static('public'))

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.get('/',(req, res)=>{

    const nome = 'joao'

    const alunos = [
        {nome: 'Gaby', beleza: 'alta'}
    ]

    const arrayalunos = alunos.map((alunos)=>{
        return alunos.nome
    })
        
    res.render('home', {arrayalunos, nome})
})

app.get('/ben',(req, res)=>{
    const cidade = {
        nome: 'Bayeux',
        estado: 'Paraíba',
        habitantes: '97 519',
    }
    res.render('ben',{cidade})
})

app.get('/contatos',(req, res)=>{
    const nomes = ('Gaby')
    const numero = 'https://wa.me/qr/EIBBSTHQ4ZDEE1'
    const instagram = 'https://www.instagram.com/gab_060?utm_source=qr&igsh=MXduOXVxZWlxaXZ6bQ=='
    res.render('contatos',{nomes, numero, instagram})
})

app.get('/login',(req,res)=>{
    res.render('login')
}) 

app.get('/blog', (req,res)=>{
    
    produtos = [
        {nome: 'calça jeans', preco: '50', desc:'calça jeans azul'},
        {nome: 'camiseta', preco: '30', desc:'camiseta do homem aranha'},
        {nome: 'Tênis', preco: '300', desc:'da nike'}
    ]
    
    res.render('blog', {produtos})

})

app.get ('/twice',(req,res)=>{
    
    twices = [
        {album: 'Eyes wide open', melhor:'Queen'},
        {album: 'formula of love ', melhor:'1,3,2'},
        {album: 'with you-th', melhor:'Bloom'}
    ]
    res.render('twice',{twices})
})

const authuser =(req,res, next) => {
    const auth = false
    if(auth){
        next()
    } else{
        res.render('falha')
    }

}
app.use(authuser)





app.listen(3000,()=> console.log('servidor funcionando em http://localhost:3000'))