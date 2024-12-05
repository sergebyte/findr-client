import { View } from 'react-native'
import { Button, Text, useTheme } from 'react-native-paper'

const PostsScreen = () => {
  const { colors } = useTheme()

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
      }}
    >
      <Text>Posts Screen</Text>
    </View>
  )
}

export default PostsScreen
