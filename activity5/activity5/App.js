import React from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const morning = [
  { id: 'todo1', title: '1. Wake-up' },
  { id: 'todo2', title: '2. Shower & EAT' },
  { id: 'todo3', title: '3. Prepare a clothes for school later' },
  { id: 'todo4', title: '4. Lunch' },
  { id: 'todo5', title: '5. Go to school' },
];

const afternoon = [
  { id: 'todo6', title: '6. Take a shower' },
  { id: 'todo7', title: '7. Sleep' },
  { id: 'todo8', title: '8. Prepare anything' },
  { id: 'todo9', title: '9. Get a work' },
  { id: 'todo10', title: '10.Prepare my clothes for school tomorrow' },
];

const evening = [
  { id: 'todo11', title: '11.Take a showerl' },
  { id: 'todo12', title: '12.Prepare my clothes' },
  { id: 'todo13', title: '13. Go to bed' },
  { id: 'todo14', title: '14. Use Phone' },
  { id: 'todo15', title: '15. Sleep' },
];

const morningColors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#9B59B6'];
const afternoonColors = ['#FFC300', '#FF5733', '#DAF7A6', '#33FF57', '#C70039'];
const eveningColors = ['#581845', '#900C3F', '#C70039', '#FF5733', '#FFBD33'];

const Item = ({ title, backgroundColor }) => (
  <View style={[styles.item, { backgroundColor }]}>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  </View>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <Text style={styles.sectionHeader}>Morning</Text>
      <FlatList
        data={morning}
        renderItem={({ item, index }) => <Item title={item.title} backgroundColor={morningColors[index]} />}
        keyExtractor={item => item.id}
      />

      <Text style={styles.sectionHeader}>Afternoon</Text>
      <FlatList
        data={afternoon}
        renderItem={({ item, index }) => <Item title={item.title} backgroundColor={afternoonColors[index]} />}
        keyExtractor={item => item.id}
      />

      <Text style={styles.sectionHeader}>Evening</Text>
      <FlatList
        data={evening}
        renderItem={({ item, index }) => <Item title={item.title} backgroundColor={eveningColors[index]} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionHeader: {
    textAlign: 'center',
    padding: 10,
    fontSize: 20,
  },
  item: {
    padding: 20,
    margin:2,
  },
  title: {
    fontSize: 18,
    color: '#ffffff',
  },
});

export default App;