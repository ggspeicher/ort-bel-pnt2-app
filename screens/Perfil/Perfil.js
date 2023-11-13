import { Avatar } from '@rneui/themed';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import InformacionPersonal from '../../components/InformacionPersonal/InformacionPersonal';
import Soporte from '../../components/Soporte/Soporte';
import Configuracion from '../../components/Configuracion/Configuracion';
import ExpandedContext from '../../context/ExpandedContext';
import { useState } from 'react';

export default () => {

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
                            borderColor: 'white',
                        }}
                    >
                        <Avatar.Accessory style={ { right: 17,bottom: 3}} size={33} />
                    </Avatar>
                    <Text style={{ marginTop: 5, fontSize: 20, fontWeight: 'bold' }}>Marcelo Torres</Text>
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
                    <InformacionPersonal />
                    <Soporte />
                    <Configuracion />
                </ExpandedContext.Provider>

                <View style={{margin: 20, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5, justifyContent: 'center' }}>
                    <Icon name="log-out" size={20} color="#C41E3A" />
                    <Text style={{ color: '#C41E3A' }}>Cerrar sesión</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}