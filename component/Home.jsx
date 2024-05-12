import React from 'react';
import { View, Text, FlatList, StyleSheet, SectionList } from 'react-native';

const Home = ({ route }) => {
  const { userData } = route.params;

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

  return (
    <View style={styles.container}>
      <Text>Welcome {userData} to Home screen</Text>
      <FlatList
        data={names}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
       <SectionList
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default Home;
