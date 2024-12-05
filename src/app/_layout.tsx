import { useAppTheme } from '@/hooks/useAppTheme'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { PaperProvider } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import React from 'react'
import { ThemeProvider } from '@react-navigation/native'

const App: React.FC = () => {
  const { currentTheme } = useAppTheme()

  return (
    <SafeAreaProvider>
      <PaperProvider theme={currentTheme}>
        <ThemeProvider value={currentTheme}>
          <RootNavigation />
        </ThemeProvider>
      </PaperProvider>
      <StatusBar style={currentTheme.dark ? 'light' : 'dark'} />
    </SafeAreaProvider>
  )
}

const RootNavigation: React.FC = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  )
}

export default App
