import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <Text>Edureka Mobile App</Text>
      <Button title="ClickMe"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
