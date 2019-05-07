import * as types from '../actions/actionTypes';
const initialState = {
    result:""
};

export default function ConvertResultReducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.convert_result:
            return {
                ...state,
                result:action.payload
            };
        default:
            return state;
    }
}
