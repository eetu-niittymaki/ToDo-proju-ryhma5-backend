const schemas = {
  properties:  {
     id: {
      type: 'number',
      minimum: 1
    },
    priority: {
      type: 'number',
      minimum: 1,
      maximum: 10
    }
  }
}

module.exports = schemas
