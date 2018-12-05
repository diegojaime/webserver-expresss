const express = require('express')
const app = express()
const hbs = require('hbs')
require('./hbs/helpers')

const port = process.env.PORT || 3000

//Middleware se ejecuta siempre, independientemente de la página que se solicite i.e. /, /data, /ejemplo etc
app.use(express.static(__dirname + '/public'))


//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')
console.log(__dirname + '/public')


app.get('/', (req, res) => {
    //res.send('Hello World')
    /*let salida = {
        nombre: 'Diego',
        edad: '34',
        url: req.url
    }
    res.send(salida)
    */
    res.render('home', {
        nombre: 'Diego jaime'
    })

})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/data', (req, res) => {
    //console.log(req)
    res.send('Hello /data')
})


app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`)
})