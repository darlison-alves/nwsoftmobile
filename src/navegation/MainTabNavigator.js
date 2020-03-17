import { Platform } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Index } from '../pages';
import { Login } from '../pages/Login';
import { Details } from '../pages/Details';
import { RegisterTask } from '../pages/register-task';

const config = Platform.select({
    web: { headerMode: 'none' },
    default: {}
})

const HomeStack = createStackNavigator(
    {
        Home: Index,
        Details: Details,
        Login: Login,
        Register: RegisterTask
    },
    { ...config, initialRouteName: 'Login' }
)

HomeStack.path = '';

const tabNavigator = createAppContainer(HomeStack);

tabNavigator.path = '';

export default tabNavigator;