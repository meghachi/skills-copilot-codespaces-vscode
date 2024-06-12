//Create web server 1
const express = require('express')
const app = express()
const port = 3000

// Use express.json() to parse incoming JSON data
app.use(express.json())

// Create an array to store the comments
let comments = []

// Create a route to get all the comments
app.get('/comments', (req, res) => {
  res.json(comments)
})

// Create a route to create a new comment
app.post('/comments', (req, res) => {
  const comment = req.body
  comments.push(comment)
  res.status(201).json(comment)
})

// Start the server
app.listen(port, () => {
  console.log(`Express app listening on http://localhost:${port}`)
})
