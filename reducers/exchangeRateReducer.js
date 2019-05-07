import * as types from '../actions/actionTypes';
const initialState = {
    Rate:{
        exchange_rate:  [{key:'',value:'',per:''}]
    }
};

export default function exchangeRateReducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.ChangeCurrency:
            return {
                Rate: {
                    ...state,
                    exchange_rate: action.payload
                }
            };

        case types.ChangeCurrencyMonthly:
            return {
                Rate: {
                    ...state,
                    exchange_rate: action.payload
                }
            };

        default :
            return state;
    }
}

