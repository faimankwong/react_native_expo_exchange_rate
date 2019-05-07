import * as types from '../actions/actionTypes';
const initialState = {
    currencyName:[
        {value:'USD'},
        {value:'EUR'},
        {value:'GBP'},
        {value:'JPY'},
        {value:'AUD'},
        {value:'CAD'},
        {value:'CHF'},
        {value:'CNY'},
        {value:'MXN'},
        {value:'SEK'}
        ]
};

export default function DroplistReducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.CurrencyName:
            return {
                currencyName: action.payload
            };
        default:
            return state;
    }
}
