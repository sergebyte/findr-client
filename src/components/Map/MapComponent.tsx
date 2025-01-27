import React, { useState } from 'react'
import { View } from 'react-native'
import MapViewContainer from './MapViewContainer'
import MapButtons from './MapButtons'
import { mapComponentStyle } from '../../styles/mapStyle'
import * as Location from 'expo-location'

const MapComponent: React.FC = () => {
  const [mapRegion, setMapRegion] = useState({
    latitude: 51.505,
    longitude: -0.09,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })

  const handleUserLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        console.error('Permission to access location was denied')
        return
      }

      const location = await Location.getCurrentPositionAsync({})
      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      })
    } catch (error) {
      console.error('Error fetching location:', error)
    }
  }

  const handleAddItem = () => {
    // Implement logic to add an item (e.g., open a modal, set a marker)
    console.log('Add Item Button Pressed')
  }

  return (
    <View style={mapComponentStyle.container}>
      <MapViewContainer region={mapRegion} onRegionChange={setMapRegion} />
      <MapButtons onAddItem={handleAddItem} onCenterMap={handleUserLocation} />
    </View>
  )
}

export default MapComponent
