import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native"
import { useNavigation } from '@react-navigation/native';
import moment from 'moment/moment'
import Icon from 'react-native-vector-icons/Feather';
import LineaDivisoria from "../LineaDivisoria/LineaDivisoria";
import SubItemCompra from "../SubItemCompra/SubItemCompra";
import SubItemMas from "../SubItemMas/SubItemMas";
import MaterialCustomCurrency from "../MaterialCustomCurrency/MaterialCustomCurrency";
import Badge from "../Badge/Badge";
import ContentBox from "../ContentBox/ContentBox";

export default ({ compra, ultimaCompra }) => {
    const navigation = useNavigation();

    const { detalles, fecha, total } = compra

    moment.locale('ES');
    const dia = moment(fecha).format('DD [de] MMMM YYYY');
    const hora = moment(fecha).format('HH:mm');

    const handleCompraDetalle = (compra) => {
    navigation.navigate('CompraDetalle', {
      compra
    });
    };
    return (
        <TouchableWithoutFeedback onPress={() => handleCompraDetalle({compra})}>
            <View>
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
                                detalles.length > 2
                                    ? (
                                        <>
                                            <SubItemCompra key={0} producto={detalles[0]} />
                                            <SubItemMas cantidad= { detalles.length - 1} />
                                        </>
                                    )
                                    : (
                                        detalles.map((producto, index) => (
                                            <SubItemCompra key={index} producto={producto} />
                                        ))
                                    )
                            }
                        </View>
                        <LineaDivisoria></LineaDivisoria>
                        <View style={styles.subtotalBox}>
                            <Text style={styles.subtotalText}>Total</Text>
                            <MaterialCustomCurrency style={styles.subtotalPrecio} amount={total} currency="ARS"/>
                        </View>
                    </View>
                </ContentBox>
            </View>
        </TouchableWithoutFeedback>
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
        fontWeight: 'bold',
        color: '#008f39'
    },
    subtotalText: {
        fontWeight: 'bold'
    },
    subtotalBox: {
        display: 'flex',
        flexDirection: 'row'
    }
});
