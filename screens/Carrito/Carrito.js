import CarritoItems from "../../components/CarritoItems/CarritoItems"
import FinalizarCompra from "../../components/FinalizarCompra/FinalizarCompra"
import { ScrollView } from "react-native-gesture-handler"
import { useState } from "react"
import CarritoVacio from "../../components/PantallaVacia/PantallaVacia"
import PantallaVacia from "../../components/PantallaVacia/PantallaVacia"
import { View, StyleSheet } from "react-native"


export default () => {

    const [carrito, setCarrito] = useState([
        {
            id: 1,
            nombre: 'COMBO 2',
            unidades: 1,
            precio: 50.00,
            stock: 6,
            urlPath: '../../assets/trago.jpg',

        },
        {
            id: 2,
            nombre: 'COMBO 2',
            unidades: 1,
            precio: 50.00,
            stock: 6,
            urlPath: '../../assets/trago.jpg',

        }
    ])

    return (
        <ScrollView>
            {carrito.length > 0 ? (
                <>
                    <CarritoItems carrito={carrito} setCarrito={setCarrito} />
                    <FinalizarCompra carrito={carrito} setCarrito={setCarrito} ></FinalizarCompra>
                </>
            ) : (
                <PantallaVacia texto={'¡Tu carrito está vacío!'} />
            )}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
});
