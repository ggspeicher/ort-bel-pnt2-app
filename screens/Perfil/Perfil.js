import { Avatar } from '@rneui/themed';
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import InformacionPersonal from '../../components/InformacionPersonal/InformacionPersonal';
import Soporte from '../../components/Soporte/Soporte';
import Configuracion from '../../components/Configuracion/Configuracion';
import { ExpandedProvider } from '../../context/ExpandedContext';
import { usePerfil } from '../../context/PerfilContext';
import InfoCompras from '../../components/InfoCompras/InfoCompras';
import { auth } from '../../services/config';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';

export default () => {
  const { perfil } = usePerfil();
  const { nombre, imgPerfil } = perfil;

  const navigation = useNavigation()

  const handleCerrarSesion = async () => {
    try {
      await auth.signOut();
    } catch (err) {
      console.log(err)
    }
    navigation.navigate('Productos');
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ padding: 20, display: 'flex', alignItems: 'center' }}>
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
          <Text style={{ marginTop: 5, fontSize: 20, fontWeight: 'bold' }}>
            {nombre ? nombre : 'cargando...'}
          </Text>
        </View>

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
