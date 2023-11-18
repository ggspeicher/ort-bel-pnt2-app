import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

import {
  getAuth,
  signInWithEmailAndPassword,
  initializeAuth,
  getReactNativePersistence,
} from 'firebase/auth';
import { app, auth } from '../../services/config';
import { useNavigation } from '@react-navigation/native';

export default () => {
  //const app = initializeApp(firebaseConfig);
  //const auth = getAuth(app);

  //VER ASYNC STORAGE

  // const auth = initializeAuth(app, {
  //   persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  // });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Usuario autenticado:');
        const user = userCredential.user;
        console.log(user);
        navigation.navigate('Compras');
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
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonCrear}
        onPress={handleCreateAccount}
      >
        <Text style={styles.buttonText}>Crear Cuenta</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonCrear: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
