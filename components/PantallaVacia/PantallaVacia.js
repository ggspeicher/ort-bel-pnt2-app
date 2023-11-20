import { View, Text, StyleSheet } from "react-native"
import CustomButton from "../CustomButton/CustomButton"
import { useNavigation } from '@react-navigation/native';


export default ( { texto } ) => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>
                { texto }
            </Text>
            <View style={styles.containerBoton}>
                <CustomButton
                    style={styles.boton}
                    text={'Ver productos'}
                    color={'#123d5c'}
                    width={'100%'}
                    height={'auto'}
                    onPress={navigation.navigate('Home')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerBoton: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        marginTop: 10
    }
});