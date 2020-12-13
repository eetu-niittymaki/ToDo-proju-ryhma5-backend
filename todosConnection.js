const Validator = require('jsonschema').Validator
const validator = new Validator()
const express = require('express')
const schemas = require('./model/schemas.js')
const connection = require('./database/cruderepository.js')
const cors = require('cors')
const router = express.Router()
router.use(express.json(), cors(), express.static('../ToDo-proju-ryhma5-frontend/build'), (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})

// Get all
router.get('/todos/', async (req, res) => {
  try {
    const sort = req.query.sort
    const order_by = req.query.order_by
    await connection.findAll(sort, order_by)
      .then((results) => res.status(200).send(results))
      .catch((err) => res.status(400).send(err))
  } catch (error) {
    console.log(error)
  }
})

// Get specific
router.get('/todos/:todos([0-9]+)', async (req, res) => {
  try {
    const id = Number(req.params.todos)
    validate(id, schemas.properties.id)
    await connection.findById(id)
      .then((results) => res.status(200).send(results))
      .catch((err) => res.status(404).send(err))
  } catch (error) {
    res.send(error)
  }
})

// Post new
router.post('/todos/', async (req, res) => {
  try {
    const task = req.body.task
    const priority = req.body.priority
    const due_date = req.body.due_date
    const is_done = req.body.is_done
    await connection.save(task, priority, due_date, is_done)
      .then((results) => res.status(201).send(results))
      .catch((err) => res.status(400).send(err))
  } catch (error) {
    res.send(error)
  }
})

// UPDATE is_done true/false
router.put('/todos/:todos([0-9]+)', async (req, res) => {
  try {
    const id = Number(req.params.todos)
    const boolean = req.body.is_done
    validate(id, schemas.properties.id)
    await connection.updateIsDone(id, boolean)
      .then((results) => res.status(201).send(results))
  } catch (error) {
    res.send(error)
  }
})

// Delete
router.delete('/todos/:todos([0-9]+)', async (req, res) => {
  try {
    const id = Number(req.params.todos)
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

// Delete completed
router.delete('/todos/', async (req, res) => {
  try {
    await connection.deleteCompleted()
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
