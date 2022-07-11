import { responseJSON } from '@utils/response'

const isDev = process.env.NODE_ENV !== 'production'

export function response400(message = 'Bad request') {
  return responseJSON({ message }, 400)
}

export function response404() {
  return responseJSON({ message: 'Not found' }, 404)
}

export function responseError(error: Error) {
  console.error(error)
  return responseJSON({ error: isDev ? error : undefined }, 500)
}
