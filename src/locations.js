const Validator = require('jsonschema').Validator
const validator = new Validator()
const express = require('express')
const schemas = require('./model/schemas.js')
const connection = require('./database/cruderepository.js')
const cors = require('cors')
const router = express.Router()
router.use(express.json(), cors(), (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

// Get all
router.get('/', async (req, res) => {
  try {
    await connection.findAll()
      .then((results) => res.status(200).send(results))
      .catch((err) => res.status(400).send(err))
  } catch (error) {
    console.log(error)
  }
})

// Get specific
router.get('/:locations([0-9]+)', async (req, res) => {
  try {
    const id = Number(req.params.locations)
    validate(id, schemas.properties.id)
    await connection.findById(id)
      .then((results) => res.status(200).send(results))
      .catch((err) => res.status(404).send(err))
  } catch (error) {
    res.send(error)
  }
})

// Post
router.post('/', async (req, res) => {
  try {
    const lat = req.body.latitude
    validate(lat, schemas.properties.latitude)
    const lon = req.body.longitude
    validate(lon, schemas.properties.longitude)
    await connection.save(lat, lon)
      .then((results) => res.status(201).send(results))
      .catch((err) => res.status(400).send(err))
  } catch (error) {
    res.send(error)
  }
})

// Delete
router.delete('/:locations([0-9]+)', async (req, res) => {
  try {
    const id = Number(req.params.locations)
    validate(id, schemas.properties.id)
    await connection.deleteById(id)
      .then((results) => res.json({
        msg: results
      }))
      .catch((err) => res.status(404).send(err))
  } catch (error) {
    console.log(error)
  }
})

function validate (value, schema) {
  validator.validate(value, schema, { throwError: true })
}

module.exports = router

// curl -i -H "Content-type: application/json" -d '{\"latitude\": 50, \"longitude\": 100}' http://localhost:8080/locations

// curl -i -X DELETE http://localhost:8080/locations/
