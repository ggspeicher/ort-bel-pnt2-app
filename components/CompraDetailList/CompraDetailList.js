import { View, Text, StyleSheet, Image } from "react-native";
import moment from 'moment/moment'
import Icon from 'react-native-vector-icons/Feather';
import LineaDivisoria from "../LineaDivisoria/LineaDivisoria";
import CompraDetailItem from "../CompraDetailItem/CompraDetailItem";
import MaterialCustomCurrency from "../MaterialCustomCurrency/MaterialCustomCurrency";
import ContentBox from "../ContentBox/ContentBox";

export default ({ compra }) => {
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
                </View>
                <LineaDivisoria></LineaDivisoria>
                <View style={styles.contentProducts}>
                    <View style={styles.content}>
                        <Icon name='file-text' size={20} color="black" />
                        <Text>Productos: {compra.detalles.length}</Text>
                    </View>
                    {
                        detalles.map((producto, index) => {
                            return (
                               <CompraDetailItem producto={producto} key={index}/>
                            )
                        })
                    }
                </View>
                <LineaDivisoria></LineaDivisoria>
                <View style={styles.montoTotalContainer}>
                    <Text style={styles.compraSubtotalLabel}>Total</Text>
                    <MaterialCustomCurrency style={styles.subtotalPrecio} amount={total} currency="ARS"/>
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
        alignItems: 'center',
        marginBottom: 5
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
        fontWeight: 'bold',
        color: '#008f39',
        fontSize: 20
    },
    compraSubtotalLabel: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    montoTotalContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    image: {
        width: 62,
        height: 62,
        marginBottom: 5,
        marginRight: 12,
        borderRadius: 31,
    },
    productoNombre: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5
    },
    textoContainer: {
        flex: 1
    },
    productoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30
    },
      productoTotal: {
        fontSize: 14,
        color: '#888',
        marginLeft: 'auto',
      },
      productoFooter: {
         flexDirection: 'row'
      }
});
