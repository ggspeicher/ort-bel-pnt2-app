import { Avatar } from '@rneui/themed';
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import InformacionPersonal from '../../components/InformacionPersonal/InformacionPersonal';
import Soporte from '../../components/Soporte/Soporte';
import Configuracion from '../../components/Configuracion/Configuracion';
import ExpandedContext from '../../context/ExpandedContext';
import { useEffect, useState } from 'react';

import { getDocs, collection, query, where } from 'firebase/firestore'
// getDocs me permite obtener los documentos de una coleccion.
// collection me permite obtener una coleccion.
// query la uso cuando quiero generar una consulta.
// where la uso para agregar filtros a mis consultas.

// ahora me traigo mi referencia de la base de datos
import { db } from '../../services/config'


import { getAuth } from "firebase/auth";

export default () => {

    const [perfil, setPerfil] = useState({})

    useEffect(() => {

        const obtenerPerfil = async () => {
            const q = query(collection(db, 'usuarios'), where('id', '==', 1));

            try {
                const resultadoQuery = await getDocs(q);
                
                if (!resultadoQuery.empty) {
                    setPerfil(resultadoQuery.docs[0].data());
                }
            } catch ( err ) {
                console.log('Error al traer el usuario: ', err)
            }
        };

        obtenerPerfil();

        //const auth = getAuth();
        //const user = auth.currentUser;
        //setPerfil(user)

    },[])

    const [expandedIP, setExpandedIP] = useState(false);
    const [expandedConfiguracion, setExpandedConfiguracion] = useState(false);
    const [expandedSoporte, setExpandedSoporte] = useState(false);

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={ { margin: 20, display: 'flex', alignItems: 'center' } }>
                    <Avatar
                        size={160}
                        rounded
                        source={{ uri: 'https://randomuser.me/api/portraits/men/46.jpg' }}
                        avatarStyle={{
                            borderWidth: 4,
                            borderColor: '#123d5c',
                        }}
                    >
                        <Avatar.Accessory style={ { right: 17,bottom: 3}} size={33} />
                    </Avatar>
                    <Text style={{ marginTop: 5, fontSize: 20, fontWeight: 'bold' }}>{perfil.nombre}</Text>
                </View>

                <ExpandedContext.Provider
                    value={{
                        expandedIP,
                        setExpandedIP,
                        expandedConfiguracion,
                        setExpandedConfiguracion,
                        expandedSoporte,
                        setExpandedSoporte
                    }}
                >
                    <InformacionPersonal perfil={perfil} />
                    <Soporte />
                    <Configuracion />
                </ExpandedContext.Provider>

                <View style={{margin: 20, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5, justifyContent: 'center' }}>
                    <Icon name="log-out" size={20} color="#c31f2d" />
                    <Text style={{ color: '#C41E3A' }}>Cerrar sesión</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold'
    },
    subtitle: {
        color: 'grey'
    },
});