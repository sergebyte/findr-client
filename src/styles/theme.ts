import {
  MD3LightTheme as PaperLightTeme,
  MD3DarkTheme as PaperDarkTheme,
  adaptNavigationTheme,
} from 'react-native-paper'
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationLightTheme,
} from '@react-navigation/native'
import { COLORS } from '../constants/colors'
import merge from 'deepmerge'

const { LightTheme: AdaptedLightTheme, DarkTheme: AdaptedDarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationLightTheme,
  reactNavigationDark: NavigationDarkTheme,
})

export const lightTheme = {
  ...AdaptedLightTheme,
  ...PaperLightTeme,
  colors: {
    ...AdaptedLightTheme.colors,
    ...PaperLightTeme.colors,
    ...COLORS.light,
  },
}

export const darkTheme = {
  ...AdaptedDarkTheme,
  ...PaperDarkTheme,
  colors: {
    ...AdaptedDarkTheme.colors,
    ...PaperDarkTheme.colors,
    ...COLORS.dark,
  },
}

export const theme = {
  light: lightTheme,
  dark: darkTheme,
}
