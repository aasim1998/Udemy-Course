import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.basicView}>
        <Text style={styles.basicText}>Text 1</Text>
      </View>
      <View style={styles.basicView}>
        <Text style={styles.basicText}>Text 2</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  basicView: {
    backgroundColor: 'green',
    width: '100%',
    margin: 5,
  },
  basicText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#ffffff',
    padding: 20,
  },
});
export default App;
