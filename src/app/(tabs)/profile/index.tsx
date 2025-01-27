import { View } from 'react-native'
import { useAuth0 } from 'react-native-auth0'
import { Button, useTheme } from 'react-native-paper'

const ProfileScreen = () => {
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
      <LogoutButton />
    </View>
  )
}

const LogoutButton = () => {
  const { clearSession } = useAuth0()

  const onPress = async () => {
    try {
      await clearSession()
    } catch (e) {
      console.log(e)
    }
  }

  return <Button onPress={onPress}>Logout</Button>
}

export default ProfileScreen
