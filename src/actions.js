import Dispatcher from './Dispatcher';

export const Type = {
    INCREMENT: 'Increment',
    DECREMENT: 'Decrement',
    ZERO: 'Zero'
}

export const increment = () => {
    console.log("# call action:", Type.INCREMENT);
    Dispatcher.dispatch({type: Type.INCREMENT});
}

export const decrement = () => {
    console.log("# call action:", Type.DECREMENT);
    Dispatcher.dispatch({type: Type.DECREMENT});
}

export const zero = () => {
    console.log("# call action:", Type.ZERO);
    Dispatcher.dispatch({type: Type.ZERO});
}
