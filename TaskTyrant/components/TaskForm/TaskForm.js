import { Button, Text, View, TextInput } from 'react-native';
import styles from './TaskFormStyles'
import { useState } from 'react'

const TaskForm = (props) => {
    const [enteredText, setEnteredText] = useState('')
    
    function handleTextInput(text){
        setEnteredText(text)
    }

    function handlePress(){
        props.onSubmit(enteredText)
    }

    return (
        <View>
            <TextInput
            placeholder='Task Name'
            onChangeText={handleTextInput}
            value={enteredText}
            />
            <Button 
            title='->'
            onPress={handlePress}
            />
        </View>
    );
}

export default TaskForm