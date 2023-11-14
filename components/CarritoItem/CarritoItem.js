import { View, Text, Image, StyleSheet } from "react-native"
import { ListItem } from '@rneui/themed';
import Icon from 'react-native-vector-icons/Feather';
import { Button } from "@rneui/base";

export default () => {
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
                <ListItem.Content style={{ display: 'flex', flexDirection: 'row', alignItems: "center", gap: 10, justifyContent: 'flex-start', width: '100%', flex: 1}}>
                    <Image
                        source={require('../../assets/trago.jpg')}
                        style={styles.img}
                    />
                    <View style={{ display: 'flex', flex: 2 }}>
                        <View style={{ flex: 1 }}>
                            <Text>COMBO BIG: 1 Fernet Branca y 2 Coca-Cola</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                            <Text style={{color: 'gray'}}><Text style={{fontWeight: 'bold'}}>3 u.</Text> x $ 3.000</Text>
                            <Text>$ 9.000</Text>
                        </View>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Button buttonStyle={styles.boton}>+</Button>
                        <Button buttonStyle={styles.boton}>-</Button>
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
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#123d5c',
        justifyContent: 'center',
        alignItems: 'center',
    },
  });
  