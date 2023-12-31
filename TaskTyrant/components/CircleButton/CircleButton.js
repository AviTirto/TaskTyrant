import { Pressable, View, Text } from "react-native"
import styles from './CircleButtonStyles'

const CircleButton = (props) => {
    return (
        <View style={styles.innerContainer}>
            <Pressable style={styles.outerContainer} onPress={props.onPress} android_ripple={{color: 'white'}}>
                <Text style={styles.text}>{props.children}</Text>
            </Pressable>
        </View>
    )
}

export default CircleButton