import { Input } from 'react-native-elements';
import { useEffect, useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import InputDefault from '../../components/InputDefault/InputDefault';
import CustomButton from '../../components/CustomButton/CustomButton';
import ServicioPerfil from '../../services/ServicioPerfil';
import { usePerfil } from '../../context/PerfilContext';


export default () => {

    const { perfil, actualizarPerfil } = usePerfil()
    
    const { telefono, direccion } = perfil
    // telefono es luego convertido a string xq en placeholder no se puede nums y tira error
    
    const [tel, setTel] = useState()
    const [dir, setDirec] = useState()

    const validarInfo = () => {
        return tel && dir;
    }

    const actualizar = () => {
        if(validarInfo) {
            const obj = {
                ...perfil,
                telefono: tel,
                direccion: dir
            }
            actualizarPerfil(obj);
        }
    }


    return (
        <View style={styles.container}>
            <View>
                <View style={styles.content}>
                    <Icon name='phone' size={20} color="black" />
                    <Text>Telefono</Text>
                </View>
                <InputDefault ph={String(telefono)} value={tel} set={setTel}></InputDefault>
            </View>
            <View>
                <View style={styles.content}>
                    <Icon name='calendar' size={20} color="black" />
                    <Text>Dirección</Text>
                </View>
                <InputDefault ph={direccion} value={dir} set={setDirec}></InputDefault>
            </View>
            <View style={styles.containerBoton}>
                <CustomButton style={styles.boton} text={'Confirmar edición'} color={'#123d5c'} width={'100%'} height={'auto'} onPress={actualizar} />
                <CustomButton style={styles.boton} text={'Restablecer'} color={'#c31f2d'} width={'auto'} height={'auto'} />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        gap: 16
    },
    content: {
        display: 'flex',
        gap: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    containerBoton: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        marginTop: 10,
    },
    boton: {
        flex: 1
    }
})