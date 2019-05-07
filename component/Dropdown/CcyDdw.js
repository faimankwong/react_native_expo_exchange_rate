import React from 'react';
import { StyleSheet, View,Dimensions,Picker } from 'react-native';
let {  width } = Dimensions.get('window');

let key=0;
const picker_item =(arr)=>{
    return <Picker.Item key={key++} label={arr.value} value={arr.value} />; //recursive
}

export default class CcyDdw extends React.Component {


    render() {
        const{currencyName,currency_change,convert,placeholder}=this.props;
        let data= currencyName;
        console.log(convert)
        let item=data.map((Item)=>picker_item(Item))
        item=[<Picker.Item key={key++} label='' value='' />,...item]
        return (
            <View style={styles.container}>
                <Picker
                    selectedValue={convert}
                    onValueChange={(text)=>currency_change(placeholder,text)}
                    style={styles.ddw_style}
                    mode="dropdown"
                >
                    {item}
                </Picker>
            </View>
        );
    }

}



const styles = StyleSheet.create({
    ddw_style: {
        backgroundColor: '#000',
        color:'#ffffff'
    },
    container: {
        borderColor: '#ffffff',
        borderWidth: 1,
        width:width*0.2,
    },
});