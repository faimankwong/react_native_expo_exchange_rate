import React from 'react';
import { StyleSheet, Text,ScrollView, View,Dimensions } from 'react-native';
import * as siteAction from './actions/siteAction';
let {  width } = Dimensions.get('window');
import {bindActionCreators} from 'redux';
import { connect } from "react-redux";
import Calender from './component/Calender';
import ConvertButton from './component/button/ConvertButton';
import CcyDdw from './component/Dropdown/CcyDdw';
import InputField from './component/InputField';
import Loader from './loader';



class MainScreen extends React.Component {

    render() {

        const { Now,Error,textfield,Convert,result,currencyName,loading,actions} = this.props;
        const {amount} =textfield.textfield;
        const {startDate}=Now.Now;
        return (
            <ScrollView style={styles.container}>
                <Loader
                    loading={loading.loading} />
                 <Text style={styles.titleText}>Choose a date from below:</Text>
                {Error.Error!==''&&<Text  style={styles.error_text}>{Error.Error}</Text>}
                <Calender date={startDate} {...actions} />
                <View  style={styles.hor}>
                   <Text style={styles.titleText}>Amount:               </Text>
                    <InputField  amount={amount}  {...actions} />
                </View>

                    <View  style={styles.hor}>
                        <Text style={styles.titleText}>Currency From:    </Text>
                        <CcyDdw  convert={Convert.Convert.convert_from}  placeholder='Currency From'   currencyName={currencyName.currencyName} {...actions} />
                    </View>
                    <View  style={styles.hor}>
                          <Text style={styles.titleText}>Currency To:         </Text>
                          <CcyDdw  convert={Convert.Convert.convert_to}   placeholder='Currency to' currencyName={currencyName.currencyName} {...actions} />
                    </View>

                <ConvertButton amount={amount} convert={Convert.Convert} date={startDate} {...actions}/>
                {(amount!==''||Convert.Convert.convert_from!==''||Convert.Convert.convert_to!=='')
                    &&<Text style={styles.contentText}>({amount} {Convert.Convert.convert_from}  to  {Convert.Convert.convert_to} ) </Text>}
                <Text style={styles.titleText}>Amount:  {result.result}</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingTop: 30,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    contentText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#ffffff'
    },


    text_border:{
        borderColor: '#ffffff',
        borderWidth: 1,
        width:width*0.92
    },
    textInput: {
             flex: 1,
        fontSize: 16,
        width: 300,
    },
    error_text: {
        fontWeight: 'bold',
        color:'red'
    },
    hor: {
        flex: 1,
        flexDirection:'row',
        marginTop:10,
        marginBottom:5
    },
});


function mapStateToProps(state) {
    return {
        Now:state.calenderReducer,
        Rate:state.exchangeRateReducer,
        textfield:state.TextReducer,
        currencyName:state.DroplistReducer,
        Convert:state.ConvertCurrencyReducer,
        result:state.ConvertResultReducer,
        loading:state.screenLoadReducer,
        Error:state.ErrorReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(siteAction, dispatch),
    }
}

export default connect(mapStateToProps,mapDispatchToProps,
)(MainScreen);


