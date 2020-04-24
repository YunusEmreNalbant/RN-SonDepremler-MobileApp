import React, {Component} from 'react';
import {TouchableOpacity, View, FlatList} from 'react-native';
import {Container, Header, Content, List, ListItem, Text, Icon, Left, Right} from 'native-base';
import data from '../../data';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

export default class Filter extends Component {

    state = {
        item_id: '',
    };


    userInfo = async ()=> {
        const deger =await AsyncStorage.getItem('clicked_id');
        this.setState({
            item_id:deger,
        })
    };
    componentDidMount(){
       this.userInfo();
    }




    testFunc = async (clicked_id) => {
        try {
            this.setState({
                item_id: clicked_id,
            });
            const token = await AsyncStorage.getItem('token');
            await  AsyncStorage.setItem('clicked_id',JSON.stringify(clicked_id));

            await axios.get(`xxx.com/save-min?token=${token}&min=${this.state.item_id}`);
        } catch (e) {
            console.log(e);
        }
    };
    renderData = ({item, index}) => {
        return (
            <ListItem onPress={() => {
                this.testFunc(item.id);
            }}>
                <Left>
                    <Text>{item.buyukluk}</Text>
                </Left>
                <Right>
                    <Text>
                        {
                            this.state.item_id == item.id ? <Icon style={{color: 'red'}} name={'checkmark'}/> : ''
                        }
                    </Text>
                </Right>
            </ListItem>
        );
    };

    render() {
        return (

            <FlatList
                renderItem={this.renderData}
                data={data}
                keyExtractor={item => item.id}
            >


            </FlatList>

        );
    }
}
