import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/Mapscreen';
import EuropeScreen from './screens/EuropeScreen';
import AfricaScreen from './screens/Africa';
import AustraliaScreen from './screens/AustraliaScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'; 
import AsiaScreen from './screens/AsiaScreen';
import NorthAmericaScreen from './screens/NorthAmericaScreen';
import SouthAmericaScreen from './screens/SouthAmericaScreen';
import AntarticaScreen from './screens/AntarticaScreen';
import TigerScreen from './screens/TigerScreen';
import LionScreen from './screens/LionScreen';
import PythonScreen from './screens/PythonScreen';
import ElephantScreen from './screens/ElephantScreen';
import PenguinScreen from './screens/PenguinScreen';
import SealScreen from './screens/SealScreen';
import BlueWhaleScreen from './screens/BlueWhaleScreen';
import KangarooScreen from './screens/KangarooScreen';
import KoalaScreen from './screens/KoalaScreen';
import SkuasScreen from './screens/SkuasScreen';
import HippopotamusScreen from './screens/HippopotamusScreen';
import GiraffeScreen from './screens/GiraffeScreen';
import WildBeestScreen from './screens/WildBeestScreen';
import LeopardScreen from './screens/LeopardScreen'
import * as Speech from 'expo-speech';
import QuokkaScreen from './screens/QuokkaScreen';
import EchidnaScreen from './screens/EchidnaScreen';
import BaldEagleScreen from './screens/BaldEagleScreen';
import ElkScreen from './screens/ElkScreen';
import CougarScreen from './screens/CougarScreen';
import AmericanAlligatorScreen from './screens/AmericanAlligator';
import AnacondaScreen from './screens/AnacondaScreen';
import PiranhaScreen from './screens/PiranhaScreen';
import HummingBirdScreen from './screens/HummingBird';
import LowlandTapirScreen from './screens/LowlandTapirScreen';
import BearScreen from './screens/BearScreen';
import BisonScreen from './screens/BisonScreen';
import LynxScreen from './screens/LynxScreen';
import WolverineScreen from './screens/WolverineScreen';
export default class App extends React.Component {

  render() {  
    return ( 
      <SafeAreaProvider> 
         
          <AppContainer /> 
        
      </SafeAreaProvider> 
    );
  }
}
var AppNavigator = createSwitchNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  HomeScreen: { screen: HomeScreen },
  MapScreen: { screen: MapScreen },
  AsiaScreen: { screen: AsiaScreen },
  EuropeScreen: { screen: EuropeScreen },
  AfricaScreen: { screen: AfricaScreen },
  AustraliaScreen: { screen: AustraliaScreen },
  NorthAmericaScreen: { screen: NorthAmericaScreen },
  SouthAmericaScreen: { screen: SouthAmericaScreen },
  AntarticaScreen: { screen: AntarticaScreen },
  TigerScreen: { screen: TigerScreen },
  LionScreen: { screen: LionScreen },
  ElephantScreen:{screen:ElephantScreen},
  PythonScreen:{screen:PythonScreen},
  PenguinScreen:{screen:PenguinScreen},
  SealScreen:{screen:SealScreen},
  BlueWhaleScreen:{screen:BlueWhaleScreen},
  KangarooScreen:{screen:KangarooScreen},
  KoalaScreen:{screen:KoalaScreen},
  SkuasScreen:{screen:SkuasScreen},
  HippopotamusScreen:{screen:HippopotamusScreen},
  GiraffeScreen:{screen:GiraffeScreen},
  WildBeestScreen:{screen:WildBeestScreen},
  LeopardScreen:{screen:LeopardScreen},
  QuokkaScreen:{screen:QuokkaScreen},
  EchidnaScreen:{screen:EchidnaScreen},
  BaldEagleScreen:{screen:BaldEagleScreen},
  ElkScreen:{screen:ElkScreen},
  CougarScreen:{screen:CougarScreen},
  AmericanAlligatorScreen:{screen:AmericanAlligatorScreen},
  AnacondaScreen:{screen:AnacondaScreen},
  PiranhaScreen:{screen:PiranhaScreen},
  HummingBirdScreen:{screen:HummingBirdScreen},
  LowlandTapirScreen:{screen:LowlandTapirScreen},
  BearScreen:{screen:BearScreen},
  BisonScreen:{screen:BisonScreen},
  LynxScreen:{screen:LynxScreen},
  WolverineScreen:{screen:WolverineScreen}
});
const AppContainer = createAppContainer(AppNavigator);
