import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/config';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton/CustomButton';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Usuario autenticado:');
        const user = userCredential.user;
        console.log(user);
        navigation.navigate('NuestraTienda');
      })
      .catch((error) => {
        console.error('Error de autenticación:', error.message);
        Alert.alert(error.message);
      });
    console.log('Email:', email);
    console.log('Contraseña:', password);
  };

  const handleCreateAccount = () => {
    navigation.navigate('Registro');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <CustomButton
        text={'Iniciar Sesión'}
        color={'#123d5c'}
        width={'100%'}
        onPress={handleLogin}
        marginBottom={10}
      />
      <CustomButton
        text={'Crear Cuenta'}
        color={'#c31f2d'}
        width={'100%'}
        height={'auto'}
        onPress={handleCreateAccount}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
