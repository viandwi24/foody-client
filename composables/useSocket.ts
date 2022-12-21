import { io, Socket } from 'socket.io-client'
import { DefaultEventsMap } from '@socket.io/component-emitter'

// const url = 'ws://localhost:4000'
const url = 'wss://foody.viandwi24.site'

// define window.io
declare global {
  interface Window {
    io?: Socket<DefaultEventsMap, DefaultEventsMap>
  }
}

export const useSocket = () => {
  onMounted(() => {
    if (!window.io) {
      const s = io(url)
      createEventsIO(s)
      window.io = s
    }
    console.log('socket.io instance created', window.io)
  })

  onBeforeUnmount(() => {
    if (window.io) {
      window.io.disconnect()
      window.io = undefined
    }
  })

  return {
    socket: computed(() => window.io),
  }
}

export const createEventsIO = (socket: Socket) => {
  socket.on('connect', () => {
    console.log('[socket.io] connected')
  })
  socket.on('disconnect', () => {
    console.log('[socket.io] disconnected')
  })
}
