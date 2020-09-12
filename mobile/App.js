import React, { useState, useEffect } from 'react'
import api from './api'
import { Image } from 'react-native'
import { Container, StandByButton, Title } from './styles'

export default function App() {
  const [text, setText] = useState('')
  const [ledOn, setLedOn] = useState(false)

  useEffect(() => {
    setText('Press the button below and see the magic happens 🔮')
  }, [])

  async function handleLed() {
    if (ledOn) {
      const response = await api.get('on')
      setText(response.data.message)
      setLedOn(false)
    } else {
      const response = await api.get('off')
      setText(response.data.message)
      setLedOn(true)
    }
  }

  return (
    <Container>
      <Title>{text}</Title>
      <StandByButton onPress={handleLed}>
        <Image source={require('./assets/on.png')} />
      </StandByButton>
    </Container>
  )
}
