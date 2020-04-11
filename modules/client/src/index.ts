import express from 'express'
import path from 'path'
import * as routes from './routes'

const app = express()
app.set('view engine', 'ejs')
app.set('views', path.resolve('dist/view-templates'))
app.use(express.static('dist'))

// Routes
app.get('/', routes.home)
app.get('/subscribe', routes.subscribe)

// Start server
const port = parseInt(process.env.PORT) || 9000
app.listen(port, err => {
  if (err) {
    return console.error(err)
  }

  return console.log(`Server running on port ${port}`)
})