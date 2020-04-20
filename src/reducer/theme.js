import { Type } from '../action/theme';

const themeReducer = (state = {theme: Type.LIGHT}, action) => {
    switch (action.type) {
        case Type.DARK:
            state.theme = Type.DARK;
            break;
        default:
            state.theme = Type.LIGHT;
            break;
    }
    return state;
}

export default themeReducer;
