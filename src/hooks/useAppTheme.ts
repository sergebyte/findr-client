import { useState, useEffect, useMemo, useCallback } from 'react'
import { Appearance, ColorSchemeName } from 'react-native'
import { darkTheme, lightTheme } from '../styles/theme'
import { useGlobalSearchParams, useRouter } from 'expo-router'

export const useAppTheme = () => {
  const router = useRouter()
  const { colorScheme: globalColorScheme } = useGlobalSearchParams() // Global URL parameter
  const systemColorScheme: ColorSchemeName = Appearance.getColorScheme() ?? 'light' // System preference

  // Determine the initial theme, prioritizing the global URL parameter
  const getInitialColorScheme = useCallback(() => {
    return globalColorScheme ?? systemColorScheme
  }, [globalColorScheme, systemColorScheme])

  const [colorScheme, setColorScheme] = useState(getInitialColorScheme)

  // Synchronize with global URL parameter and system theme changes
  useEffect(() => {
    const listener = Appearance.addChangeListener(({ colorScheme }) => {
      if (!globalColorScheme) {
        setColorScheme(colorScheme ?? 'light')
      }
    })

    if (globalColorScheme && globalColorScheme !== colorScheme) {
      setColorScheme(globalColorScheme)
    }

    return () => listener.remove() // Cleanup listener on unmount
  }, [globalColorScheme, colorScheme])

  // Toggle theme manually and update the global URL parameter
  const toggleTheme = useCallback(() => {
    const newColorScheme = colorScheme === 'light' ? 'dark' : 'light'
    setColorScheme(newColorScheme)
    router.setParams({ colorScheme: newColorScheme }) // Update URL parameter
  }, [colorScheme, router])

  // Memoize the current theme
  const currentTheme = useMemo(() => {
    return colorScheme === 'dark' ? darkTheme : lightTheme
  }, [colorScheme])

  return { currentTheme, isDarkMode: colorScheme === 'dark', toggleTheme }
}
