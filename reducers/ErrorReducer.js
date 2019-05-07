import * as types from '../actions/actionTypes';


const initialState = {
    Error:'',
    ErrDtl:''
};

export default function ErrorReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'errExist':
            return {
                ...state,
                Error:action.payload
            };
        case 'errExistDtl':
            return {
                ...state,
                ErrDtl:action.payload
            };
        default:
            return state;
    }
}
