import { response400, response404, responseError } from '@utils/errors'
import TodoModel from '@models/todo'
import { responseJSON } from '@utils/response'

export default class TodoController {
  static getTodos() {
    return responseJSON(TodoModel.getTodos())
  }

  static getTodoById(_id: string) {
    const id = parseInt(_id, 10)
    if (!id || isNaN(id)) {
      return response400('Invalid ID')
    }

    const todo = TodoModel.getTodoById(id)
    if (!todo) {
      return response404()
    }

    return responseJSON(todo)
  }

  static async createTodo(req: Request) {
    const { description } = (await req.json()) as any // not sure why this is needed
    if (!description?.length || typeof description !== 'string') {
      return response400('Description is required')
    }

    return responseJSON(TodoModel.createTodo(description))
  }

  static completeTodo(_id: string) {
    const id = parseInt(_id, 10)
    if (!id || isNaN(id)) {
      return response400('Invalid ID')
    }

    const todo = TodoModel.getTodoById(id)
    if (!todo) {
      return response404()
    }

    if (todo.completed_at) {
      return response400('TODO already completed')
    }

    return responseJSON(TodoModel.completeTodo(id))
  }
}
