const http = require('http')

http.createServer((req, res) => {

        //Por default la respuesta es una pagina html pero la podemos cambiar con el siguiente comando a 
        //una salida tipo JSON como si fuera una API
        res.writeHead(200, { 'content-type': 'application/json' })

        let salida = {
            nombre: 'Diego',
            edad: '34',
            url: req.url
        }
        res.write(JSON.stringify(salida))
            //res.write('Hola mundo')
        res.end()
    })
    .listen(8080)

console.log('Escuchando el puerto 8080');