import { createStackNavigator } from '@react-navigation/stack';
import { commonOptions } from './commons/CommonOptions';
import Login from '../screens/Login/Login';
import Registro from '../screens/Registro/Registro';

const Stack = createStackNavigator()

export default () => {

    return (

        <Stack.Navigator>
              <Stack.Screen name="Login" component={Login} options={{ ...commonOptions, title: 'Login', headerShown: false }} />
              <Stack.Screen name="Registro" component={Registro} options={{  ...commonOptions, title: 'Login', headerShown: false }} />
        </Stack.Navigator>
    );
}