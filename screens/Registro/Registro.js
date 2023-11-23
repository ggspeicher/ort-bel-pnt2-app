import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app, db } from '../../services/config';
import { useNavigation } from '@react-navigation/native';
import { addDoc, collection } from 'firebase/firestore';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import CustomButton from '../../components/CustomButton/CustomButton';

export default Registro = () => {
  const auth = getAuth(app);
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (selectedDate) => {
    setDatePickerVisibility(false);
    setShowDatePicker(false);
    if (selectedDate) {
      setFechaNacimiento(selectedDate);
    }
  };

  const showDatePickerModal = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const returnToLogin = () => {
    navigation.navigate('Login');
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
      Alert.alert('Usuario creado con éxito');

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
        onChangeText={(number) => {
          setTelefono(number.replace(/[^0-9()-]/g, ''));
        }}
        keyboardType="phone-pad"
      />
      <View style={styles.row}>
        <Text style={styles.labelDate}>Fecha de Nacimiento:</Text>
        <TouchableOpacity onPress={showDatePickerModal}>
          <Text>{fechaNacimiento.toDateString()}</Text>
        </TouchableOpacity>

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleDateChange}
          onCancel={hideDatePicker}
          maximumDate={
            new Date(new Date().setFullYear(new Date().getFullYear() - 18))
          }
        />
        {showDatePicker && Platform.OS === 'android' && (
          <DateTimePicker
            value={fechaNacimiento}
            mode="date"
            display="default"
            onChange={handleDateChange}
            maximumDate={
              new Date(new Date().setFullYear(new Date().getFullYear() - 18))
            }
          />
        )}
      </View>

      <CustomButton
        style={styles.buttonBlue}
        text={'Registrarse'}
        color={'#123d5c'}
        width={'100%'}
        height={'auto'}
        onPress={handleCreateAccount}
        marginBottom={10}
      />

      <CustomButton
        style={styles.buttonGreen}
        text={'Ya tengo cuenta'}
        color={'#c31f2d'}
        width={'100%'}
        height={'auto'}
        onPress={returnToLogin}
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
  row: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderWidth: 1,
    borderColor: '#555',
    height: 40,
    width: '100%',
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
  labelDate: {
    marginRight: 20,
  },
  datePicker: {
    width: 200,
  },
});
