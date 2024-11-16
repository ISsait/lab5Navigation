import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';



export default function AboutScreen() : React.JSX.Element {
  return (
    <View style={styles.container}>
        <View style={styles.textView}>
            <Text style={[styles.text, {fontSize: 18}]}>This is a simple application called </Text>
            <Text style={[styles.text,{fontWeight: 'bold'}]}>To Do List</Text>
        </View>
        <View style={styles.textView}>
            <Text style={[styles.text, {fontSize: 18}]}>Created By: </Text>
            <Text style={[styles.text,{fontWeight: 'bold'}]}>Ian Stoesz</Text>
        </View>
        <View style={styles.textView}>
            <Text style={[styles.text, {fontSize: 18}]}>Date Created:  </Text>
            <Text style={[styles.text,{fontWeight: 'bold'}]}>November 15, 2024</Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'beige',
  },
  textView: {
    marginTop: 40,
  },
  text: {
    textAlign: 'center',
    fontSize: 24,
  },
});
