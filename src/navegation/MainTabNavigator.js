import { Platform } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Index } from '../pages';
import { Login } from '../pages/Login';
import { Details } from '../pages/Details';
import { RegisterTask } from '../pages/register-task';
import { EditTask } from '../pages/edit-task';
import { SingUp } from '../pages/Singup';

const config = Platform.select({
    web: { headerMode: 'none' },
    default: {}
})

const HomeStack = createStackNavigator(
    {
        Home: Index,
        Details: Details,
        Login: Login,
        Register: RegisterTask,
        EditTask: EditTask,
        SingUp: SingUp
    },
    { ...config, initialRouteName: 'SingUp' }
)

HomeStack.path = '';

const tabNavigator = createAppContainer(HomeStack);

tabNavigator.path = '';

export default tabNavigator;