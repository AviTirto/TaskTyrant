import { Text, View } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import styles from './TaskStyles'

Task = (props) => {
    return (
        <View style={styles.taskContainer}>
            <Text>{props.title}</Text>
            <BouncyCheckbox />
        </View>
    )
}

export default Task