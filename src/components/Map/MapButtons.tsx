import React from 'react'
import { View, StyleSheet } from 'react-native'
import IconButton from '../ui/IconButtonComponent' // Import the general IconButton
import { useTheme } from 'react-native-paper'
import { mapButtonsStyle } from '../../styles/mapStyle'

type MapButtonsProps = {
  onAddItem: () => void
  onCenterMap: () => void
}

const MapButtons: React.FC<MapButtonsProps> = ({ onAddItem, onCenterMap }) => {
  const { colors } = useTheme()
  return (
    <View style={mapButtonsStyle.container}>
      <IconButton
        icon="crosshairs-gps"
        mode="contained"
        onPress={onCenterMap}
        style={mapButtonsStyle.button}
      />

      <IconButton
        icon="plus-circle"
        mode="contained"
        onPress={onAddItem}
        iconColor={colors.onPrimaryContainer}
        containerColor={colors.primaryContainer}
        style={mapButtonsStyle.button}
      />
    </View>
  )
}

export default MapButtons
