import { useAppTheme } from '@/hooks/useAppTheme'
import { View } from 'react-native'
import { Button, Text, useTheme } from 'react-native-paper'

const MapScreen = () => {
  const { colors } = useTheme()
  const { toggleTheme } = useAppTheme()

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
      }}
    >
      <Button icon="repeat" mode="outlined" onPress={toggleTheme}>
        Toggle Theme
      </Button>
    </View>
  )
}

export default MapScreen
