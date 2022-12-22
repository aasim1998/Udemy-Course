import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ListItem = ({items}) => {
  return items.map(item => (
    <View style={styles.container}>
      <Text>{item}</Text>
    </View>
  ));
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    width: '100%',
    alignItems: 'center',
    marginTop: 5,
  },
});
export default ListItem;
