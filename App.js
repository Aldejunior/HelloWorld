import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Coisa Linda!</Text>
      <Text>Sono muito, sono.</Text>
    </View>
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
