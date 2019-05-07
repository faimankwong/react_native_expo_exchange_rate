import React from 'react'
import {StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native'


const Show_icon=(x)=> {
    if(x.indexOf('%') > -1) {
        const per=+(x.replace('%', ''));
        if (per<0)
            return ( <Image
                style={styles.image}
                source={require('./img/arrow_down.svg')}
            />)
         if (per>0)
             return ( <Image
                 style={styles.image}
                 source={require('./img/arrow_up.svg')}
             />)
    }
}



class Row extends React.Component {

    render() {
        const {props} = this
        let button;
        return (
          <View>
                <View style={styles.container1}>
                    <View  style={styles.container3}>
                        <Text  style={(props.id==='Date')?styles.title_head:styles.row}>{props.id}</Text>
                    </View>
                    <View  style={styles.container3}>
                        <Text   style={(props.id==='Date')?styles.title_head:styles.row}> {props.value}</Text>
                    </View>
                    <View  style={styles.container3}>
                        <Text  style={(props.id==='Date')?styles.title_head:styles.row}>{props.per}</Text>
                        {Show_icon(props.per)}
                    </View>
                </View>
            </View>
        )
    }
}


export default Row

const styles = StyleSheet.create({
    container1: {
        flexDirection:'row'
    },

    container3: {
        flex: 1,
        flexDirection:'row'
    },
    image: {
        width: 15,
        height:15,
        padding: 10,
        marginTop:10
    },
    row: {
        fontSize: 15,
        padding: 10,
        color: '#ffffff'
    },
    title_head: {
        fontSize: 20,
        padding: 10,
        fontWeight: 'bold',
        color: '#ffffff'
    }
});
