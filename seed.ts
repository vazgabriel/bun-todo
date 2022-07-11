import { Database } from 'bun:sqlite'

const seedTodos = [...new Array(20)].map((_, i) => ({
  description: `Todo ${i + 1}`,
  createdAt: new Date(2022, 6, i + 1, 0, 0, 0).toISOString(),
}))

const db = new Database('mydb.sqlite')
db.run("DROP TABLE IF EXISTS todo")
db.run(`
  CREATE TABLE todo (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    description TEXT NOT NULL,
    created_at TEXT NOT NULL,
    completed_at TEXT DEFAULT NULL
  )
`)

db.run(
  `INSERT INTO todo (description, created_at) VALUES ${seedTodos
    .map(() => '(?, ?)')
    .join(',')}`,
  seedTodos.reduce(
    (acc, { description, createdAt }) => [...acc, description, createdAt],
    []
  )
)

const rows = db.query('SELECT * FROM todo').all()
console.log(`${rows.length} TODOs populated`)
