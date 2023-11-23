import { View } from 'react-native';
import { Text, StyleSheet } from 'react-native';

export default ({title, bgColor }) => {
    return(
        <View style={{backgroundColor: bgColor, borderRadius: 5, marginLeft: 'auto'}}>
            <Text style={{  color: 'white', padding: 4, fontWeight: 'bold', fontSize: 10 }}>{title.toUpperCase()}</Text>
        </View>
        
    )
}