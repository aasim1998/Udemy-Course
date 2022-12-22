import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Nav = ({nameOfApp}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{nameOfApp}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    width: '100%',
    alignItems: 'center',
  },
  textStyle: {
    color: '#ffffff',
  },
});
export default Nav;
