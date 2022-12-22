import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Generate from './src/generate';
import ListItem from './src/Listitems';
import Nav from './src/nav';

const App = () => {
  const [hello, setHello] = useState(true);
  const [random, setRandom] = useState([10, 89]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setHello(false);
  //   }, 2000);
  // }, []);

  // Generating random numbers
  const onAddRandom = () => {
   const randomVal = Math.floor(Math.random() *100) +1
   const newNumber = [...random  , randomVal]
   setRandom(newNumber)
  };

  return (
    <View style={styles.mainView}>
      <Nav nameOfApp="Awesome" />

      <View style={styles.basicView}>
        <Text style={styles.basicText}>Text 1</Text>
      </View>
      <View style={styles.basicView}>
        <Text style={styles.basicText}>Text 2</Text>
      </View>
      <View>
        <Generate add={() => onAddRandom()} />
      </View>
      <ListItem items={random} />
      {/* {hello ? <Text>Hello world</Text> : null} */}
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    paddingTop: 10,
    // backgroundColor: 'grey',
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
    paddding: 20,
  },
});
export default App;
