import { Button,View } from 'react-native';
import React from 'react';

export default class ConvertButton extends React.Component {

    render() {
        const{date,amount,convert,convert_result,invalid_action}=this.props;
        const {convert_from,convert_to} =convert;
        const err_arr = ((amount,convert_from,convert_to) => {
            let arr=[];
           if (amount==='')
                  arr.push('amt_input');
            if (convert_from==='')
                  arr.push('ccy_input_from');
            if (convert_to==='')
                  arr.push('ccy_input_to');
            let date1 = new Date(date);
            let today =new Date()
            if (date1 > today)
                 arr.push('date_invalid')
            if (isNaN(amount*1))
                arr.push('is_not_num')
              return arr;
        })(amount,convert_from,convert_to);
        return (
            <Button     title="Convert"  onPress={err_arr.length>0?()=>invalid_action(err_arr,'errExist'):async()=>convert_result(date,amount,convert_from,convert_to)}></Button>
        )
    }
}
