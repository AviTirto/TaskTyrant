import { Button, Modal, View, TextInput } from 'react-native';
import styles from './TaskFormStyles'
import { useState } from 'react'

const TaskForm = (props) => {
    const [enteredText, setEnteredText] = useState('')
    
    function handleTextInput(text){
        setEnteredText(text)
    }

    function handlePress(){
        props.onSubmit(enteredText)
        setEnteredText('')
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.formContainer}>
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
        </Modal>
    );
}

export default TaskForm