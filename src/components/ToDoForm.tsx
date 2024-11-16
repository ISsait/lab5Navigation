import React from 'react';
import {
  View,
} from 'react-native';
import ToDoList from './ToDoList';

export default function ToDoForm({props} : {props : any}): React.JSX.Element {
  const {tasks, addTask, clearTasks} = props;
  return (
    <View style={{flex: 1}}>
      <ToDoList tasks={tasks} addTask={addTask} clearTasks={clearTasks}/>
    </View>
  );
}
