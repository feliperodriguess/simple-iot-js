import styled from 'styled-components'
import { View, TouchableOpacity, Text } from 'react-native'

export const Container = styled(View)`
  flex: 1;
  background-color: #16171b;
  padding: 0 16px;
  align-items: center;
  justify-content: center;
  color: white;
`

export const Title = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: white;
`

export const StandByButton = styled(TouchableOpacity)`
  background-color: #11a8fd;
  border-radius: 100px;
  width: 75px;
  height: 75px;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
`
