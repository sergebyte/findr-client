import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import { IconButton, useTheme } from 'react-native-paper'

type IconButtonProps = {
  icon: string
  mode?: 'outlined' | 'contained' | 'contained-tonal'
  size?: number
  onPress: () => void
  style?: object
  iconColor?: string
  containerColor?: string
}

const IconButtonComponent: FC<IconButtonProps> = ({
  icon,
  mode = 'contained',
  size = 24,
  onPress,
  style,
  iconColor,
  containerColor,
}) => {
  const { colors } = useTheme()
  return (
    <View style={styles.shadowContainer}>
      <IconButton
        icon={icon}
        mode={mode}
        size={size}
        onPress={onPress}
        style={[styles.button, style]}
        iconColor={iconColor || colors.primary}
        containerColor={containerColor || colors.surface}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  shadowContainer: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 4,
  },
  button: { width: 50, height: 50, borderRadius: 50 },
})

export default IconButtonComponent
