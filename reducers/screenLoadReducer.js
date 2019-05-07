import * as types from '../actions/actionTypes';
const initialState = {
    loading:false
};

export default function screenLoadReducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.isloading:
            return {
                    ...state,
                    loading:true
            };

        case types.unloading:
            return {
                ...state,
                loading:false
            };
        default :
            return state;
    }
}

