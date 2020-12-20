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

  // GET all tasks
  static findAll (task, sort, order_by) {
    return new Promise((resolve, reject) => {
      if (connection) {
        connection.query(`SELECT id, 
                                 task, 
                                 priority, 
                                 (@timestamp := DATE(timestamp)) AS timestamp,
                                 (@due_date := DATE(due_date)) AS due_date, 
                                 is_done 
                          FROM todo
                          WHERE task LIKE '%${task}%'
                          ORDER BY ${sort} ${order_by}`, 
                          (err, task) => {
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

  // ADD new task
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

  // Delete specific task
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

  // DELETED tasks marked as completed
  static deleteCompleted () {
    return new Promise((resolve, reject) => {
      if (connection) {
        connection.query('DELETE FROM todo WHERE is_done = 1', (err, result) => {
          if (err) throw (err)
          if (result.affectedRows === 0) {
            reject(`No task to delete`)
          } else {
            resolve(`Deleted completed tasks`)
          }
        })
      } else {
        reject(Error)
      }
    })
  }
}

module.exports = ConnectionFunctions