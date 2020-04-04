import express from 'express'
const app = express()

// Routes
app.get('/', (req, res) => res.send("Hey!"))

// Start server
const port = 9000
app.listen(port, err => {
  if (err) {
    return console.error(err)
  }

  return console.log(`Server running on port ${port}`)
})