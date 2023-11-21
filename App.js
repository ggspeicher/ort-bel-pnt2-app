import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Carrito from './screens/Carrito/Carrito';
import Home from './screens/Home/Home';
import DetalleProducto from './screens/DetalleProducto/DetalleProducto';
import { PerfilProvider } from './context/PerfilContext';
import { CarritoProvider } from './context/CarritoContext';
import PerfilStack from './stacks/PerfilStack';
import LoginStack from './stacks/LoginStack';
import { useEffect, useState } from 'react';
import { auth } from './services/config';

const Drawer = createDrawerNavigator();

export default function App() {

  const [logeado, setLogeado] = useState(false)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setLogeado(true)
      } else {
        // por si se cierra sesion se actualiza y lo cambia a false
        setLogeado(false)
      }
    });
  }, []);

  return (
    <>
      <StatusBar style="auto" />
      <PerfilProvider>
        <CarritoProvider>
          <NavigationContainer>
            <Drawer.Navigator>
              <Drawer.Screen name="Productos" component={Home} />
              <Drawer.Screen name="DetalleProducto" component={DetalleProducto} />
              {
                !logeado ? (
                  <>
                    <Drawer.Screen name="LoginStack" component={LoginStack} options={{ title: 'Login' }} />
                  </>
                ) : (
                  <>
                    <Drawer.Screen name="PerfilStack" component={PerfilStack} options={{ title: 'Perfil' }} />
                    <Drawer.Screen name="Carrito" component={Carrito} />
                  </>
                )
              }
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
