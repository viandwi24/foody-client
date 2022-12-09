export default defineMiddleware((_req, _res, next) => {
  console.log('auth')
  next()
})
