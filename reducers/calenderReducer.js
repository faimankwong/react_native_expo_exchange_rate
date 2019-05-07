import * as types from '../actions/actionTypes';

const date =new Date();

const initialState = {


    Now: {
        startDate: date
    }
};

export default function calenderReducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.changeDate:
            return {
                Now: {
                    ...state,
                    startDate:action.date                }
            };


        default:

            return state;
    }
}
