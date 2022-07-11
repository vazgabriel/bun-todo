import todo from '@routes/todo'
import { response404 } from '@utils/errors'
import { responseJSON } from '@utils/response'

export default function routes(request: Request, _pathname: string) {
  const [, pathname, ...params] = _pathname.split('/')

  switch (pathname) {
    case '':
      return responseJSON({ message: 'Welcome to TODO' })
    case 'todo':
      return todo(request, params)
    default:
      return response404()
  }
}
