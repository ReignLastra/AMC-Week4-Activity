import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';


const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
    <Text style={styles.title}>
      <Text style={styles.boldText}>Reign</Text>
       <Text style={styles.italicText}> Lastra</Text>
       </Text>
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },

  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
   
  },
  boldText: {
    fontWeight: 'bold', // For Reign to be bold
  },
  italicText: {
    fontStyle: 'italic', // For Lastra to be italic
  }
});

export default App;