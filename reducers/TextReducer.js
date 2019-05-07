import * as types from '../actions/actionTypes';
const initialState = {
    textfield: {
        ccy: 'HKD',
        amount:''
    }
};

export default function TextReducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.ChangeText:
            return {
                textfield: {
                    ...state,
                    amount:state.textfield.amount,
                    ccy:action.text
                }
            };
        case types.ChangeAmount:
            return {
                textfield: {
                    ...state,
                    amount:action.text,
                    ccy:state.textfield.ccy
                }
            };

        default:

            return state;
    }
}
