import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import home from './src/pages/home';
import sobre from '.src/pages/sobre';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Sobre" component={Sobre}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCC',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start'
  },
  titulo:{
    backgroundColor: '#FF69B4',
    padding: 10,
    borderRadius: 5
  }
});
