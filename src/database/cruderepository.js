const mysql = require('mysql')
const config = require('./config.js')

const connection = mysql.createPool(config)

class ConnectionFunctions {
  static connect () {
    connection.getConnection((err) => {
      if (err) throw err
    })
  }

  static close () {
    connection.end()
  }

  // Print all
  static findAll () {
    return new Promise((resolve, reject) => {
      if (connection) {
        connection.query('SELECT * FROM locations', (err, locations) => {
          if (err) throw (err)
          resolve(locations)
        })
      } else {
        reject(Error)
      }
    })
  }

  // By id
  static findById (id) {
    return new Promise((resolve, reject) => {
      if (connection) {
        connection.query('SELECT * FROM locations WHERE id = ' + connection.escape(id), (err, locations) => {
          if (err) throw (err)
          if (!locations.length) {
            reject(`No location with id = ${id} `)
          } else {
            resolve(locations)
          }
        })
      } else {
        reject(Error)
      }
    })
  }

  // Add new
  static save (lat, lon) {
    return new Promise((resolve, reject) => {
      if (connection) {
        const sql = `INSERT INTO locations (latitude, longitude) VALUES (${connection.escape(lat)}, ${connection.escape(lon)})`
        connection.query(sql, () => {
          resolve(`Added location with latitude: ${lat} longitude: ${lon} `)
        })
      } else {
        reject(Error)
      }
    })
  }

  // Delete
  static deleteById (id) {
    return new Promise((resolve, reject) => {
      if (connection) {
        connection.query('DELETE FROM locations WHERE id = ' + connection.escape(id), (err, result) => {
          if (err) throw (err)
          if (result.affectedRows === 0) {
            reject(`No location with id = ${id} `)
          } else {
            resolve(`Deleted row with id = ${id}`)
          }
        })
      } else {
        reject(Error)
      }
    })
  }
}

module.exports = ConnectionFunctions
