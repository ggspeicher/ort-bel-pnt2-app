import { View, Text, StyleSheet } from "react-native"
import Icon from 'react-native-vector-icons/Feather';
import { abreviarTexto, currencyFormat } from "../../services/ServicioGenerales";

export default ( { producto } ) => {
    const { nombre, unidades, precio } = producto

    return (
    <View style={styles.content}>
        <Icon name='chevron-right' size={10} color="black" />
        <Text>{abreviarTexto(nombre)}</Text>
        <Text style={{color: 'gray', marginLeft: 3}}><Text style={{fontWeight: 'bold'}}>{unidades}</Text> u. x {currencyFormat(precio)}</Text>
        <View style={styles.total}>
            <Text>{currencyFormat(precio*unidades)}</Text>
        </View>
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
    total: {
        marginLeft: 'auto'
    },
});
