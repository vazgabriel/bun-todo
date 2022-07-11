import { Database } from 'bun:sqlite'
const db = new Database('mydb.sqlite')

export default class TodoModel {
  static getTodos() {
    return db.query('SELECT * from todo').all()
  }

  static getTodoById(id: number) {
    return db.query('SELECT * from todo WHERE id = ?').get(id)
  }

  static createTodo(description: string) {
    const insert = db.prepare(
      'INSERT INTO todo(description, created_at) VALUES(?, ?) RETURNING *'
    )
    return insert.get(description, new Date().toISOString())
  }

  static completeTodo(id: number) {
    const update = db.prepare(
      'UPDATE todo SET completed_at = ? WHERE id = ? RETURNING *'
    )
    return update.get(new Date().toISOString(), id)
  }
}
