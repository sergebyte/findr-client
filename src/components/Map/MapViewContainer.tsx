import React from 'react'
import MapView, { Marker } from 'react-native-maps'

type Region = {
  latitude: number
  longitude: number
  latitudeDelta: number
  longitudeDelta: number
}

type MapViewContainerProps = {
  region: Region
  onRegionChange: (region: Region) => void // Ensure this matches
}

const MapViewContainer: React.FC<MapViewContainerProps> = ({ region, onRegionChange }) => {
  return (
    <MapView
      style={{ flex: 1 }}
      region={region}
      onRegionChangeComplete={newRegion => onRegionChange(newRegion)} // Pass the new region
    />
  )
}

export default MapViewContainer
