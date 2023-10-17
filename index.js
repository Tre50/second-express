import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/lorem', (req, res) => {
    res.send ('Lorum Ipsum')
})

app.get('/welcome', (req, res) => {
    res.send('Welcome Back, Andrea')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})










