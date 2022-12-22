import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Generate = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Number</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'skyBlue',
    width: '100%',
    alignItems: 'center',
  },
  textStyle: {
    color: '#ffffff',
  },
});
export default Generate;
