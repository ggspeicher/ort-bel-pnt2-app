import { createStackNavigator } from '@react-navigation/stack';
import { commonOptions } from './commons/CommonOptions';
import Perfil from '../screens/Perfil/Perfil';
import EditarPerfil from '../screens/EditarPerfil/EditarPerfil';
import ComprasStack from '../stacks/ComprasStack';

const Stack = createStackNavigator()

export default () => {
    // averiguando encontre esto, como no quiero que EditarPerfil este en el drawer y solo se pueda acceder
    // desde Perfil debemos crear un Stack es decir agruparlos y ese grupo si colocarlo en el drawer, tal que asi:
    return (
        // headerShown: como ya aparece el header del Drawer, no tiene sentido usar el del Stack tmb,
        // ya que esto ocacionara que se vea duplicado
        <Stack.Navigator>
            <Stack.Screen name="Perfil" component={Perfil} options={{ ...commonOptions, title: 'Tu info', headerShown: false }} />
            <Stack.Screen name="EditarPerfil" component={EditarPerfil} options={{ ...commonOptions, title: 'Editar perfil' }} />
            <Stack.Screen name="ComprasStack" component={ComprasStack} options={{ ...commonOptions, title: 'Mis compras',  }} />
        </Stack.Navigator>
        // el title lo uso para que quede prolijo el espaciado de Editar Perfil
    );
}