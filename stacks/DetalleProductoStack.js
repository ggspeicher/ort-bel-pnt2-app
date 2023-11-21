import { createStackNavigator } from '@react-navigation/stack';
import DetalleProducto from '../screens/DetalleProducto/DetalleProducto';
import Home from '../screens/Home/Home';
import Productos from '../components/Productos/Productos';

const Stack = createStackNavigator()

export default () => {

    return (

        <Stack.Navigator>
            <Stack.Screen name="Productos" component={Home} options={{ title: 'Home', headerShown: false }} />
            <Stack.Screen name="DetalleProducto" component={DetalleProducto} options={{ title: 'DetalleProducto', headerShown: false }} />
        </Stack.Navigator>
    );
}