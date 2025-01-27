import { useAppTheme } from '@/hooks/useAppTheme'
import { Stack, useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { PaperProvider } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from '@react-navigation/native'
import { Auth0Provider, useAuth0 } from 'react-native-auth0'
import React, { useEffect } from 'react'

export const unstable_settings = {
  initialRouteName: '(tabs)',
}

export default function App() {
  const { currentTheme } = useAppTheme()

  return (
    <SafeAreaProvider>
      <PaperProvider theme={currentTheme}>
        <ThemeProvider value={currentTheme}>
          <Auth0Provider
            domain={process.env.EXPO_PUBLIC_AUTH0_DOMAIN}
            clientId={process.env.EXPO_PUBLIC_AUTH0_CLIENT_ID}
          >
            <RootNavigation />
          </Auth0Provider>
        </ThemeProvider>
      </PaperProvider>
      <StatusBar style={currentTheme.dark ? 'light' : 'dark'} />
    </SafeAreaProvider>
  )
}

const RootNavigation = () => {
  const { user, isLoading } = useAuth0()
  const router = useRouter()

  useEffect(() => {
    if (!user && !isLoading) {
      router.replace('/auth')
    }
  }, [isLoading, router, user])

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {user ? <Stack.Screen name="(tabs)" /> : <Stack.Screen name="(auth)" />}
    </Stack>
  )
}
