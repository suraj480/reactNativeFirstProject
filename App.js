import React, {useState} from 'react';
// eslint-disable-next-line prettier/prettier
import {View, Text, Button} from 'react-native';

const App = () => {
  let data = 100;
  const [number, setNumber] = useState(200);
  const buttonOne = () => {
    let sum = data + 10;
    setNumber(number + 10);
    console.warn('Function called' + ' ' + sum + ' ' + number);
  };
  const buttonTwo = a => {
    let subtract = data - 5;
    setNumber(number - 5);
    console.warn(a + ' ' + subtract + ' ' + number);
  };
  return (
    <View>
      <Text style={{fontSize: 30}}>Hello React Native</Text>
      <View style={{marginHorizontal: 100, marginTop: 400}}>
        <Button title="Press me" onPress={buttonOne} color="#FFA500"></Button>
        <Button
          title="Press me two"
          onPress={() => buttonTwo('data from button two')}
          color="green"></Button>
      </View>
    </View>
  );
};

export default App;
