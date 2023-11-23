import { View, Text, StyleSheet } from "react-native"
import Icon from 'react-native-vector-icons/Feather';

export default ( { cantidad } ) => {

    return (
    <View style={styles.content}>

        <Text style={ styles.more } > ... { cantidad } + </Text>
    </View>
    )
}

const styles = StyleSheet.create({
    content: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
        marginLeft: 24
    },
    more: {
        fontWeight: 'bold',
    }
});
