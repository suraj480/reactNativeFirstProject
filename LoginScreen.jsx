import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import UserData from './UserData.json'
import { useNavigation } from '@react-navigation/native';
const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [incorrectUsernamePassword, setincorrectUsernamePassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState(false);
  const navigation = useNavigation();
  const handleLogin = () => {
    UserData.map(item => {
      if (item.username === username && item.password === password) {
        // console.warn("login successfull")
        setLoginSuccess(true)
        const userData = username
        navigation.navigate('Home', { userData });
      } else if (item.username !== username || item.password === password) {
        setDisplay(true);
        setLoginSuccess(false);
        setincorrectUsernamePassword('Incorrect username or Password !!')
      }
    })

  };

  useEffect(() => {

    setDisplay(false);
  }, [loginSuccess])

  const handleClearState = () => {
    setUsername('');
    setPassword('');
    setLoginSuccess(false);
  };

  return (

    <View style={styles.main}>
      <View style={styles.box1}>
        <Text style={{ textAlign: 'center', fontSize: 30 }}>Login Page</Text>
        {display && (

          <Text style={{ color: 'red', fontSize: 20, textAlign: 'center' }}>{incorrectUsernamePassword}</Text>

        )}
      </View>
      <View style={styles.box2}>
        <TextInput
          style={styles.innerBox2}
          placeholder="Username"
          placeholderTextColor="black"
          onChangeText={text => setUsername(text)}
          value={username}
        />
        <TextInput
          style={styles.innerBox2}
          placeholder="Password"
          placeholderTextColor="black"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          value={password}
        />
      </View>
      <View style={styles.box3}>
        <Button color="#F4A460" onPress={handleLogin} title="Login" />
        {loginSuccess && (

          <Button color="#F4A460" onPress={handleClearState} title="LogOut" />

        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  main: {
    flex: 1
  },
  box1: {
    flex: 1,
    backgroundColor: '#FFDEAD'
  },
  box2: {
    flex: 2,
    alignItems: 'center',
    backgroundColor: '#FFDEAD'
  },
  innerBox2: {
    marginTop: 10,
    borderRadius: 20,
    marginBottom: 20,
    height: 50,
    padding: 10,
    borderWidth: 1,
    width: '80%',
    fontSize: 16,
    borderColor: "black"
  },
  box3: {
    flex: 2,
    backgroundColor: '#FFDEAD',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});

export default LoginScreen;
