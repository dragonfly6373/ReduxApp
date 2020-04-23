import { Type } from '../action/counter';

const countReducer = (state = {value: 10}, action) => {
    switch (action.type) {
        case Type.INCREMENT: return {value: state.value + 1};
        case Type.DECREMENT: return {value: state.value -1};
        case Type.ZERO: return {value: 0};
        default: return Object.assign({}, state);
    }
}

export default countReducer;
