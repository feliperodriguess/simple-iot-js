import five from 'johnny-five'
import express from 'express'

const board = new five.Board({ port: '/dev/cu.usbmodem1431301' })

board.on('ready', () => {
  const led = new five.Led(9)
  const app = express()
  app.use(express.json())

  app.get('/on', (req, res) => {
    led.stop().off()
    led.on()

    return res.json({ message: 'Led ON ✅' })
  })

  app.get('/off', (req, res) => {
    led.stop().off()

    return res.json({ message: 'Led OFF ❌' })
  })

  app.listen(3333, () => {
    console.log('🔥 Server is running on port 3333')
  })
})
