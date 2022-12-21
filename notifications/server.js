const { createServer } = require('http')
const { Server } = require('socket.io')

const httpServer = createServer()
const io = new Server(httpServer, {
  pingInterval: 5000,
  cors: {
    origin: '*',
  },
})

io.on('connection', (socket) => {
  console.log('a user connected', socket.id)

  socket.on('disconnect', () => {
    console.log('user disconnected', socket.id)
  })

  socket.on('new:order', (data) => {
    console.log('new:order', data, 'from', socket.id)
    // broadcast to all connected clients
    io.emit('new:order', data)
  })
})

const p = process.env.PORT || 3000
httpServer.listen(p, () => {
  console.log('listening on ', p)
})
