import React from 'react';
import {Text, View, ScrollView, StatusBar, StyleSheet} from 'react-native';

const Section = ({children, title}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.sectionDescription}>{children}</Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = false; // Determine your dark mode logic here

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#000' : '#FFF',
  };

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            backgroundColor: isDarkMode ? '#000' : '#FFF',
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            Reload your app to see changes!
          </Section>
          <Section title="Debug">
            Debug your app by following instructions.
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next.
          </Section>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
