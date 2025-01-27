import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, useTheme } from 'react-native-paper'

type LoginButtonProps = {
  onPress: () => void
}

const LoginButton: FC<LoginButtonProps> = ({ onPress }) => (
  <Button mode={'contained'} style={styles.button} onPress={onPress}>
    Continue
  </Button>
)

const styles = StyleSheet.create({
  button: { width: '100%', borderRadius: 50 },
})

export default LoginButton
