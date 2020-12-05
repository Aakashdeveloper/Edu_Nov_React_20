import React,{useState} from 'react';
import { StyleSheet, Text, View, Button,Switch } from 'react-native';
import ProductList from './component/productlist';

function App() {
  const [MyText,setText] = useState("My Mobile App");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
  return (
    <View style={styles.container}>
      <Text>Edureka Mobile App</Text>
      <ProductList/>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text>{MyText}</Text>
      <Button color="#841584" title="ClickMe" onPress={()=>{setText('Button Clicked')}}/>
      <Button title="Revert" onPress={()=>{setText('My Mobile App')}}/>
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
  mybutton:{
    backgroundColor:'red',
    color:'green'
  }
});

export default App;
