import React, {Component} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import MapMarker from 'react-native-maps/lib/components/MapMarker'; // remove PROVIDER_GOOGLE import if not using Google Maps
import AnimatedMarker from '../components/AnimatedMarker';
class Detail extends Component {

    constructor(props) {
        super(props);
        this.item = props.navigation.getParam('item');
    }

    state = {
        mapRegion: null,
        currentLatitude: null,
        currentLongitude: null,
        LATLNG: {
            latitude: null,
            longitude:null
        },
    };

    componentDidMount() {
        console.log(parseFloat(this.item.latitude))
        this.setState({'LATLNG':{'latitude':parseFloat(this.item.latitude),'longitude':parseFloat(this.item.longitude)}});

    }

    render() {

        const lat = parseFloat(this.item.latitude);
        const lng = parseFloat(this.item.longitude);
        const title = this.item.location;
        return (
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    showsUserLocation={true}
                    region={{
                        latitude: lat,
                        longitude: lng,
                        latitudeDelta: 1.915,
                        longitudeDelta: 0.0921,
                    }}
                >
                    <MapMarker
                        coordinate={{latitude: lat, longitude: lng}} title={title}
                    >
                        <AnimatedMarker></AnimatedMarker>
                    </MapMarker>


                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },

});

export default Detail;
