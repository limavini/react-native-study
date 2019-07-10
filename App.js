import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import LayoutScreen from './src/screens/LayoutScreen';

const navigator = createStackNavigator({
  Home: HomeScreen,
  Layout: LayoutScreen
});
import ComponentsScreen from "./src/screens/ComponentsScreen";

const navigator = createStackNavigator(
  // Rotas (caminho: componente)
  {
    Home: HomeScreen,
    Components: ComponentsScreen
  },
  {
    initialRouteName: 'Components',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
