import { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import InputDefault from '../../components/InputDefault/InputDefault';
import CustomButton from '../../components/CustomButton/CustomButton';
import ServicioPerfil from '../../services/ServicioPerfil';
import { addDoc, collection } from '@firebase/firestore';
import { db } from '../../services/config';


export default () => {

    const [perfil, setPerfil] = useState({})

    useEffect(() => {
        const obtenerDatos = async () => {
            setPerfil(await ServicioPerfil.obtenerPerfil("1"));
        };
        obtenerDatos();
    }, []);

    const { telefono, direccion } = perfil
    
    const [tel, setTel] = useState()
    const [dir, setDirec] = useState()

    const validarInfo = () => {
        if(tel && dir){
            return true
        } else {
            return false
        }
    }

    const actualizar = async () => {
        if(validarInfo) {
            const obj = {
                ...perfil,
                telefono: tel,
                direccion: dir
            }
            await ServicioPerfil.actualizarPerfil("1", obj);
            restablecer()
            await ServicioPerfil.obtenerPerfil("1", true);
        }
    }

    const restablecer = () => {
        setTel('')
        setDirec('')
    }

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.content}>
                    <Icon name='phone' size={20} color="black" />
                    <Text>Telefono</Text>
                </View>
                <InputDefault ph={telefono} value={tel} set={setTel} kbType={'number-pad'}></InputDefault>
            </View>
            <View>
                <View style={styles.content}>
                    <Icon name='calendar' size={20} color="black" />
                    <Text>Dirección</Text>
                </View>
                <InputDefault ph={direccion} value={dir} set={setDirec} kbType={'default'}></InputDefault>
            </View>
            <View style={styles.containerBoton}>
                <CustomButton style={styles.boton} text={'Confirmar edición'} color={'#123d5c'} width={'100%'} height={'auto'} onPress={actualizar} />
                <CustomButton style={styles.boton} text={'Restablecer'} color={'#c31f2d'} width={'auto'} height={'auto'} onPress={restablecer} />
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