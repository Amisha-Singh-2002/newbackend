require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
    })
app.get('/about', (req, res) => {
    res.send('About Page')
    })
app.get('/contact', (req, res) => {
    res.send('<h1>Contact Page</h1>')
})
app.get('/profile', (req, res) => { 
    res.send('<h2>Profile Page</h2>')
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    })