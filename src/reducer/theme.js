import { Type } from '../action/theme';

const themeReducer = (state = {theme: Type.LIGHT}, action) => {
    if (action.type == Type.DARK) return {theme: Type.DARK};
    return {theme: Type.LIGHT};
}

export default themeReducer;
