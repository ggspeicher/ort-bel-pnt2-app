import { View, Text, StyleSheet } from "react-native"
import Icon from 'react-native-vector-icons/Feather';
import LineaDivisoria from "../LineaDivisoria/LineaDivisoria";
import CustomButton from "../CustomButton/CustomButton";
import { useEffect, useState } from "react";

export default ( { carrito, setCarrito } ) => {

    const [tarifaEnvio, setTarifaEnvio] = useState(330)
    const [tarifaServicio, setTarifaServicio] = useState(200)

    const [total, setTotal] = useState(0);

    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
      const nuevoTotal = carrito.reduce((acumulador, producto) => {
        const subtotal = producto.precio * producto.unidades;
        return acumulador + subtotal;
      }, 0);

      setTotal(nuevoTotal);
    }, [carrito]);

    useEffect(() => {
        setSubtotal(tarifaEnvio + tarifaServicio + total)
    },[total])

    return (
        <>
            <View style={styles.container}>
                <View style={styles.itemPrincipal}> 
                    <Icon name={'file-text'} size={20} color="black" />
                    <Text style={styles.itemTextPrincipal}>Resumen</Text>
                </View>
                <LineaDivisoria marginVertical={5}></LineaDivisoria>
                <View style={styles.item}>
                    <Text>Productos</Text>
                    <Text style={styles.itemPrecio}>$ {total.toFixed(2)}</Text>
                </View>
                <View style={styles.item}>
                    <Text>Envío </Text>
                    <Text style={styles.itemPrecio}>$ {tarifaEnvio.toFixed(2)}</Text>
                </View>
                <View style={styles.item}>
                    <Text>Tarifa de servicio</Text>
                    <Text style={styles.itemPrecio}>$ {tarifaServicio.toFixed(2)}</Text>
                </View>
                <LineaDivisoria marginVertical={5}></LineaDivisoria>
                <View style={styles.item}>
                    <Text style={styles.itemTextPrincipal}>Subtotal</Text>
                    <Text style={[styles.itemPrecio, styles.itemTextPrincipal]}>$ { subtotal }</Text>
                </View>
                <View style={styles.containerBoton}>
                    <CustomButton style={styles.boton} text={'Finalizar compra'} color={'#123d5c'} width={'100%'} height={'auto'} onPress={() => console.log('accion')} />
                    <CustomButton style={styles.boton} text={'Vaciar carrito'} color={'#c31f2d'} width={'50'} height={'auto'} onPress={() => setCarrito([])} />
                </View>
            </View>
        </>
    )
    //file-text
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: 'white',
    },
    item: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    itemTitulo: {
    },
    itemPrecio: {
        marginLeft: 'auto'
    },
    itemPrincipal: {
        display: 'flex',
        flexDirection: 'row',
        fontWeight: 'bold',
        gap: 5
    },
    itemTextPrincipal: {
        fontWeight: 'bold'
    },
    containerBoton: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        marginTop: 10,
    },
    boton: {
        flex: 1
    }
});