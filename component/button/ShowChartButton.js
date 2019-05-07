import {StyleSheet, Button,View,TouchableOpacity, Text   } from 'react-native';
import React from 'react';


export default class ShowChartButton extends React.Component {

    render() {
        const {ccy_data,convert_month,onPress,actions} = this.props;
        console.log('ccy_dataccy_data')
        console.log(convert_month)
            return ( (ccy_data.length>1) &&
                <TouchableOpacity style={[styles.button]}  onPress={ () =>  onPress(ccy_data,convert_month)}>
                    <Text style={[styles.buttonText]}> Show Chart</Text>
                </TouchableOpacity>
            )
        }
    }


const styles = StyleSheet.create({

    button: {
        margin: 10,
        padding: 10,
        backgroundColor: '#406E9F',
        borderRadius:10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
});

