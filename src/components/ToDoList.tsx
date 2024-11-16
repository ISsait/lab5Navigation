import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    FlatList,
} from 'react-native';
import {useState} from 'react';
import ToDoItem from './ToDoItem';

type ToDoListProps = {
    tasks: string[]
    addTask: (task: string) => void
    clearTasks: () => void
}

export default function ToDoList({tasks, addTask, clearTasks} : ToDoListProps): React.JSX.Element {
    const [newTask, setNewTask] = useState('');

    function handleNewTaskChange(text: string) {
        console.log(text);
        const newTaskText = text;
        setNewTask(newTaskText);
    }

    return (
        <View style={styles.container}>
            {tasks.length === 0
                &&
                <View style={styles.textView}>
                    <Text style={styles.text}>No tasks</Text>
                    <Text style={styles.text}>Add a task to get started.</Text>
                </View>
            }
            <FlatList
                data = {tasks}
                renderItem = {({item, index}) => (
                    <ToDoItem task={item} index={index} />
                )}
                />
            <View style={styles.addTaskView}>
                <TextInput
                    placeholder="Add a task"
                    style={styles.newTaskInput}
                    value={newTask}
                    onChangeText={handleNewTaskChange}
                    />
                <TouchableOpacity
                    style={styles.addTaskTouchableOpacity}
                    onPress={() => {addTask(newTask); setNewTask('');}}
                    >
                    <Text style={{color: 'white'}}>Add Task</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={styles.clearTouchableOpacity}
                onPress={() => clearTasks()}
                >
                <Text style={{color: 'white'}}>Clear All Tasks</Text>
            </TouchableOpacity>
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
    addTaskView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginTop: 20,
    },
    addTaskTouchableOpacity: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
    },
    newTaskInput: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        width: '70%',
        borderRadius: 5,
    },
    clearTouchableOpacity: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    textView: {
        marginTop: 40,
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        fontStyle: 'italic',
    },
});
