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
      'INSERT INTO todo(description, created_at) VALUES(?, ?) returning id'
    )
    const { id } = insert.get(description, new Date().toISOString())
    return this.getTodoById(id)
  }

  static completeTodo(id: number) {
    db.run('UPDATE todo SET completed_at = ? WHERE id = ?', [new Date().toISOString(), id])
    return this.getTodoById(id)
  }
}
