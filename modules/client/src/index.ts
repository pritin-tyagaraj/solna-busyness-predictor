import express from 'express'
import path from 'path'
import routes from './routes/index'

const app = express()

// Configure view engine
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

// Routes
app.use('/', routes)

// Start server
const port = 3000
app.listen(port, err => {
  if (err) {
    return console.error(err)
  }

  return console.log(`Server running on port ${port}`)
})
