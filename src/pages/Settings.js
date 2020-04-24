import React, {Component} from 'react';
import {View} from 'react-native';
import { Button, ListItem, Text, Icon, Left, Body, Right, Switch, List} from 'native-base';
import NavigationService from '../NavigationService';
import Filter from './Filter';
import About from './About';

export default class Settings extends Component {

    state = {
        buyukluk: 10,
    };

    render() {
        return (
            <View>
                <List>
                    <ListItem
                        onPress={() => NavigationService.navigate('Filter')}

                        icon>
                        <Left>
                            <Button style={{backgroundColor: '#FF9501'}}>
                                <Icon active name="notifications-outline"/>
                            </Button>
                        </Left>
                        <Body>
                            <Text>Bildirimleri Filtrele</Text>
                        </Body>
                        <Right>
                            <Icon name="arrow-forward"/>
                        </Right>
                    </ListItem>

                    <ListItem
                        onPress={() => NavigationService.navigate('About')}

                        icon>
                        <Left>
                            <Button style={{backgroundColor: 'red'}}>
                                <Icon active name="alert"/>
                            </Button>
                        </Left>
                        <Body>
                            <Text>Uygulama Hakkında</Text>
                        </Body>
                        <Right>
                            <Icon name="arrow-forward"/>
                        </Right>
                    </ListItem>
                </List>

            </View>
        );
    }
}
