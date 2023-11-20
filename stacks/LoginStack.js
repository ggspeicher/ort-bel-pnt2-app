import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login/Login';
import Registro from '../screens/Registro/Registro';

const Stack = createStackNavigator()

export default () => {

    return (

        <Stack.Navigator>
              <Stack.Screen name="Login" component={Login} options={{ title: 'Login', headerShown: false }} />
              <Stack.Screen name="Registro" component={Registro} options={{ title: 'Login', headerShown: false }} />
        </Stack.Navigator>
    );
}