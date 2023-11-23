import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import Carrito from './screens/Carrito/Carrito';
import AcercaDe from './screens/AcercaDe/AcercaDe';
import { PerfilProvider } from './context/PerfilContext';
import { CarritoProvider } from './context/CarritoContext';
import { commonOptions } from './stacks/commons/CommonOptions';
import PerfilStack from './stacks/PerfilStack';
import LoginStack from './stacks/LoginStack';
import { useEffect, useState } from 'react';
import { auth } from './services/config';
import DetalleProductoStack from './stacks/DetalleProductoStack';
import ComprasStack from './stacks/ComprasStack';

const Drawer = createDrawerNavigator();

export default function App() {

  const [logeado, setLogeado] = useState(false)

  const iconConfig = (iconName) => { return {
    drawerIcon: ({ focused, size }) => (
      <Icon
        name={iconName}
        size={size}
        color={focused ? '#008f39' : 'black'}
      />
    )
  }};

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
        setLogeado(!!user)
    });
  }, []);

  return (
    <>
      <StatusBar style="auto" />
      <PerfilProvider>
        <CarritoProvider>
          <NavigationContainer>
            <Drawer.Navigator>
              {
                !logeado ? (
                  <>
                    <Drawer.Screen name="LoginStack" component={LoginStack} options={{title: 'Login' }} />
                  </>
                ) : (
                  <>
                    <Drawer.Screen name="NuestraTienda" component={DetalleProductoStack} options={{ ...commonOptions, ...iconConfig('home'), title: 'Nuestros productos' }} />
                    <Drawer.Screen name="PerfilStack" component={PerfilStack} options={{ ...commonOptions, ...iconConfig('user'), title: 'Perfil' }} />
                    <Drawer.Screen name="Carrito" component={Carrito} options={{ ...commonOptions,  ...iconConfig('shopping-cart'), }} />
                    <Drawer.Screen name="ComprasStack" component={ComprasStack} options={{ ...commonOptions, ...iconConfig('shopping-bag'), title: 'Mis compras' }} />
                    <Drawer.Screen name="AcercaDe" component={AcercaDe} options={{ ...commonOptions, ...iconConfig('sun'), title: 'Acerca de Escabiapp' }} />
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
