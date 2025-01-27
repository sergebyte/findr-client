import MapComponent from '@/components/Map/MapComponent'
import { View } from 'react-native'
import { useTheme } from 'react-native-paper'

export default function MapScreen() {
  const { colors } = useTheme()

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}
    >
      <MapComponent />
    </View>
  )
}
