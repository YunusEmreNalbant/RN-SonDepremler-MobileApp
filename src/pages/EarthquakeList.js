import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
    FlatList,
    Image,
    TouchableOpacity,
    TextInput,
    ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import NavigationService from '../NavigationService';
import Detail from './Detail';
import {Container, Header, Item, Input, Icon, Button, Text} from 'native-base';

import firebase from 'react-native-firebase';
import AsyncStorage from '@react-native-community/async-storage';

export default class EarthquakeList extends Component {
    state = {
        location: [],
        allLocation: [],
        mag: [],
        loading: true,
        refreshing: false,
        token: null,
        page: 1,
    };

    componentDidMount() {
        this.getLocation();
        const messaging = firebase.messaging();

        messaging.getToken().then(token => {
            this.setState({token: token});
            this.saveToken(this.state.token);
        });
    }

    saveToken = async (token) => {
        try {
            await AsyncStorage.setItem('token', token);
            const user = await axios.get(`xxx.com/save-token?token=${token}`);
        } catch (e) {
            console.log(e);
        }
    };

    getLocation = async () => {
        const {data} = await axios.get('xxx.com/api/earthquake');

        this.setState({
            location: data,
            allLocation: data,
            loading: false,
            refreshing: false,
        });
    };


    renderContactsItem = ({item, index}) => {
        return (

            <TouchableOpacity
                onPress={() => NavigationService.navigate('Detail', {item})}
                style={[styles.itemContainer, {backgroundColor: index % 2 === 1 ? '#fafafa' : ''}]}>
                <Text style={styles.mag}>
                    {parseFloat(item.ml)}
                </Text>


                <View style={styles.textContainer}>
                    <Text style={styles.name}>{item.location}</Text>
                    <Text style={styles.date}>{item._date_time}</Text>
                </View>
            </TouchableOpacity>
        );
    };


    searchFilter = text => {
        const newData = this.state.allLocation.filter(item => {
            const listItem = `${item.location.toLowerCase()}`;

            return listItem.indexOf(text.toLowerCase()) > -1;
        });

        this.setState({
            location: newData,
        });
    };


    renderHeader = () => {
        const {text} = this.state;
        return (
            <Header searchBar rounded>

                <Item>
                    <Icon name="ios-search"/>
                    <Input
                        onChangeText={text => {
                            this.setState({
                                text,
                            });

                            this.searchFilter(text);
                        }}
                        value={text} placeholder="Ara..."/>
                </Item>

            </Header>

        );
    };
    renderFooter = () => {
        if (!this.state.loading) {
            return null;
        }
        return (
            <View>
                <ActivityIndicator size="large"/>
            </View>
        );
    };
    onRefresh = () => {
        this.setState({
            refreshing: true,
        }, () => {
            this.getLocation();
        });
    };

    render() {
        return (
            <View>

                <FlatList
                    ListFooterComponent={this.renderFooter()}
                    ListHeaderComponent={this.renderHeader()}
                    renderItem={this.renderContactsItem}
                    keyExtractor={item => item.id}
                    refreshing={this.state.refreshing}
                    onRefresh={this.onRefresh}
                    data={this.state.location}/>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    mag: {
        width: 30,
        color: 'red',
        fontSize: 21,
        marginRight: 10,
        textAlign: 'center',
        marginTop: 5,
    },
    mag2: {
        width: 30,
        color: 'black',
        fontSize: 20,
        marginRight: 10,
        textAlign: 'center',
        marginTop: 5,
    },
    name: {
        fontWeight: 'bold',
    },
    date: {
        fontStyle: 'italic',
    },

    location: {
        fontSize: 10,
    },
    searchContainer: {
        padding: 10,
    },
    searchInput: {
        fontSize: 16,
        backgroundColor: '#f9f9f9',
        padding: 10,
    },
});
