const Validator = require('jsonschema').Validator
const validator = new Validator()
const express = require('express')
const schemas = require('./model/schemas.js')
const connection = require('./database/cruderepository.js')
const cors = require('cors')
const router = express.Router()
router.use(express.json(), cors(), express.static('build'), (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

// Get all tasks
router.get('/api/', async (req, res) => {
  try {
    const task = req.query.task
    const sort = req.query.sort
    const order_by = req.query.order_by
    const results = await connection.findAll(task, sort, order_by)
    await res.status(200).send(results)
  } catch (error) {
      res.status(404).send(error)
  }
}) 

// Get specific
router.get('/api/:api([0-9]+)', async (req, res) => {
  try {
    const id = Number(req.params.api)
    validate(id, schemas.properties.id)
    const results = await connection.findById(id)
    await res.status(200).send(results)
  } catch (error) {
      res.status(404).send(error)
  }
})

// POST new task
router.post('/api/', async (req, res) => {
  try {
    const task = req.body.task
    const priority = req.body.priority
    const due_date = req.body.due_date
    const is_done = req.body.is_done
    const results = await connection.save(task, priority, due_date, is_done)
    await res.status(201).send(results)
  } catch (error) {
      res.status(400).send(error)
  }
})

// UPDATE is_done true/false
router.put('/api/:api([0-9]+)', async (req, res) => {
  try {
    const id = Number(req.params.api)
    const boolean = req.body.is_done
    validate(id, schemas.properties.id)
    const results = await connection.updateIsDone(id, boolean)
    await res.status(201).send(results)
  } catch (error) {
      console.log(error)
  }
})

// Delete task by ID 
router.delete('/api/:api([0-9]+)', async (req, res) => {
  try {
    const id = Number(req.params.api)
    validate(id, schemas.properties.id)
    await connection.deleteById(id)
      .then((results) => res.json({
        msg: results
      }))
  } catch (error) {
      res.status(404).send(error)
  }
})

// Delete completed tasks
router.delete('/api/', async (req, res) => {
  try {
    await connection.deleteCompleted()
      .then((results) => res.json({
        msg: results
      }))
  } catch (error) {
      res.status(404).send(error)
  }
})

function validate (value, schema) {
  validator.validate(value, schema, { throwError: true })
}

module.exports = router