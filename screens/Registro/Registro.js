import { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet,Alert} from 'react-native';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import { app, db } from '../../services/config';
import { useNavigation } from '@react-navigation/native';
import { addDoc, collection } from 'firebase/firestore';
import DateTimePicker from '@react-native-community/datetimepicker';

export default Registro = () => {
  const auth = getAuth(app);
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState(new Date());

  const handleDateChange = (event, selectedDate) => {
    if (selectedDate) {
      setFechaNacimiento(selectedDate);
    }
  };

  const handleCreateAccount = async () => {
    try {
      // Crear cuenta en Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log('Cuenta creada con éxito:', user);
      Alert.alert('Usuario creado con éxito, ya puedes iniciar sesión');

      // Almacena datos adicionales en Firestore
      const userId = user.uid;
      addDoc(collection(db, 'usuarios'), {
        nombre: name,
        correo: email,
        telefono: telefono,
        direccion: direccion,
        id: userId,
        fechaNacimiento: fechaNacimiento,
        compras: [],
        imgPerfil: '',
      });

      console.log('Datos adicionales almacenados en Firestore');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error al crear usuario:', error);
      Alert.alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre Completo"
        value={name}
        onChangeText={(text) => setName(text)}
      />
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
      <TextInput
        style={styles.input}
        placeholder="Direccion"
        value={direccion}
        onChangeText={(text) => setDireccion(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefono"
        value={telefono}
        onChangeText={(number) => setTelefono(number)}
      />
      <View style={styles.row}>
        <Text style={styles.labelDate}>Fecha de Nacimiento:</Text>
        <DateTimePicker
          value={fechaNacimiento}
          mode="date"
          display="default"
          onChange={handleDateChange}
          maximumDate={
            new Date(new Date().setFullYear(new Date().getFullYear() - 18))
          }
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
        <Text style={styles.buttonText}>Registrarse</Text>
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
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
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  labelDate: {
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 10,
  },
});
