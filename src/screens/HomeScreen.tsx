import React from 'react';
import ToDoForm from '../components/ToDoForm';
import {
    View,
    StyleSheet,
} from 'react-native';
import MyButton from '../components/MyButton';


export default function HomeScreen({navigation} : {navigation: any}) : React.JSX.Element {
  return (
    <View style={styles.container}>
        <ToDoForm />
          <MyButton title="About" onPress={() => {
            console.log('About button pressed');
            navigation.navigate('About');
            }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
