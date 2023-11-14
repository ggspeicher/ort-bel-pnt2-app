import { SafeAreaView } from "react-native-safe-area-context"
import CarritoItem from "../CarritoItem/CarritoItem"
import { ScrollView } from "react-native-gesture-handler"

export default () => {

    return (
        <ScrollView>
            <CarritoItem />
            <CarritoItem />
            <CarritoItem />
            <CarritoItem />
            
        </ScrollView>
    )
}