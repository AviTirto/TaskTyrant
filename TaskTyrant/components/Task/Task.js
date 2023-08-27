import { Button, StyleSheet, Text, View } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import styles from './TaskStyles'

Task = (props) => {
    return (
        <View style={styles.taskContainer}>
            <Text key={props.title} >{props.title}</Text>
            <BouncyCheckbox key = {props.key} onPress={(isChecked) => { props.onCheck(props.key) }}/>
        </View>
    )
}

export default Task