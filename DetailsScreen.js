import React from 'react';
import { StyleSheet, Text,ScrollView, View,Dimensions} from 'react-native';
import FlatListContacts from './FlatListContacts'
import * as siteAction from './actions/siteAction';
let {  width } = Dimensions.get('window');
import {bindActionCreators} from 'redux';
import { connect } from "react-redux";
import ConvertMonthlyButton from './component/button/ConvertMonthlyButton';
import ShowChartButton from './component/button/ShowChartButton';
import CcyDdw from './component/Dropdown/CcyDdw';
import Loader from './loader';





 class DetailScreen extends React.Component {
    constructor(props) {
        super(props);
    };

     chart = (data,ccy) => {

         // console.log("_login_login");
         this.props.navigation.navigate("Line",{data,ccy});
     };

    render() {

        const{date,Error,Convert,Now,Rate,currencyName,ChangeCurrencyMonthly,loading,actions}=this.props;
        const {startDate}=Now.Now;
        return (
            <ScrollView style={styles.container}>
                <Loader   loading={loading.loading} />
                <View style={[styles.hor_container]}>
                    <Text  style={styles.titleText}>Please Pick a Currency:     </Text>
                    <CcyDdw   convert={Convert.convert_month}  placeholder='Currency' currencyName={currencyName.currencyName} {...actions} />
                </View>
                {Error.ErrDtl!==''&&<Text style={styles.error_text}>{Error.ErrDtl}</Text>}
                 <Text style={styles.text_plot} >Base: US Dollar</Text>
                 <View style={[styles.hor_container]}>
                      <ConvertMonthlyButton convert_month={Convert.convert_month} date={startDate} {...actions}/>
                       <ShowChartButton  convert_month={Convert.convert_month} ccy_data={Rate.Rate.exchange_rate}   onPress={this.chart} {...actions}/>
                </View>
                <View style={styles.flat_height}>
                 <FlatListContacts  ccy_data={Rate.Rate.exchange_rate}  {...actions}/>
                </View>
            </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      backgroundColor: '#000',
      padding: 10,

  },
    contentText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#ffffff'
    },


    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    text_border:{
        borderColor: '#000000',
        borderWidth: 1,
        width:width*0.92
    },
    text_plot: {
      fontWeight: 'bold',
        color: '#ffffff'
    },
    hor_container: {
        flexDirection: 'row',
    },
    flat_height: {
        height: 400
    },
    error_text: {
        fontWeight: 'bold',
        color:'red'
    },
     steals: {
        backgroundColor: '#4D98E4'
    },
    flat_height2: {
        height: 400,
        width: 400
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
        actions: bindActionCreators(siteAction, dispatch)
      }
}

export default connect(mapStateToProps,mapDispatchToProps,
)(DetailScreen);


