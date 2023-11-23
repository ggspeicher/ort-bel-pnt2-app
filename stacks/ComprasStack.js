import { createStackNavigator } from '@react-navigation/stack';
import { commonOptions } from './commons/CommonOptions';
import CompraDetalle from '../screens/CompraDetalle/CompraDetalle';
import Compras from '../screens/Compras/Compras';

const Stack = createStackNavigator()

export default () => {

    return (

        <Stack.Navigator>
            <Stack.Screen name="Compras" component={Compras} options={{ title: 'Mis Compras', headerShown: false }} />
            <Stack.Screen name="CompraDetalle" component={CompraDetalle} options={{ title: 'Detalle de Compra', headerShown: true }} />
        </Stack.Navigator>
    );
}