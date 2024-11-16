import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyButton from './components/MyButton';
import {useState} from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
  const [tasks, setTasks] = useState<object[]>([]);

  const addTask = (task: object) => {
    if (typeof task !== 'object' || task === null) {
      console.error('Task must be an object');
    } else {
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    }
  };

  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            initialParams={{tasks, addTask, clearTasks}}
            options={{
              title: 'To Do List',
              headerStyle: {backgroundColor: '#E1BB68'},
              headerTitleAlign: 'center',
              headerTitleStyle: {
                color: 'black',
                fontWeight: 'bold',
                fontSize: 24,
              },
            }}
            />
          <Stack.Screen
            name="About"
            component={AboutScreen}
            options={{
              title: 'About Screen',
              headerStyle: {backgroundColor: '#E1BB68'},
              headerTitleAlign: 'center',
              headerTitleStyle: {
                color: 'black',
                fontWeight: 'bold',
                fontSize: 24,
              },

            }}
            />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
