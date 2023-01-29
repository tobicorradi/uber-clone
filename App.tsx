import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import Navigation from './src/navigation/Navigation'

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <Navigation />
      </SafeAreaView>
    </NavigationContainer>
  )
}

export default App
