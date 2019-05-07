import { StyleSheet, Text,ScrollView, View,TextInput,Dimensions,KeyboardAvoidingView,Button } from 'react-native';
import React from 'react';
let { height, width } = Dimensions.get('window');
export default class InputField extends React.Component {


    render() {
        const {amount,ChangeAmount}=this.props

        return (
        <View>
            <TextInput
                value={amount}
                keyboardType='numeric'
                onChangeText={ChangeAmount}
                placeholder='Input Amount: '
                style={styles.input_text}
            ></TextInput>
        </View>
        )
    }
}



const styles = StyleSheet.create({
    input_text: {
        borderColor: '#ffffff',
        borderBottomWidth: 1,
        width:width*0.5,
        color:'#ffffff'
    },
});