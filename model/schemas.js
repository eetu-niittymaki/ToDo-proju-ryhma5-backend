const schemas = {
  properties:  {
     id: {
      type: 'number',
      minimum: 1
    },
    latitude: {
      type: 'number',
      minimum: -90,
      maximum: 90
    },
    longitude: {
      type: 'number',
      minimum: -180,
      maximum: 180
    }
  }
}

module.exports = schemas
