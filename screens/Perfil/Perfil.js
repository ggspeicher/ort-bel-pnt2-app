import { Avatar } from '@rneui/themed';
import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { ListItem } from '@rneui/themed';

export default () => {

    const [nombre, setNombre] = useState('Marcelo')
    const [apellido, setApellido] = useState('Torres')
    const [telefono, setTelefono] = useState('1168247438')
    const [correo, setCorreo] = useState('marcelotorres@gmail.com')
    const [direccion, setDireccion] = useState('Av. Siempre Viva 3447')


    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <Avatar
                size={160}
                rounded
                source={{ uri: 'https://randomuser.me/api/portraits/men/46.jpg'}}
                avatarStyle={{
                        borderWidth: 4, 
                        borderColor: 'white', 
                    }}
                >
                <Avatar.Accessory style={styles.avatarPencil} size={33} />
                </Avatar>

                <Text style={{marginTop: 5, fontSize: 20, fontWeight: 'bold'}}>{nombre} {apellido}</Text>
            </View>
            <View style={styles.contentBox}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5}}>
                    <Feather name="user" size={20} color="black" />
                    <Text style={{fontSize: 14}}>Informacion personal</Text>
                </View>
                <View style={{ display: 'flex', gap: 7}}>
                    <View style={{ flexDirection: 'column'}}>
                        <Text style={{ fontWeight: 'bold'}}>NOMBRE</Text>
                        <Text>{nombre} {apellido}</Text>
                    </View>
                    <View style={{ flexDirection: 'column'}}>
                        <Text style={{ fontWeight: 'bold'}}>TELEFONO</Text>
                        <Text>{telefono}</Text>
                    </View>
                    <View style={{ flexDirection: 'column'}}>
                        <Text style={{ fontWeight: 'bold'}}>CORREO</Text>
                        <Text>{correo}</Text>
                    </View>
                    <View style={{ flexDirection: 'column'}}>
                        <Text style={{ fontWeight: 'bold'}}>DIRECCION</Text>
                        <Text>{direccion}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    lineStyle:{
        borderWidth: 0.5,
        borderColor:'black',
        margin:10,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
      padding: 10,
      back: '#000',
      height: '100%'
    },
    avatarContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    avatarPencil: {
        right: 17,
        bottom: 3
    },
    contentBox: {
        marginTop: 10,
        display: 'flex',
        gap: 5,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ededed',
    }
  });