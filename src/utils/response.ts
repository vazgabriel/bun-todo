type ObjectOrArray = Record<string, unknown> | unknown[]

export function responseJSON(json: ObjectOrArray, status = 200) {
  return new Response(JSON.stringify(json), {
    status,
    headers: {
      'content-type': 'application/json',
    },
  })
}
