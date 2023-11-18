import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Carrito from './screens/Carrito/Carrito';
import Compras from './screens/Compras/Compras';
import Perfil from './screens/Perfil/Perfil';
import EditarPerfil from './screens/EditarPerfil/EditarPerfil';
import { PerfilProvider } from './context/PerfilContext';
import Home from './screens/Home/Home';
import Login from './screens/Login/Login';
import Registro from './screens/Registro/Registro';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <PerfilProvider>
        <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen name="EditarPerfil" component={EditarPerfil} />
            <Drawer.Screen name="Carrito" component={Carrito} />
            <Drawer.Screen name="Perfil" component={Perfil} />
            <Drawer.Screen name="Compras" component={Compras} />
            <Drawer.Screen name="Productos" component={Home} />
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="Registro" component={Registro} />
          </Drawer.Navigator>
        </NavigationContainer>
      </PerfilProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
