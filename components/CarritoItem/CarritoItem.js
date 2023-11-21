import { View, Text, Image, StyleSheet } from "react-native"
import { ListItem } from '@rneui/themed';
import { Button } from "@rneui/base";
import { useEffect, useState } from "react";
import TextoError from '../../components/TextoError/TextoError';
import ContentBox from "../ContentBox/ContentBox";

export default ({ producto, carrito, setCarrito }) => {

    const { id, nombre, precio, stock, path } = producto

    const [cantidad, setCantidad] = useState(1);
    const [maxUnidades, setMaxUnidades] = useState(false);

    useEffect(() => {

        // aviso al cliente si en determinado producto llega al max. de stock
        avisarMaxUnidades();

        // si se cambio la cantidad de un producto dentro del carrito tengo que actualizar todo,
        // entonces hago un setCarrito del carrito actualizado

        const productoParaActualizar = carrito.find((producto) => producto.id === id);

        if (productoParaActualizar) {

            const carritoActualizado = carrito.map((producto) =>
                producto.id === id ? { ...producto, unidades: cantidad + 1 } : producto
            );
            setCarrito(carritoActualizado);
        }

    }, [cantidad]);

    const avisarMaxUnidades = () => {
        if (cantidad === stock) {
            setMaxUnidades(true);
        } else {
            setMaxUnidades(false);
        }
    }

    const incrementarUnidades = () => {
        if (cantidad < stock) {
            setCantidad((prevCantidad) => prevCantidad + 1);
        }
    };

    const decrementarUnidades = () => {
        if (cantidad > 1) {
            setCantidad((prevCantidad) => prevCantidad - 1);
        }
    };

    const borrarUnidad = () => {
        const carritoActualizado = carrito.filter(producto => producto.id !== id)
        setCarrito(carritoActualizado);
    };

    return (
        <View style={[styles.container, styles.shadowProp]}>
            <ListItem.Swipeable
                rightContent={() => (
                    <Button
                        title="Quitar"
                        onPress={borrarUnidad}
                        icon={{ name: 'delete', color: 'white' }}
                        buttonStyle={{ minHeight: '100%', backgroundColor: '#c31f2d' }}
                    />
                )}
            >
                <ListItem.Content style={{ display: 'flex', flexDirection: 'row', alignItems: "center", gap: 10, justifyContent: 'flex-start', width: '100%', flex: 1 }}>
                    <Image
                        source={{ uri: path }}
                        style={styles.img}
                    />
                    <View style={{ display: 'flex', flex: 2 }}>
                        <View style={{ flex: 1 }}>
                            <Text>{nombre}</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                            <Text style={{ color: 'gray' }}><Text style={{ fontWeight: 'bold' }}>{cantidad} u.</Text> x $ {precio.toFixed(2)}</Text>
                            <Text>$ {(precio * cantidad).toFixed(2)}</Text>
                            {maxUnidades ? <TextoError>MÁX. STOCK</TextoError> : <Text />}
                        </View>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                        <Button
                            buttonStyle={styles.boton}
                            onPress={incrementarUnidades}
                        >+</Button>
                        <Button
                            buttonStyle={styles.boton}
                            onPress={decrementarUnidades}
                        >-</Button>
                    </View>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        backgroundColor: 'white'
    }, 
    img: {
        width: 100,
        height: 100,
    },
    boton: {
        width: 40,
        height: 40,
        borderRadius: 25,
        backgroundColor: '#123d5c',
        justifyContent: 'center',
        alignItems: 'center',
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    }
});
