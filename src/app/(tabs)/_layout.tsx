import { Feather } from '@expo/vector-icons'
import { Tabs } from 'expo-router'

const TabsNavigation = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="posts"
        options={{
          headerShown: false,
          title: 'Posts',
          tabBarIcon: ({ color }) => <Feather name="book" color={color} size={24} />,
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: 'Map',
          tabBarIcon: ({ color }) => <Feather name="map-pin" color={color} size={24} />,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: 'Profile',
          tabBarIcon: ({ color }) => <Feather name="user" color={color} size={24} />,
        }}
      />
    </Tabs>
  )
}

export default TabsNavigation
