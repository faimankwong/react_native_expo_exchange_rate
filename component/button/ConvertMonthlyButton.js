import { Button,View,TouchableOpacity,Text,StyleSheet } from 'react-native';

import React from 'react';

export default class ConvertMonthlyButton extends React.Component {

    render() {
        const{convert_month,ChangeCurrencyMonthly,invalid_action}=this.props;
        let date=new Date();
        return (
            <TouchableOpacity style={[styles.button]}   onPress={convert_month===''?()=>invalid_action(['ccy_input'],'errExistDtl'):async()=>ChangeCurrencyMonthly(date,convert_month)}>
                <Text  style={[styles.buttonText]}> Convert</Text>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({

    button: {
        margin: 10,
        padding: 10,
        width:100,
        backgroundColor: '#406E9F',
        borderRadius:10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },
});
