import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import { useFonts } from 'expo-font'

import Navigation from './src/navigation/Navigation'

const App = () => {
  const [fontsLoaded] = useFonts({
    'Uber-bold': require('./assets/fonts/UberMoveBold.otf'),
    'Uber-medium': require('./assets/fonts/UberMoveMedium.otf')
  })

  if (!fontsLoaded) return null

  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <Navigation />
      </SafeAreaView>
    </NavigationContainer>
  )
}

export default App
