
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
      source={require('C:/Users/paulo/Documents/Workspaces/App+Gerador+Senhas/gerador/src/assets/logo.png')}
      style={styles.logo}
      />
      <Text>20 catacteres</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#F3F3FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo:{
    marginBottom: 60
  },
});