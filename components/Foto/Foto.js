// https://docs.expo.dev/versions/latest/sdk/imagepicker/

import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Avatar } from 'react-native-elements';
import { usePerfil } from '../../context/PerfilContext';
import ServicioPerfil from '../../services/ServicioPerfil';
import { auth } from '../../services/config';
import { Alert } from 'react-native';

export default () => {

    const { perfil, actualizarPerfil } = usePerfil()

    const { nombre, imgPerfil } = perfil

    const fotoAlert = () => {
        Alert.alert(
            'Perfil actualizado',
            'Foto actualizada correctamente',
            [
                {
                    text: 'Ok'
                }
            ]
        );
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            const obj = {
                ...perfil,
                imgPerfil: result.assets[0].uri
            }
            const user = auth.currentUser
            await ServicioPerfil.actualizarPerfil(user.uid, obj);
            await actualizarPerfil(user.uid)
            fotoAlert()
        }
    }

    return (
        <View style={{ padding: 20, display: 'flex', alignItems: 'center' }}>
            <TouchableOpacity onPress={pickImage}>
                <Avatar
                    size={160}
                    rounded
                    source={{
                        uri: imgPerfil
                            ? imgPerfil
                            : 'https://www.centraltrials.com/wp-content/uploads/2016/11/User-Default.jpg',
                    }}
                    avatarStyle={{
                        borderWidth: 4,
                        borderColor: '#123d5c',
                    }}
                >

                    <Avatar.Accessory style={{ right: 17, bottom: 3 }} size={33} />

                </Avatar>
            </TouchableOpacity>
            <Text style={{ marginTop: 5, fontSize: 20, fontWeight: 'bold' }}>
                {nombre ? nombre : 'cargando...'}
            </Text>
        </View>
    );
}