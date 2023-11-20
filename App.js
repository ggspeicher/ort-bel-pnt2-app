import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Carrito from './screens/Carrito/Carrito';
import Compras from './screens/Compras/Compras';
import Home from './screens/Home/Home';
import Perfil from './screens/Perfil/Perfil';
import EditarPerfil from './screens/EditarPerfil/EditarPerfil';
import DetalleProducto from './screens/DetalleProducto/DetalleProducto';
import { PerfilProvider } from './context/PerfilContext';
import Login from './screens/Login/Login';
import Registro from './screens/Registro/Registro';
import { PerfilProvider } from './context/PerfilContext';
import { CarritoProvider } from './context/CarritoContext';
import PerfilStack from './stacks/PerfilStack';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <PerfilProvider>
        <CarritoProvider>
          <NavigationContainer>
            <Drawer.Navigator>
              <Drawer.Screen name="PerfilStack" component={PerfilStack} options={{ title: 'Perfil' }} />
              <Drawer.Screen name="Carrito" component={Carrito} />
              <Drawer.Screen name="Productos" component={Home} />
              <Drawer.Screen name="Login" component={Login} />
              <Drawer.Screen name="Registro" component={Registro} />
               <Drawer.Screen name="DetalleProducto" component={DetalleProducto}/>
            </Drawer.Navigator>
          </NavigationContainer>
        </CarritoProvider>
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
