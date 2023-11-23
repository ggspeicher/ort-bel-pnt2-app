import { View, Text, StyleSheet, Alert } from "react-native"
import Icon from 'react-native-vector-icons/Feather';
import LineaDivisoria from "../LineaDivisoria/LineaDivisoria";
import CustomButton from "../CustomButton/CustomButton";
import { useEffect, useState } from "react";
import ServicioCompra from "../../services/ServicioCompra";
import { usePerfil } from "../../context/PerfilContext";
import { useNavigation } from "@react-navigation/core";
import ContentBox from "../ContentBox/ContentBox";
import { currencyFormat } from "../../services/ServicioGenerales";

export default ({ carrito, setCarrito }) => {

    const navigation = useNavigation();

    const { perfil, actualizarPerfil } = usePerfil()
    const { id } = perfil

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
    }, [total])

    const comprar = () => {
        Alert.alert(
            'Realizar compra',
            'Al confirmar se procesará la compra',
            [
                {
                    text: 'Volver',
                    style: 'cancel',
                },
                {
                    text: 'Confirmar',
                    onPress: procesoCompra,
                    style: 'cancel',
                }
            ]
        );
    }

    const compraExitosaAlerta = () => {
        Alert.alert(
            'Compra exitosa',
            '¡La compra se ha realizado correctamente!',
            [
                {
                    text: 'Ver compras',
                    onPress: () => { navigation.navigate('ComprasStack') }
                }
            ]
        );
    }

    const procesoCompra = async () => {

        // del carrito solo me guardo la info importante (no hace falta traerme el stock tmb)

        // agrego: un array los detalles de la compra
        const detalles = carrito.map(producto => (
            {
                id: producto.id,
                nombre: producto.nombre,
                unidades: producto.unidades,
                precio: producto.precio,
                urlPath: producto.path
            }));

        // agrego: el total gastado de la compra
        const total = carrito.reduce((total, producto) => total + producto.precio * producto.unidades, 0);

        // agrego: ademas seteo la fecha de ahora. y junto los 3 atributos en 1
        const compra = {
            detalles: detalles,
            fecha: new Date().toISOString(),
            total: total
        };

        // agrego esa compra al firebase
        try {
            await ServicioCompra.agregarCompra(id, compra)
            compraExitosaAlerta()
        } catch (err) {
            console.log(err)
        }

        // necesitamos volver a llamar a la bd para reflejar la nueva compra
        await actualizarPerfil(id)

        // se limpia el carrito
        setCarrito([])
    }

    return (
        <ContentBox>
            <View style={styles.itemPrincipal}>
                <Icon name={'file-text'} size={20} color="black" />
                <Text style={styles.itemTextPrincipal}>Resumen</Text>
            </View>
            <LineaDivisoria></LineaDivisoria>
            <View style={styles.item}>
                <Text>Productos</Text>
                <Text style={styles.itemPrecio}>{currencyFormat(total)}</Text>
            </View>
            <View style={styles.item}>
                <Text>Envío </Text>
                <Text style={styles.itemPrecio}>{currencyFormat(tarifaEnvio)}</Text>
            </View>
            <View style={styles.item}>
                <Text>Tarifa de servicio</Text>
                <Text style={styles.itemPrecio}>{currencyFormat(tarifaServicio)}</Text>
            </View>
            <LineaDivisoria></LineaDivisoria>
            <View style={styles.item}>
                <Text style={styles.itemTextPrincipal}>Subtotal</Text>
                <Text style={[styles.itemPrecio, styles.itemTextPrincipal]}>{currencyFormat(subtotal)}</Text>
            </View>
            <View style={styles.containerBoton}>
                <CustomButton style={styles.boton} text={'Finalizar compra'} color={'#123d5c'} width={'100%'} height={'auto'} onPress={comprar} />
                <CustomButton style={styles.boton} text={'Vaciar carrito'} color={'#c31f2d'} width={'auto'} height={'auto'} onPress={() => setCarrito([])} />
            </View>
        </ContentBox>
    )
}

const styles = StyleSheet.create({
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
        gap: 5,
        alignItems: 'center'
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