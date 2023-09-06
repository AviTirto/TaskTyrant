import { Button, Modal, View, TextInput } from 'react-native';
import styles from './TaskFormStyles'
import { useState } from 'react'

const TaskForm = (props) => {
    const [titleText, setTitleText] = useState('')
    const [descriptionText, setDescriptionText] = useState('')
    
    function handleTitleInput(text){
        setTitleText(text)
    }

    function handleDescriptionInput(text){
        setDescriptionText(text)
    }

    function handlePress(){
        props.onSubmit(titleText)
        setTitleText('')
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.formContainer}>
                <TextInput
                    placeholder='Task Name'
                    onChangeText={handleTitleInput}
                    value={titleText}
                />
                <TextInput
                    placeholder='Description'
                    onChangeText={handleDescriptionInput}
                    value={descriptionText}
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