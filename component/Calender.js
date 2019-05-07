import React from 'react';
import { Button,Image, View,Text,Dimensions, StyleSheet,TouchableOpacity, DatePickerAndroid, TimePickerAndroid } from 'react-native';
import {formatDate} from '../api'
let { height, width } = Dimensions.get('window');
export default class Calender extends React.Component {

    render() {
        const {date,changeDate} = this.props;
        const date_str=formatDate(date)
        console.log(date_str)
        return(
        <View style={styles.container2}>
            <Image
            style={styles.image}
            source={require('../img/calender.png')}
          />
            <TouchableOpacity style={styles.container}  onPress={async () =>this.openDatePicker(date,changeDate)}>
                <Text style={styles.titleText}> {date_str}</Text>
            </TouchableOpacity>
        </View>
        );
    }
    async openDatePicker(date,changeDate){
        try {
            console.log(date)
            const {action, year, month, day} = await DatePickerAndroid.open({
                // Use `new Date()` for current date.
                // May 25 2020. Month 0 is January.
                date:date
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                changeDate( new Date(year, month, day));
            }
        } catch ({code, message}) {
            console.warn('Cannot open date picker', message);
        }
    }
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#fff',
        height: height*0.05,
        width: width*0.3,
    },
    titleText: {
        fontSize: 12,
        color:'#ffffff',
        fontWeight: 'bold',
        textAlign: "center",
        textAlignVertical: "center",
        flex: 1
    },
    image: {
        width: height*0.045,
        height:height*0.045,
        padding: 10,
    },
    container2: {
        width: width*0.5,
        flexDirection: 'row',
        marginBottom:10
    },
});

