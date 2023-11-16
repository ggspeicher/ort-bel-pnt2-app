import { View, Text, Image, StyleSheet } from "react-native"
import { ListItem } from '@rneui/themed';
import { Button } from "@rneui/base";
import { useEffect, useState } from "react";

export default ({ id, nombre, precio, unidades, stock, urlPath, carrito, setCarrito }) => {

    const [cantidad, setCantidad] = useState(unidades);
    const [maxUnidades, setMaxUnidades] = useState(false);

    useEffect(() => {

        // si se cambio la cantidad de un producto dentro del carrito tengo que actualizar todo

        // aviso al cliente si en determinado producto llega al max. de stock
        avisarMaxUnidades();

        const productoParaActualizar = carrito.find((producto) => producto.id === id);

        if (productoParaActualizar) {

            const carritoActualizado = carrito.map((producto) =>
                producto.id === id ? { ...producto, unidades: cantidad } : producto
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

    return (
        <View>
            <ListItem.Swipeable
                rightContent={(reset) => (
                    <Button
                        title="Quitar"
                        onPress={() => reset()}
                        icon={{ name: 'delete', color: 'white' }}
                        buttonStyle={{ minHeight: '100%', backgroundColor: '#c31f2d' }}
                    />
                )}
            >
                <ListItem.Content style={{ display: 'flex', flexDirection: 'row', alignItems: "center", gap: 10, justifyContent: 'flex-start', width: '100%', flex: 1 }}>
                    <Image
                        source={require('../../assets/trago.jpg')}
                        style={styles.img}
                    />
                    <View style={{ display: 'flex', flex: 2 }}>
                        <View style={{ flex: 1 }}>
                            <Text>{nombre}</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                            <Text style={{ color: 'gray' }}><Text style={{ fontWeight: 'bold' }}>{cantidad} u.</Text> x $ {precio.toFixed(2)}</Text>
                            <Text>$ {(precio * cantidad).toFixed(2)}</Text>
                            {maxUnidades ? <Text style={{ color: '#c31f2d', fontWeight: 'bold' }}>MÁX. STOCK</Text> : <Text />}
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
});
