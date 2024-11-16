import React from 'react';
import ToDoForm from '../components/ToDoForm';
import {
    View,
    StyleSheet,
} from 'react-native';
import MyButton from '../components/MyButton';
import MainLayout from '../layouts/MainLayout';


export default function HomeScreen({initialParams, navigation} : {initialParams : any, navigation: any}) : React.JSX.Element {
  return (
    <MainLayout>
      <View style={styles.container}>
          <ToDoForm props={initialParams}/>
            <MyButton title="About" onPress={() => {
              console.log('About button pressed');
              navigation.navigate('About');
              }}/>
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
