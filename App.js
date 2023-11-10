import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Carrito from './screens/Carrito/Carrito';
import Compras from './screens/Compras/Compras';

const Drawer = createDrawerNavigator();

export default function App() {

  return (

    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Carrito" component={Carrito} />
          <Drawer.Screen name="Compras" component={Compras} />
        </Drawer.Navigator>
      </NavigationContainer>
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
