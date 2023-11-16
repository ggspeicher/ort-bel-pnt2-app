import { View, Text } from "react-native"

export default ( { compra } ) => {
    
    return (
        <View>
            <Text>{compra.fecha}</Text>
            <Text>{compra.total}</Text>
            <Text>asd</Text>
        </View>
    )
}