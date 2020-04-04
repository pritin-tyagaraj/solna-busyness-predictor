import express from 'express'
import path from 'path'

const app = express()

// Routes
app.get('/', (req, res) => res.send("Hey!"))

// Start server
const port = 3000
app.listen(port, err => {
  if (err) {
    return console.error(err)
  }

  return console.log(`Server running on port ${port}`)
})