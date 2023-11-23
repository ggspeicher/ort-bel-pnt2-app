import { View, Text, StyleSheet, Image } from "react-native";
import MaterialCustomCurrency from "../MaterialCustomCurrency/MaterialCustomCurrency";

export default ({ producto, index }) => {
    const { nombre, urlPath, precio, unidades } = producto

    return (
        <View  style={styles.productoContainer}>
            <Image key={index} source={{ uri: producto.urlPath }} style={styles.image} />
            <View style={styles.textoContainer}>
                <Text style={styles.productoNombre}>{producto.nombre}</Text>
                <View style={styles.productoFooter}>
                    <Text >Cantidad: {producto.unidades}</Text>
                    <MaterialCustomCurrency style={styles.productoTotal} amount={producto.precio * producto.unidades} />
                </View>
            </View>
        </View>
    )

};


const styles = StyleSheet.create({
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
