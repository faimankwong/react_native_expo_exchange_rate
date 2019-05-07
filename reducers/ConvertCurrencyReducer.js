import * as types from '../actions/actionTypes';
const initialState = {
    Convert:{
        convert_from:"",
        convert_to:""
    },
    convert_month:''
};

export default function ConvertCurrencyReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'currency_form':
            return {
                Convert: {
                    ...state,
                    convert_from:action.text,
                    convert_to:state.Convert.convert_to
                },
            };
        case 'currency_to':
            return {
                Convert: {
                    ...state,
                    convert_from:state.Convert.convert_from,
                    convert_to:action.text,
                },
            };
        case 'currency_month':
            return {
                    ...state,
                convert_month:action.text
            };
        default:
            return state;
    }
}
