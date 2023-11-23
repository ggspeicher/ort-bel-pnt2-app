import { Avatar } from '@rneui/themed';
import { SafeAreaView, ScrollView, View, Text, StyleSheet,Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import InformacionPersonal from '../../components/InformacionPersonal/InformacionPersonal';
import Soporte from '../../components/Soporte/Soporte';
import Foto from '../../components/Foto/Foto';
import Configuracion from '../../components/Configuracion/Configuracion';
import { ExpandedProvider } from '../../context/ExpandedContext';
import { usePerfil } from '../../context/PerfilContext';
import InfoCompras from '../../components/InfoCompras/InfoCompras';
import { auth } from '../../services/config';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';

export default () => {
  const { perfil, actualizarPerfil } = usePerfil();

  const navigation = useNavigation()

  const handleCerrarSesion = async () => {
    try {
      await auth.signOut();
      cerrarSesionAlert()
    } catch (err) {
      console.log(err)
    }
    
  }

  const cerrarSesionAlert = () => {
    Alert.alert(
        'Cerraste sesión',
        'Cerraste sesión correctamente',
        [
            {
                text: 'Ok'
            }
        ]
    );
}

  return (
    <SafeAreaView>
      <ScrollView>
        <Foto />

        <ExpandedProvider>
          <InformacionPersonal {...perfil} />
          <InfoCompras />
          <Soporte />
          <Configuracion />
        </ExpandedProvider>

        <TouchableOpacity onPress={handleCerrarSesion}>
          <View
            style={{
              padding: 20,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
              justifyContent: 'center',
            }}
          >
            <Icon name="log-out" size={20} color="#c31f2d" />
            <Text style={{ color: '#C41E3A' }}>Cerrar sesión</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  title: {
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'grey',
  },
});
