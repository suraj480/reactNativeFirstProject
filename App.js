import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginScreen from './LoginScreen';
import { registerRootComponent } from 'expo';
//import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from './component/Home';
// const Stack = createStackNavigator();

const App = () => {
  return (
    <View>
      <Text style={styles.title}>Login Page</Text>
       <LoginScreen />
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 1,
  },
  title: {
    fontSize: 30,
    color: 'orange',
    fontWeight: 'bold',
    marginTop: 100,
    textAlign: 'center'

  },
});

export default registerRootComponent(App);

