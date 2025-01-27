import { useState, useEffect, useMemo, useCallback } from 'react'
import { Appearance, ColorSchemeName } from 'react-native'
import { darkTheme, lightTheme } from '@/styles/theme'
import { useRouter } from 'expo-router'

type ThemePreference = 'light' | 'dark' | 'system'

export const useAppTheme = () => {
  const router = useRouter()
  const systemColorScheme: ColorSchemeName = Appearance.getColorScheme() ?? 'light'

  const [themePreference, setThemePreference] = useState<ThemePreference>('system')

  const [effectiveColorScheme, setEffectiveColorScheme] = useState<ColorSchemeName>(
    themePreference === 'system' ? systemColorScheme : themePreference,
  )

  useEffect(() => {
    if (themePreference === 'system') {
      const listener = Appearance.addChangeListener(({ colorScheme }) => {
        setEffectiveColorScheme(colorScheme ?? 'light')
      })

      return () => listener.remove()
    }
  }, [themePreference])

  useEffect(() => {
    if (themePreference !== 'system') {
      setEffectiveColorScheme(themePreference)
    }
  }, [themePreference])

  const setTheme = useCallback(
    (preference: ThemePreference) => {
      setThemePreference(preference)
      if (preference !== 'system') {
        setEffectiveColorScheme(preference)
      }
      router.setParams({ theme: preference })
    },
    [router],
  )

  const currentTheme = useMemo(
    () => (effectiveColorScheme === 'dark' ? darkTheme : lightTheme),
    [effectiveColorScheme],
  )

  return {
    currentTheme,
    isDarkMode: effectiveColorScheme === 'dark',
    themePreference,
    setTheme,
  }
}
