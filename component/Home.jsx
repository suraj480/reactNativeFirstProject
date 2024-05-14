import React,{useEffect,useState} from 'react';
import { View, Text, FlatList, StyleSheet, SectionList, Button } from 'react-native';

const Home = ({ route }) => {
  const [formula,setFormula]=useState('')
  const [chemical,setChemical]=useState('')
  const { userData } = route.params;
 //1.without dependecy
  useEffect(()=>{
   // console.warn("state chaged")
  }) 

  //2.with dependency array 
  useEffect(()=>{
   // console.warn("i am mounted")
  },[])
  
  //3.with dependency array + dependent
  useEffect(()=>{
    //console.warn("i am mounted and dependecy changed")
  },[chemical]) 

  //4.component unMount  
  useEffect(()=>{
     return()=>{  
    // write here whatever you want to just before unmounting
   // console.warn("i called before unmounting")
   } },[])
  // Sample list of names (can be replaced with data from userData)
  const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
  const data = [
    {
      title: 'Group A',
      data: ['Alice', 'Bob', 'Charlie'],
    },
    {
      title: 'Group B',
      data: ['David', 'Eve'],
    },
    {
      title: 'Group C',
      data: ['Frank', 'Grace', 'Helen', 'Ivy'],
    },
  ];
  const renderSectionHeader = ({ section: { title } }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>{title}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item}</Text>
    </View>
  );
  const handlePress=()=>{
    setFormula('a+b')
  }
  const handleChemical=()=>{
    setChemical('a+b')
  }
  return (
    <View style={styles.container}>
    <Text>Welcome {userData} to Home screen</Text>
    <FlatList
      data={names}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
    <Button onPress={handlePress} title="Formula" />
    <Button color="yellow" onPress={handleChemical} title="Chemical" />
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginBottom:400
  },
  item: {
    padding: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});


export default Home;
