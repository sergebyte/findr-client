import { StyleSheet } from 'react-native'

export const mapComponentStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})

export const mapButtonsStyle = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  button: {},
})
