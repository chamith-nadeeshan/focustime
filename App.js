import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import { colors } from './src/utils/colors';
import { Focus } from './src/features/Focus';
import { Timer } from './src/features/Timer';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  console.log("chamith")
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? 
        <Focus addSubject={setCurrentSubject}/>
        : 
        <Timer 
          focusSubject={currentSubject}
          onTimerEnd={() => {}}
          clearSubjectt={() => setCurrentSubject(null)}
        /> }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
    
  },
  text: {
    color: colors.white
  }
});
 