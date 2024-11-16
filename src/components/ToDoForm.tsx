import React from 'react';
import {
  Alert,
  View,
} from 'react-native';
import ToDoList from './ToDoList';
import {useState} from 'react';

export default function ToDoForm(): React.JSX.Element {
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = (task: string) => {
    console.log(`Task added: ${task}`);
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i] === task) {
        Alert.alert(`Task "${task}" already exists`);
        return;
      }
    }
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    Alert.alert(`Task "${task}" added`);
  };

  const clearTasks = () => {
    setTasks([]);
    Alert.alert('All Tasks Cleared')
  };

  return (
    <View style={{flex: 1}}>
      <ToDoList tasks={tasks} addTask={addTask} clearTasks={clearTasks}/>
    </View>
  );
}
