import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyButton from './components/MyButton';
import {useState} from 'react';
import {Alert} from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = (task: string) => {
    if (typeof task !== 'string') {
      console.error('Task must be an string');
    }
    if (tasks.includes(task)) {
      Alert.alert(`Task "${task}" already exists`);
      return;
    }
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    Alert.alert(`Task "${task}" added`);
  };

  const clearTasks = () => {
    setTasks([]);
    Alert.alert('Tasks cleared');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            options={({navigation}) => ({
              title: 'To Do List',
              headerStyle: {backgroundColor: '#E1BB68'},
              headerTitleAlign: 'center',
              headerTitleStyle: {
                color: 'black',
                fontWeight: 'bold',
                fontSize: 24,
              },
              headerRight: () => (
                <MyButton
                  bgColor='blue'
                  title="About"
                  onPress={() => {
                    navigation.navigate('About');
                  }}
                />
              ),
            })}
          >
            {props => <HomeScreen {...props} initialParams={{tasks, addTask, clearTasks}} />}
          </Stack.Screen>
          <Stack.Screen
            name="About"
            options={({navigation}) => ({
              title: 'About',
              headerStyle: {backgroundColor: '#E1BB68'},
              headerTitleAlign: 'center',
              headerTitleStyle: {
                color: 'black',
                fontWeight: 'bold',
                fontSize: 24,
              },
              headerRight: () => (
                <MyButton
                  bgColor='blue'
                  title="Home"
                  onPress={() => {
                    navigation.navigate('Home');
                  }}
                />
              ),
            })}
          >
            {props => <AboutScreen {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
