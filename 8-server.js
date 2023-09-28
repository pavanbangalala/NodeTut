const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("Welcome to Home page")
    }
    if (req.url === '/about') {
        res.end("About Us")
    }
    res.end(`
    <h1>Oops ! This page does not exist</h1>`)
})

server.listen(5000)


