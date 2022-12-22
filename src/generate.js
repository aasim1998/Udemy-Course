import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Generate = ({add}) => {
  return (
    <TouchableOpacity
      onPress={() => add()}
      underlayColor="green"
      activeOpacity={0.1}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>Number</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: '100%',
    alignItems: 'center',
  },
  textStyle: {
    color: '#ffffff',
  },
});
export default Generate;
