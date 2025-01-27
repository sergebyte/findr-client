import { MD3LightTheme, MD3DarkTheme, adaptNavigationTheme } from 'react-native-paper'
import {
  DefaultTheme as NavigationLight,
  DarkTheme as NavigationDark,
} from '@react-navigation/native'
import { COLORS } from '@/constants/Colors'
import merge from 'deepmerge'

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationLight,
  reactNavigationDark: NavigationDark,
})

const mergedLightTheme = merge(MD3LightTheme, LightTheme)
const mergedDarkTheme = merge(MD3DarkTheme, DarkTheme)

export const lightTheme = {
  ...mergedLightTheme,
  colors: {
    ...NavigationLight.colors,
    ...mergedLightTheme.colors,
    ...COLORS.light,
  },
  fonts: {
    ...NavigationLight.fonts,
    ...mergedLightTheme.fonts,
  },
}

export const darkTheme = {
  ...mergedDarkTheme,
  colors: {
    ...NavigationDark.colors,
    ...mergedDarkTheme.colors,
    ...COLORS.dark,
  },
  fonts: {
    ...NavigationDark.fonts,
    ...mergedDarkTheme.fonts,
  },
}
