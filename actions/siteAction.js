import * as types from './actionTypes';
import {ChangeCurrency_api,ChangeCurrencyMonthly_api,convert_result_api,getccyname} from '../api'

let key="ba52f9b8c9a046d5ae692dcc07e33b8b";
export function changeDate(date) {
    return {
        type: types.changeDate,
        date,
        }
}

export function change_dim() {
    console.log('change_dimchange_dim')
    return {
        type: types.change_dim
    }
}



export function ChangeText(text) {
    return {
        type: types.ChangeText,
        text
    }

}



export function invalid_action(arr,action_type) {
     let content='';
   let loop_length=(arr.length/2).toFixed(0);
    if ((action_type==='errExistDtl' ||  action_type==='errExist') &&  arr[0]==='')
        return {
            type: action_type,
            payload:content
        }

   for (let i=0;i<loop_length;i++) {
       let text= arr[i]
       let text2=''
       if (i!==loop_length)
        text2=arr[arr.length-1-i]
       if ((text === 'ccy_input')||(text2 === 'ccy_input'))
           content += 'Please Input Currency'+ "\n";
       if ((text  === 'ccy_input_from')||(text2 === 'ccy_input_from'))
           content += 'Please Input Currency From'+ "\n";
       if ((text  === 'ccy_input_to')||(text2 === 'ccy_input_to'))
           content += 'Please Input Currency To'+ "\n";
       if  ((text  === 'amt_input')||(text2 === 'amt_input'))
           content += 'Please Input Amount'+ "\n";
       if  ((text  === 'date_invalid')||(text2 === 'date_invalid'))
           content += 'Please Enter Valid Date'+ "\n";
       if  ((text  === 'is_not_num')||(text2 === 'is_not_num'))
           content += 'Please Input Number!!'+ "\n";

   }
    return {
        type: action_type,
        payload:content
    }
}



export function  loading_screen(text) {
    if (text==='true')
        return { type: types.isloading }
    if (text==='false')
        return { type: types.unloading }
}


export function ChangeAmount(text) {
       return {
        type: types.ChangeAmount,
        text
    }
}



export function ChangeCurrency(date,name) {
    return {
        type: types.ChangeAmount,
        text
    }

}

export const ChangeCurrencyMonthly  =(date,name)  => async dispatch => {
    dispatch(loading_screen('true'));
     const ccy_stack = await ChangeCurrencyMonthly_api(date,name);
    dispatch(
        [
            loading_screen('false'),
            {
                    type: 'ChangeCurrencyMonthly',
                    payload:ccy_stack
            },invalid_action([''],'errExistDtl')
    ])
}


export const convert_result =(date,amount,from,to)  => async dispatch => {
    dispatch(loading_screen('true'));
    const {rates} = await convert_result_api(date, from, to);
    let return_amt = rates[to] / rates[from] * amount
    console.log('return_amt' + return_amt)
    dispatch(
        [
            loading_screen('false'),
            {
                type: 'convert_result',
                payload: return_amt.toFixed(2)
            },invalid_action([''],'errExist')
        ])
}




export const get_ccy_name=() =>async dispatch =>{
    const data = await getccyname();
    dispatch({
        type: types.CurrencyName,
        payload:data
    })
}

export const currency_change=(action,text) =>dispatch=>{
    let type='';

    switch (action) {
        case 'Currency From':
            type = 'currency_form'
            break;
        case 'Currency to':
            type = "currency_to";
            break;
        case 'Currency':
            type = 'currency_month'
            break;
    }
    console.log('texttexttext'+text)

    dispatch([
    {
        type:type,
        text
    },
     {
        type: 'ChangeCurrencyMonthly',
        payload:[{key:'',value:'',per:''}]
    }])
}







