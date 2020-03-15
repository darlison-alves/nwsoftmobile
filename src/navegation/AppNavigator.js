import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import tabNavigator from './MainTabNavigator';

const App = createAppContainer(createSwitchNavigator({
    Main: tabNavigator
}));

export default App;