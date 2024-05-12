import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import UserData from './UserData.json'
import { useNavigation } from '@react-navigation/native';
const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState(false);
  const navigation = useNavigation();
  const handleLogin = () => {
    UserData.map(item => {
      if (item.username === username && item.password === password) {
        // console.warn("login successfull")
        const userData=username
        navigation.navigate('Home',{userData});
      } else {
        console.warn("Login Failed !")
      }
    })
    setDisplay(true);
  };

  const handleClearState = () => {
    setUsername('');
    setPassword('');
    setDisplay(false);
  };

  return (
    <View>
      <View>
      <Text style={styles.title}>Login Page</Text>
      </View>
      {display && (
        <View style={styles.userInfo}>
          <Text style={{ color: 'green', fontSize: 16, }}>LoggedIn user: {username}</Text>
        </View>
      )}
      <View style={styles.container}>

        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Username"
            placeholderTextColor="black"
            onChangeText={text => setUsername(text)}
            value={username}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Password"
            placeholderTextColor="black"
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
            value={password}
          />
        </View>
        <View style={styles.buttonView}>
          <Button onPress={handleLogin} title="Login" />
        </View>

        {display && (
          <View style={styles.buttonView}>
            <Button onPress={handleClearState} title="LogOut" />
          </View>
        )}


      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    marginTop: 100
  },
  inputView: {
    width: '80%',
    backgroundColor: '#ffffff',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderBottomColor: 'red',
  },
  buttonView: {
    width: '80%',
    backgroundColor: 'yellow',
    borderRadius: 25,

    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
  },
  userInfo: {
    marginTop: 30,
    alignItems: 'center',
    color: 'black',
    alignItems: 'center',
    fontWeight: '600'
  },
  userInfoText: {
    fontSize: 25,
    color: 'green',



  },
  inputText: {
    height: 50,
    color: 'black',
    borderRadius: 25,
  },
  title: {
    fontSize: 30,
    color: 'orange',
    fontWeight: 'bold',
    marginTop: 100,
    textAlign: 'center'

  },
});

export default LoginScreen;
