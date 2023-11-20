import { View, Text, StyleSheet } from "react-native"
import moment from 'moment/moment'
import Icon from 'react-native-vector-icons/Feather';
import LineaDivisoria from "../LineaDivisoria/LineaDivisoria";
import SubItemCompra from "../SubItemCompra/SubItemCompra";
import Badge from "../Badge/Badge";
import ContentBox from "../ContentBox/ContentBox";

export default ({ compra, ultimaCompra }) => {

    const { detalles, fecha, total } = compra

    moment.locale('ES');
    const dia = moment(fecha).format('DD [de] MMMM YYYY');
    const hora = moment(fecha).format('HH:mm');


    return (
        <ContentBox>
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.content}>
                        <Icon name='calendar' size={20} color="black" />
                        <Text>{dia} a las {hora}hs</Text>
                    </View>
                    {ultimaCompra && (
                        <Badge title={'MÁS RECIENTE'} bgColor={'#008f39'}></Badge>
                    )}
                </View>
                <LineaDivisoria></LineaDivisoria>
                <View style={styles.contentProducts}>
                    <View style={styles.content}>
                        <Icon name='file-text' size={20} color="black" />
                        <Text>Productos</Text>
                    </View>
                    {
                        detalles.map((producto, index) => {
                            return (
                                <SubItemCompra key={index} producto={producto} />
                            )
                        })
                    }
                </View>
                <LineaDivisoria></LineaDivisoria>
                <View style={styles.subtotalBox}>
                    <Text style={styles.subtotalText}>Subtotal</Text>
                    <Text style={styles.subtotalPrecio}>$ {total.toFixed(2)}</Text>
                </View>
            </View>
        </ContentBox>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    content: {
        display: 'flex',
        gap: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    contentProducts: {
        display: 'flex',
        gap: 5,
        flexDirection: 'column',
    },
    contentTotal: {
        marginLeft: 'auto',
        display: 'flex',
        gap: 5,
        flexDirection: 'row'
    },
    subtotalPrecio: {
        marginLeft: 'auto',
        fontWeight: 'bold'
    },
    subtotalText: {
        fontWeight: 'bold'
    },
    subtotalBox: {
        display: 'flex',
        flexDirection: 'row'
    }
});
