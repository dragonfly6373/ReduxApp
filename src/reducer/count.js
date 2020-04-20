import { Type } from '../action/counter';

const countReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case Type.INCREMENT:
            state.count += 1;
            break;
        case Type.DECREMENT:
            state.count -= 1;
            break;
        case Type.ZERO:
            state.count = 0;
            break;
        default:
            break;
    }
    return state;
}

export default countReducer;
