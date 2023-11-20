import { View, StyleSheet } from "react-native"

export default ({ children }) => {
    return (
        <View style={[styles.container, styles.shadowProp]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        borderRadius: 10,
        backgroundColor: 'white',
        marginBottom: 10,
        backgroundColor: 'white'
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
});