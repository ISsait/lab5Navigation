import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Alert,
} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

export default function ToDoItem({task, index} : {task : any, index : any}) : React.JSX.Element {
    return (
            <View style={styles.taskItem}>
                <BouncyCheckbox
                    size={30}
                    fillColor="green"
                    onPress={(isChecked: boolean) => {
                        Alert.alert(`Task ${task} is ${isChecked ? 'complete' : 'not complete'}`);
                        }
                    }
                    />
                <Text key={index} style={styles.taskTxt}>{task}</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    taskItem: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    taskTxt: {
        fontSize: 20,
        marginLeft: 10,
    },
});