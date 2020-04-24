import * as React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Detail from './pages/Detail';
import EarthquakeList from './pages/EarthquakeList';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Settings from './pages/Settings';
import { Icon} from 'native-base';
import Filter from './pages/Filter';
import About from './pages/About';

const AppStack = createStackNavigator({
    EarthquakeList: {
        screen: EarthquakeList,
        navigationOptions: {
            headerShown: false
        },
    },

    Detail: {
        screen: Detail,
        navigationOptions: {
            title: 'DEPREM KONUMU',
        },
    },

    Filter :{
        screen:Filter,
        navigationOptions:{
            title:'Minimum Büyüklük'
        }
    }
});

const AppStack2 = createStackNavigator({
    Settings: {
        screen:Settings,
    },
    Filter :{
        screen:Filter,
        navigationOptions:{
            title:'Minimum Büyüklük'
        }
    },
    About:{
        screen:About,
        navigationOptions:{
            title:'Uygulama Hakkında'
        }
    }
})
const TabNavigator = createBottomTabNavigator({
    DEPREMLER:{
        screen:AppStack,
        navigationOptions:{
            tabBarIcon: <Icon active name="pulse" />

        }
    },
    AYARLAR: {
        screen:AppStack2,
        navigationOptions:{
            tabBarIcon: <Icon active name="settings" />

        }
    }
});





export default createAppContainer(TabNavigator);
