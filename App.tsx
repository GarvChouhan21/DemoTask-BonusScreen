import React from 'react';
import { ScrollView, StyleSheet, Text, View, StatusBar } from 'react-native';
import BonusScreen from './src/Screens/BonusScreen/Index';
import { Colors } from './src/utils/Colors';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
        <BonusScreen />
     </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: Colors.black,
  },
});

export default App;
