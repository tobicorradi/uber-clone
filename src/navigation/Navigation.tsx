import { Icon } from 'react-native-elements'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { type ParamListBase, type RouteProp } from '@react-navigation/native'

import { Account, Activity, Home, Services } from '../screens'

const Tab = createBottomTabNavigator()

const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // TODO: Get colors and spacings from the theme in the future
        tabBarLabelStyle: {
          fontSize: 12
        },
        tabBarStyle: {
          height: 60,
          paddingTop: 10,
          borderTopWidth: 3,
          borderTopColor: '#E7E8EC'
        },
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: '#ADADAD',
        tabBarIcon: ({ color }) => getIcon(route, color, 26)
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Services" component={Services} />
      <Tab.Screen name="Activity" component={Activity} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  )
}

export default Navigation

const getIcon = (
  route: RouteProp<ParamListBase, string>,
  color: string,
  size: number
) => {
  let iconName = ''

  switch (route.name) {
    case 'Home':
      iconName = 'home'
      break
    case 'Services':
      iconName = 'dots-grid'
      break
    case 'Activity':
      iconName = 'receipt'
      break
    case 'Account':
      iconName = 'account'
      break
  }
  return (
    <Icon
      containerStyle={{ marginBottom: 3 }}
      type="material-community"
      color={color}
      name={iconName}
      size={size}
    />
  )
}
