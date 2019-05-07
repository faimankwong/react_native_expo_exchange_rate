import * as types from '../actions/actionTypes';
import {Dimensions} from 'react-native';
let { height, width } = Dimensions.get('window');
const initialState = {
    dim: {
        height,
        width
    }

};

export default function DimensionReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'change_dim':
            return {
                dim: {
                    ...state,
                    height:Dimensions.get('window').height,
                    width:Dimensions.get('window').width
                },
            };
        default:
            return state;
    }
}
