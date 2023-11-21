import { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import InputDefault from '../../components/InputDefault/InputDefault';
import CustomButton from '../../components/CustomButton/CustomButton';
import ServicioPerfil from '../../services/ServicioPerfil';
import { usePerfil } from '../../context/PerfilContext';
import { useNavigation } from '@react-navigation/core';
import TextoError from '../../components/TextoError/TextoError';
import ContentBox from '../../components/ContentBox/ContentBox';


export default () => {

    const navigation = useNavigation();

    const { perfil, actualizarPerfil } = usePerfil()
    const { id, telefono, direccion } = perfil

    const [tel, setTel] = useState(null)
    const [dir, setDirec] = useState(null)

    // validaciones de la actualizacion de perfil
    const [telErr, setTelErr] = useState(false)
    const [dirErr, setDitErr] = useState(false)

    const validarInfo = () => {
        if (tel && dir) {
            return true
        } else {
            if (!tel) {
                setTelErr(true);
            }
            if (!dir) {
                setDitErr(true);
            }
            return false;
        }
    }

    const setErrors = (bol) => {
        setTelErr(bol);
        setDitErr(bol);
    }

    const actualizar = async () => {
        if (validarInfo()) {
            const obj = {
                ...perfil,
                telefono: tel,
                direccion: dir
            }
            await ServicioPerfil.actualizarPerfil(id, obj);
            await actualizarPerfil(id)
            restablecer()
            perfilExitoso()
        }
    }

    const restablecer = () => {
        setTel('')
        setDirec('')
        setErrors(false)
    }

    const perfilExitoso = () => {
        Alert.alert(
            'Perfil actualizado',
            '¡Tu perfil se ha actualizado correctamente!',
            [
                {
                    text: 'Ir a perfil',
                    onPress: () => { navigation.navigate('Perfil') }
                }
            ]
        );
    }

    return (
        <View style={styles.container}>
            <ContentBox>
                <View style={styles.editBox}>
                    <View>
                        <View style={styles.content}>
                            <Icon name='phone' size={20} color="black" />
                            <Text>Teléfono</Text>
                        </View>
                        <InputDefault ph={telefono} value={tel} set={setTel} kbType={'number-pad'} setErrors={setErrors}></InputDefault>
                        {telErr && <TextoError>Teléfono incorrecto</TextoError>}
                    </View>
                    <View>
                        <View style={styles.content}>
                            <Icon name='calendar' size={20} color="black" />
                            <Text>Dirección</Text>
                        </View>
                        <InputDefault ph={direccion} value={dir} set={setDirec} kbType={'default'} setErrors={setErrors}></InputDefault>
                        {dirErr && <TextoError>Dirección incorrecto</TextoError>}
                    </View>
                    <View style={styles.containerBoton}>
                        <CustomButton style={styles.boton} text={'Confirmar edición'} color={'#123d5c'} width={'100%'} height={'auto'} onPress={actualizar} />
                        <CustomButton style={styles.boton} text={'Restablecer'} color={'#c31f2d'} width={'auto'} height={'auto'} onPress={restablecer} />
                    </View>
                </View>
            </ContentBox>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    editBox: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
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
    },
    boton: {
        flex: 1
    }
})