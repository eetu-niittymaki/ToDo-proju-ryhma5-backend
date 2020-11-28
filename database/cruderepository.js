const mysql = require('mysql')
const config = require('./configTodo.js')

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
        connection.query('SELECT * FROM todo', (err, task) => {
          if (err) throw (err)
          resolve(task)
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
        connection.query('SELECT * FROM todo WHERE id = ' + connection.escape(id), (err, task) => {
          if (err) throw (err)
          if (!task.length) {
            reject(`No task with id = ${id} `)
          } else {
            resolve(task)
          }
        })
      } else {
        reject(Error)
      }
    })
  }

  // Add new
  static save (task, priority, due_date, is_done) {
    return new Promise((resolve, reject) => {
      if (connection) {
        const sql = `INSERT INTO todo (task, priority, due_date, is_done) VALUES (${connection.escape(task)}, ${connection.escape(priority)}, 
                      ${connection.escape(due_date)}, ${connection.escape(is_done)})`
        connection.query(sql, () => {
          resolve(`Added new task `)
        })
      } else {
        reject(Error)
      }
    })
  }
  
  // UPDATE is_done true/false
  static updateIsDone (id, boolean) {
    return new Promise((resolve, reject) => {
      if (connection) {
        connection.query(`UPDATE todo SET is_done = ${connection.escape(boolean)} WHERE id = ${connection.escape(id)}`, 
        (err, task) => {
          if (err) throw (err)
          if (!task.length) {
            reject(`No task with id = ${id} `)
          } else {
            resolve(task)
          }
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
        connection.query('DELETE FROM todo WHERE id = ' + connection.escape(id), (err, result) => {
          if (err) throw (err)
          if (result.affectedRows === 0) {
            reject(`No task with id = ${id} `)
          } else {
            resolve(`Deleted task with id = ${id}`)
          }
        })
      } else {
        reject(Error)
      }
    })
  }
}

module.exports = ConnectionFunctions
