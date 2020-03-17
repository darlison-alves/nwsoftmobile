import { AppRegistry, Platform } from 'react-native';
import App from './App';

AppRegistry.registerComponent('NwSoft', () => App);

if (Platform.OS === 'web') {
  const rootTag = document.getElementById('root') || document.getElementById('main');
  AppRegistry.runApplication('NwSoft', { rootTag });
}
