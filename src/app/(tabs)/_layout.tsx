import { Feather } from '@expo/vector-icons'
import { Tabs } from 'expo-router'

export default function TabsNavigation() {
  return (
    <Tabs>
      <Tabs.Screen
        name="(view)/list"
        options={{
          headerShown: false,
          title: 'List',
          tabBarIcon: ({ color }) => <Feather name="book" color={color} size={24} />,
        }}
      />

      <Tabs.Screen
        name="(view)/index"
        options={{
          headerShown: false,
          title: 'Map',
          tabBarIcon: ({ color }) => <Feather name="map-pin" color={color} size={24} />,
        }}
      />

      <Tabs.Screen
        name="profile/index"
        options={{
          headerShown: false,
          title: 'Profile',
          tabBarIcon: ({ color }) => <Feather name="user" color={color} size={24} />,
        }}
      />
    </Tabs>
  )
}
