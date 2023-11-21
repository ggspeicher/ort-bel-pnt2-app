import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

export default ({ texto }) => {
  // por ahora lo redirijo a su perfil, pero cuando este home lo redirijo a home
  const navigation = useNavigation();

  const irAHome = () => {
    // https://stackoverflow.com/questions/49826920/how-to-navigate-between-different-nested-stacks-in-react-navigation
    // al estar en otro ambito de navegacion se necesita hacer esto:
    navigation.navigate('NuestraTienda', { screen: 'Productos' }); 
  };

  return (
    <View style={styles.container}>
      <Text>{texto}</Text>
      <View style={styles.containerBoton}>
        <CustomButton
          style={styles.boton}
          text={'Ver productos'}
          color={'#123d5c'}
          width={'100%'}
          height={'auto'}
          onPress={irAHome}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerBoton: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    marginTop: 10,
  },
});
