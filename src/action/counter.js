export const Type = {
    INCREMENT: 'Increment',
    DECREMENT: 'Decrement',
    ZERO: 'Zero'
}

export const increment = () => {
    console.log("# call action:", Type.INCREMENT);
    return({type: Type.INCREMENT});
}

export const decrement = () => {
    console.log("# call action:", Type.DECREMENT);
    return ({type: Type.DECREMENT});
}

export const zero = () => {
    console.log("# call action:", Type.ZERO);
    return ({type: Type.ZERO});
}
