import { Text, View } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import styles from './TaskStyles'

Task = (props) => {

    return (
        <View style={styles.taskContainer}>
            <Text style={styles.title}>{props.task.text}</Text>
            <BouncyCheckbox onPress={props.onCheck.bind(this, props.task)}/>
        </View>
    )
}

export default Task