import React, {Component} from 'react';

import 'react-native-gesture-handler';
import NavigationService from './src/NavigationService';
import Router from './src/Router';

class App extends Component {
  render() {
    return (
        <Router ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}/>
    );
  }
}

export default App;
