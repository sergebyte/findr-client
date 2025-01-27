import React from 'react'
import { Marker } from 'react-native-maps'

type MapMarkerProps = {
  latitude: number
  longitude: number
  title?: string
  description?: string
}

const MapMarker: React.FC<MapMarkerProps> = ({ latitude, longitude, title, description }) => (
  <Marker coordinate={{ latitude, longitude }} title={title} description={description} />
)

export default MapMarker
