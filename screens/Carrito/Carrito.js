import CarritoItems from "../../components/CarritoItems/CarritoItems"
import FinalizarCompra from "../../components/FinalizarCompra/FinalizarCompra"
import { ScrollView } from "react-native-gesture-handler"
import PantallaVacia from "../../components/PantallaVacia/PantallaVacia"
import { View, StyleSheet } from "react-native"
import { useCarrito } from "../../context/CarritoContext"


export default () => {

    const { carrito, setCarrito } = useCarrito();

    return (
        <ScrollView>
            <View style={styles.container}>
                {carrito.length > 0 ? (
                    <>
                        <CarritoItems carrito={carrito} setCarrito={setCarrito} />
                        <FinalizarCompra carrito={carrito} setCarrito={setCarrito} ></FinalizarCompra>
                    </>
                ) : (
                    <PantallaVacia texto={'¡Tu carrito está vacío!'} />
                )}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
});
