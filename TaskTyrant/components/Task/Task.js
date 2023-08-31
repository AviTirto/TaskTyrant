import { Text, View } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import styles from './TaskStyles'

Task = (props) => {

    function handleClick(){
        props.onCheck(props.task)
    }

    return (
        <View style={styles.taskContainer}>
            <Text style={styles.title}>{props.task.text}</Text>
            <BouncyCheckbox onPress={handleClick}/>
        </View>
    )
}

export default Task