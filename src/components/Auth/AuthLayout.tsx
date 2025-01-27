import React from 'react'
import { View, StyleSheet } from 'react-native'
import LoginButton from './LoginButton'
import { Text } from 'react-native-paper'

export default function AuthLayout({ onPress }: { onPress: () => void }) {
  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <Text variant="displayLarge">Findr</Text>
        <Text variant="labelLarge">Never lose your goods again!</Text>
      </View>
      <LoginButton onPress={onPress} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  textBox: {
    marginBottom: 50,
    alignItems: 'center',
  },
})
