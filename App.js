import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';


fetch("https://api.apify.com/v2/datasets/xF9o1iiT0vqTXDy4T/items?format=json&clean=1&limit=1&desc=1")

export default function App(props) {
  const [data,setData] = useState()
  console.log(props)
  return (
    <View style={styles.container}>
      <Text>😂😂123😂😂1😂😂</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3271a8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
