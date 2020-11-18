const express = require('express')
const app = express()
const locations = require('./locations.js')
const database = require('./database/cruderepository.js')
const cors = require('cors')

app.use('/locations', locations, cors())
const port = process.env.PORT || 8080

// Start server
const server = app.listen(port, async () => {
  try {
    await database.connect()
    console.log('Connection succesful')
    console.log(`Listening to port ${server.address().port}`)
  } catch (err) {
    console.log(err)
    await server.close()
  }
})
