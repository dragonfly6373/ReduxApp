export const Type = {
    DARK: 'Dark',
    LIGHT: 'Light'
}

export const dark = () => {
    console.log("# call action:", Type.DAKR);
    return ({type: Type.DARK});
}

export const light = () => {
    console.log("# call action:", Type.LIGHT);
    return ({type: Type.LIGHT});
}
