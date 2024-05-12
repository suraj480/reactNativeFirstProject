import React from 'react'
import { View, Text } from 'react-native'

const Home = ({ route }) => {
  const { userData } = route.params;
  return (
    <View>

      <Text>Welcome {userData} to Home screen</Text>
    </View>
  )
}

export default Home
