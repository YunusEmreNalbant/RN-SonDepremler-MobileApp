import React, {Component} from 'react';
import {StyleSheet,View,Animated} from 'react-native';


class AnimatedMarker extends Component {
    state={
        animation: new Animated.Value(1)
    };

    componentDidMount(){
        this.startAnimation();
    }

    startAnimation = ()=>{
      Animated.loop(
          Animated.sequence([
              Animated.timing(this.state.animation,{
                  toValue:0.2,
                  duration:1000
              }),
              Animated.timing(this.state.animation,{
                  toValue:1,
                  duration:1000
              })
          ])
      ).start();
    };

    render() {
        const animatedStyles  = {
            opacity:this.state.animation,
            transform:[{
                scale:this.state.animation
            }]
        }
        return (
           <Animated.View style={[styles.marker, animatedStyles]}/>
        );
    }
}

const styles = StyleSheet.create({
    marker: {
        width:25,
        height: 25,
        borderRadius: 40,
        backgroundColor: 'red'
    }
})

export default AnimatedMarker;
