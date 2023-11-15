import { SafeAreaView } from "react-native-safe-area-context"
import CarritoItem from "../CarritoItem/CarritoItem"
import { ScrollView } from "react-native-gesture-handler"
import { View, Text } from "react-native-web"
import FinalizarCompra from "../FinalizarCompra/FinalizarCompra"

export default () => {

    return (
        <ScrollView>
            <CarritoItem />
            <CarritoItem />
            <CarritoItem />
            <CarritoItem />
            <FinalizarCompra></FinalizarCompra>
        </ScrollView>
    )
}