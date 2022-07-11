import TodoController from '@controllers/todo'
import { response400, response404 } from '@utils/errors'

export default function todo(req: Request, params: string[]) {
  switch (req.method) {
    case 'GET':
      return params.length
        ? TodoController.getTodoById(params[0])
        : TodoController.getTodos()
    case 'POST':
      return TodoController.createTodo(req)
    case 'PATCH':
      return params.length
        ? TodoController.completeTodo(params[0])
        : response400('You must provide an ID')
    default:
      return response404()
  }
}
