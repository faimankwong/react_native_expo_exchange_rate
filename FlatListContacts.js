import React from 'react'
import {FlatList} from 'react-native'
import PropTypes from 'prop-types'
import Row from './Row'

_keyExtractor = (item, index) => item.key;

const diff_per =(arr,loop_cnt)=>{
    let diff_arry=arr;
    if (loop_cnt===arr.length-1){
        diff_arry[loop_cnt].per = (diff_arry[loop_cnt].key ==='' ? '' : 'N/A');
        diff_arry=[{key:'Date',value:'Rate',per:'% Change'},...diff_arry]
        return diff_arry;
    }
    const per=((diff_arry[loop_cnt].value- diff_arry[loop_cnt+1].value)/diff_arry[loop_cnt].value*100).toFixed(2) ;
    diff_arry[loop_cnt].per=per+'%';
    return diff_per(diff_arry,loop_cnt+1); //recursive
}

export default class FlatListContacts extends React.Component {
    renderItem=({item})=> <Row   id={item.key} {...item} />;


    render() {
        const {ccy_data,actions} = this.props;
        const ccy_with_diff=diff_per(ccy_data,0);
        return (
        <FlatList
            data={ccy_with_diff}
            keyExtractor={this._keyExtractor}
            renderItem={this.renderItem}
            showsVerticalScrollIndicator={true}
        />
        );
}
}

FlatListContacts.propTypes = {
    contacts: PropTypes.array,
}
