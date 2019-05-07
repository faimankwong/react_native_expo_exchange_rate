import { StyleSheet, Text,ScrollView, View,TextInput,Dimensions,KeyboardAvoidingView,Button } from 'react-native';
import React from 'react';

export default class ConvertDroplist extends React.Component {

    render() {
        const{currencyName,currency_form,currency_to,convert}=this.props;
        const{convert_from,convert_to}=convert;
        return (
            <View>
                <TextInput
                    value={convert_from}
                    onChangeText={currency_form}
                    placeholder='Search...'
                ></TextInput>

                <TextInput
                    value={convert_to}
                   onChangeText={currency_to}
                    placeholder='Search...'
                ></TextInput>
            </View>
        )
    }
}